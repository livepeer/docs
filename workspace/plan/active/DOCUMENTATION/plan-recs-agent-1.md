# Documentation Governance — Project Management Recommendation Plan

**Date:** 2026-03-23
**Author:** Agent (plan-recs-agent-1)
**Input sources:**
- `audits/master-audit.md`
- `recommendations-pipeline.md`
- `recommendations.md`
- `research-best-practices.md`
- `system-canonical-design/master.mdx`

---

## Executive summary

The documentation system is architecturally sound and incompletely implemented. The design decisions are good. The patterns are right. The failure mode is wiring gaps: scripts that should trigger CI don't; governance configs declare states that don't match the actual CI; generated files carry banners pointing to scripts that no longer exist at those paths. Nothing here requires a redesign. This is a completion and enforcement problem.

The plan below is organised into six sprint blocks, a dependency map, human decision gates, sequencing risk analysis, and five quick wins you can start today.

---

## 1. Sprint blocks

### Sprint 1 — Fix production data errors (unblock everything downstream)

**Done condition:** `validate-generated-artifacts.js --check` exits 0. Zero generated files with banner paths that don't resolve. `ai-tools.mdx` parses in Mintlify.

**What happens:**
- Fix the stale banner path in `generate-component-docs.js` generator template (the path `operations/scripts/generate-component-docs.js` doesn't exist; it's the wrong directory)
- Trigger `workflow_dispatch` on `generate-docs-guide-catalogs.yml` to propagate the corrected banner to all 32 v2 component pages
- Fix all 4+ stale paths in `generated-artifacts.json` (component-governance, docs-guide-generated, ai-tools-registry entries)
- Fix the missing `---` frontmatter delimiter in `docs-guide/features/ai-tools.mdx` (line 1)
- Fix the `dev-tools.mdx` Tip callout that points to a non-existent Python script
- Fix the wrong filename reference in `source-of-truth-policy.mdx` (`docs-guide/overview.mdx` → `docs-guide/source-of-truth-guide.mdx`)

**Sequencing within the block:** All fixes are edits to source files, not generated files. They can run in any order. The `workflow_dispatch` trigger should run after the banner fix, not before. Every other fix is independent.

**Agent work:** All six fixes are agent-executable with no human decision required. One agent can execute all six in a single session.

**Why this block comes first:** Sprint 2 writes validators that check path integrity. If the paths are wrong when the validator is written, the validator starts life failing. Fix the data before writing the check.

---

### Sprint 2 — Wire the governance validators (make the meta-layer self-enforcing)

**Done condition:** `validate-generated-artifacts.js` and `validate-governance-surfaces.js` both pass in `check-docs-guide-catalogs.yml`. All surfaces with `rollout_state: autofix` in `ownerless-governance-surfaces.json` have actual CI wiring.

**What happens:**
- Write `validate-generated-artifacts.js`: for every path in `generated-artifacts.json` (`generator`, `sources`, `validators`, `repair_commands`), check `fs.existsSync()`, exit non-zero on first failure
- Write `validate-governance-surfaces.js`: for each surface in `ownerless-governance-surfaces.json`, parse `gate_layer` and `rollout_state`, cross-reference against actual workflow YAML files and `.githooks/pre-commit`, fail if declared state is not implemented
- Add both validators as steps in `check-docs-guide-catalogs.yml`
- Add JSON schemas for `generated-artifacts.json` and `ownerless-governance-surfaces.json` (these are the inputs the new validators depend on; schema them before wiring to CI)
- Update `ownerless-governance-surfaces.json` `rollout_state` values that are aspirational: change `autofix` → `advisory` for any surface not yet wired to CI so the validator doesn't immediately fail; leave accurate annotations for the wired surfaces

**Sequencing within the block:** Write both validators before adding them to CI. Add schemas before the validators consume the files in CI. Update `ownerless-governance-surfaces.json` to match actual state before the surface validator runs (or it will fail correctly, which is fine as long as the CI failure is expected).

**Agent work:** Both validators are new scripts (~50 lines each). Agent-executable. No human decision required on implementation.

**Human gate for this block:** A human must decide the rollout approach for `validate-governance-surfaces.js` — specifically, whether surfaces that declare `autofix` but have no CI wiring should immediately fail CI or emit a warning. See Human Gates section.

**Why this block comes before CI wiring:** Wiring CI without the governance validator means the governance config can claim a surface is wired when it isn't. The validator is what turns the governance config from aspirational to verified. Write the validator first; wire the surfaces second.

---

### Sprint 3 — Wire the five ungoverned surfaces to CI

**Done condition:** `check-docs-guide-catalogs.yml` runs `--check` for all 10 concerns. `generate-docs-guide-catalogs.yml` runs `--write` for all ungoverned surfaces on push→main.

**What happens, in order:**
1. **UI Templates** (highest gap — declares `autofix`, has nothing wired): Add `generate-ui-templates.js --write` to `generate-docs-guide-catalogs.yml` with path filter `snippets/templates/**`. Add `generate-ui-templates.js --check` to `check-docs-guide-catalogs.yml`. Update `rollout_state` in surfaces config.
2. **Scripts**: Add `script-docs.test.js --write` to `generate-docs-guide-catalogs.yml` with path filter `tools/scripts/**`, `operations/scripts/**`. Add `script-docs.test.js --check` to `check-docs-guide-catalogs.yml`.
3. **Components catalog and usage-map**: Add `scan-component-imports.js` as a step to `generate-component-registry.yml` (after the registry is committed, so the usage-map regenerates atomically). Add `generate-docs-guide-components-index.js --check` to `check-docs-guide-catalogs.yml`.
4. **AI tools registry**: Add `validate-ai-tools-registry.js --check` to `check-ai-companions.yml` with path filter `ai-tools/**`. Update `rollout_state` from `migrating` to `active`.

**Sequencing within the block:** Each surface is independent. Run UI Templates first (highest declared-vs-actual gap). The AI tools registry wiring is a different workflow file (`check-ai-companions.yml`) — it can run in parallel with the others.

**Parallel agent work:** Two agents can run concurrently: Agent A wires UI Templates + Scripts to `check-docs-guide-catalogs.yml`. Agent B wires AI tools registry to `check-ai-companions.yml`. Components catalog wiring goes into `generate-component-registry.yml` which is a third file — a third agent can handle it. No shared file conflicts.

**Why UI Templates before Scripts:** UI Templates is the most severe declared-vs-actual governance mismatch. Scripts has zero CI but at least doesn't make a false claim. Fix the lie first.

---

### Sprint 4 — Resolve the race condition and split mixed-concern generators

**Done condition:** No two auto-commit workflows can race to push to main for the same set of changes. Each generator produces exactly one output concern.

**What happens:**
1. **Race condition fix (Option A — chain the workflows):** Add `generate-component-docs.js --write` as a direct step in `generate-component-registry.yml` (after the registry commit step), rather than leaving it to trigger via a separate push event. This makes component docs generation a deterministic downstream step of registry generation.
2. **Split `generate-docs-guide-indexes.js`:** Extract into two generators:
   - `generate-workflows-catalog.js` → produces `workflows-catalog.mdx`, path filter `.github/workflows/**`
   - `generate-github-templates-catalog.js` → produces `templates-catalog.mdx`, path filter `.github/ISSUE_TEMPLATE/**`, `.github/PULL_REQUEST_TEMPLATE/**`
3. **Split `generate-ui-templates.js`:** Extract into two generators:
   - `generate-ui-templates-catalog.js` → produces `ui-templates.mdx` + `.vscode/templates.code-snippets`, path filter `snippets/templates/**`
   - `generate-component-snippets.js` → produces `.vscode/components.code-snippets`, path filter `snippets/components/**`

**Sequencing within the block:** Fix the race condition first. The race condition is a data integrity risk that can corrupt git history; the generator splits are a code quality improvement. After the race condition is fixed, each generator split is independent.

**Agent work:** Race condition fix is a workflow YAML edit — agent-executable. Each generator split is a refactoring task (copy function, update imports, update workflow references) — agent-executable if given clear instructions. Risk: these edits touch production CI workflows. A human should review each workflow change before merge.

**Why this block comes after Sprint 3:** Sprint 3 wires the ungoverned surfaces using the existing generators. If you split the generators at the same time you're wiring them to CI, you're modifying files mid-wiring. Do the wiring first, then refactor.

---

### Sprint 5 — Complete the dispatch layer and enable advisory taxonomy enforcement

**Done condition:** `lpd repair --surface X` works for all 8 surfaces. New v2 pages with invalid `pageType` values fail the PR gate for the changed file.

**What happens:**

**Dispatch layer:**
- Audit all 8 surfaces in `ownerless-governance-surfaces.json` for dispatcher coverage (some have dispatchers, paths may be stale)
- For each surface without a working dispatcher: write a `@type dispatch` script that runs validate → generate → commit-if-changed
- Update `repair_commands` in `ownerless-governance-surfaces.json` to reference each dispatcher
- Add `workflow_dispatch:` to any generation workflow that is missing it

**Taxonomy enforcement:**
- Add `frontmatter-taxonomy.test.js --check-changed` to `check-docs-guide-catalogs.yml` — validates `pageType`, `audience`, `status`, `purpose` on files changed in the PR only; invalid values fail; missing values warn
- Add soft JSDoc completeness warning for any `.js` script touched in a PR (warn, do not fail; graduate to failure after 60-day burn-in)
- Write the adapter parity validator: read `AGENTS.md` core section headers; for each of the 9 adapter files, check the same sections are present; add to `check-ai-companions.yml`

**Sequencing within the block:** Dispatch layer first (it provides the repair commands that the taxonomy enforcement references). Adapter parity validator is independent of dispatch and can run in parallel.

**Why taxonomy enforcement comes here and not earlier:** Enforcing changed-file taxonomy before the dispatch layer is complete means contributors get failures they can't repair. The dispatch layer is the repair path. Wire repair before enforcement.

---

### Sprint 6 — Write the contributor guide and complete stale documentation

**Done condition:** A contributor who has never authored a page in this repo can set up, author, and submit their first page without asking for help. All stub and draft docs-guide pages are current.

**What happens:**
- Write `v2/resources/documentation-guide/authoring-guide.mdx`: one page covering custom components (how to find, import, use — top 5 by usage frequency), page templates (how to select and apply), native Mintlify components (what you don't need to import), frontmatter fields (required, valid values, examples), VS Code snippet keys
- Add the authoring guide to `docs.json` nav
- Complete `docs-guide/contributing/mintlify.mdx`: set `status: current`, cover all native Mintlify components with at least one example
- Populate `docs-guide/features/ai-features.mdx` with real content (or decide to merge into `ai-tools.mdx` — see Human Gates)
- Write `docs-guide/policies/agent-documentation-contract.mdx`
- Complete the `contribute/` → `docs-guide/contributing/` migration (REPO-STRUCTURE-GOV Phase 1.3)
- Verify and enable the Mintlify MCP server for the docs subdomain

**Sequencing within the block:** The authoring guide is independent and should be written first — it has the highest user-facing impact. The `ai-features.mdx` content decision requires a human gate (see below). The `contribute/` migration should run after the authoring guide is written, since the migration produces contributor content that the guide may reference.

**Agent work:** The authoring guide, `mintlify.mdx` completion, and `agent-documentation-contract.mdx` are all content writing tasks — fully agent-executable given the source materials. The `ai-features.mdx` decision requires human input first.

---

## 2. Parallelisation map

### Genuinely independent streams

These work streams operate on disjoint files and can run across concurrent sessions without conflict:

| Stream A | Stream B | Conflict? | Reason |
|---|---|---|---|
| `check-docs-guide-catalogs.yml` additions (Sprint 3) | `check-ai-companions.yml` additions (Sprint 3) | None | Different workflow files |
| Scripts CI wiring | UI Templates CI wiring | None | Different generator scripts and different path filters |
| Adapter parity validator (new script) | Dispatch layer scripts (new scripts) | None | Different new files |
| Authoring guide content (Sprint 6) | Taxonomy enforcement (Sprint 5) | None | Different files entirely |
| Freshness contracts (`ttlDays` in frontmatter taxonomy) | Generator splits (Sprint 4) | None | Different files; taxonomy is in `frontmatter-taxonomy.js`, generators are separate files |
| `validate-generated-artifacts.js` (Sprint 2) | `validate-governance-surfaces.js` (Sprint 2) | None | Different new scripts; both read from config files but don't write |

### Falsely parallelisable (share a file or config)

These appear independent but share a resource and must be coordinated:

| Work item A | Work item B | Shared resource | Risk if uncoordinated |
|---|---|---|---|
| Adding UI Templates `--write` step to `generate-docs-guide-catalogs.yml` | Adding Scripts `--write` step to `generate-docs-guide-catalogs.yml` | `generate-docs-guide-catalogs.yml` | Merge conflict on the same YAML step block; one agent's change overwrites the other's |
| Fixing stale paths in `generated-artifacts.json` (Sprint 1) | Writing `validate-generated-artifacts.js` that reads `generated-artifacts.json` (Sprint 2) | `generated-artifacts.json` | Validator written against the pre-fix content will check wrong paths; fix must land before validator is tested against real state |
| Splitting `generate-docs-guide-indexes.js` (Sprint 4) | Adding `--check` steps for templates-catalog to `check-docs-guide-catalogs.yml` (Sprint 3) | Both reference `generate-docs-guide-indexes.js` by name | If Sprint 3 wires the old script and Sprint 4 splits it, the Sprint 3 wiring references a script that no longer exists |
| Updating `ownerless-governance-surfaces.json` rollout_states (Sprint 2) | The governance surfaces validator reading those rollout_states (Sprint 2) | `ownerless-governance-surfaces.json` | Validator runs against outdated state; update the JSON before wiring the validator to CI |
| `generate-component-registry.yml` race condition fix (Sprint 4) | `scan-component-imports.js` addition to the same workflow (Sprint 3) | `generate-component-registry.yml` | Both edits touch the same workflow file; must be in the same PR or sequenced |

### Dependency graph

```
Sprint 1 (data fixes)
    └── Sprint 2 (governance validators)
            └── Sprint 3 (CI wiring for ungoverned surfaces)
                    └── Sprint 4 (race condition + generator splits)
                            └── Sprint 5 (dispatch layer + taxonomy enforcement)

Sprint 6 (contributor guides) — independent of all above; can run in parallel with Sprints 3-5
R2 (Mintlify platform features: llms.txt check, MCP server) — fully independent; do any time
```

**Critical path:** Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4 → Sprint 5.

Sprint 6 is off the critical path. It can be parallelised with Sprints 3 through 5 without conflict.

---

## 3. Human-only decision gates

These decisions cannot be delegated to agents. An agent making the wrong choice here will produce technically correct but strategically wrong output that is harder to undo than if the decision had been deferred.

---

### Gate H1 — Governance validator rollout mode

**Decision:** When `validate-governance-surfaces.js` runs in CI, should surfaces with `rollout_state: autofix` but no actual CI wiring immediately **fail** the PR gate, or emit a **warning**?

**Options:**
- **Option A (immediate failure):** Any surface that declares a `rollout_state` not reflected in actual CI wiring fails the PR gate. This is the correct long-term state but will immediately break CI for all PRs until all 4 gap surfaces (ui-templates, ai-tools-registry, frontmatter-contract, script-governance) are wired.
- **Option B (warning + 30-day graduation):** The validator emits warnings but does not block PRs. After 30 days (or after all surfaces are wired), switch to failure mode.

**What breaks if wrong:**
- Wrong choice (A before surfaces are wired): CI permanently red for all PRs; forces an emergency fix; blocks all contributor work.
- Wrong choice (B indefinitely): The validator never enforces; you get the same aspirational-not-implemented problem the governance config already has, just in a new script.

**Recommendation:** Choose Option B (warnings) for the initial rollout of the validator in Sprint 2, with a committed transition to Option A at the end of Sprint 3 when surfaces are wired. Document the graduation date in the validator comments.

---

### Gate H2 — `ai-features.mdx` disposition

**Decision:** Should `docs-guide/features/ai-features.mdx` be (A) populated with real content as a standalone overview, or (B) merged into `docs-guide/tooling/ai-tools.mdx` and removed?

**Options:**
- **Option A:** Populate `ai-features.mdx` with a feature overview (what AI features exist in the repo). Keep `ai-tools.mdx` as the operational tooling reference. Two pages with clearly separated scopes.
- **Option B:** Merge `ai-features.mdx` content into `ai-tools.mdx`. Remove the `ai-features.mdx` required-file requirement from `source-of-truth-policy.mdx`. One page, one canonical source.

**What breaks if wrong:**
- An agent populating `ai-features.mdx` without this decision will make structural assumptions about scope that may conflict with the human's intent. Content written for the wrong scope requires a rewrite, not an edit.
- An agent deleting `ai-features.mdx` without approval removes a file listed as "required" in `source-of-truth-policy.mdx`, triggering a validator failure.

**This decision must be made before Sprint 6 begins for the AI documentation work.**

---

### Gate H3 — Race condition fix strategy

**Decision:** For the auto-commit race condition between `generate-component-registry.yml` and `generate-docs-guide-catalogs.yml`, use Option A (chain the workflows — add downstream generation as a step in the registry workflow) or Option B (`workflow_run:` trigger — make the catalog workflow wait for the registry workflow to complete)?

**Options:**
- **Option A (chain):** Faster execution; one workflow handles the full chain. Requires modifying `generate-component-registry.yml` to add catalog generation steps. Creates a larger, more complex workflow file.
- **Option B (`workflow_run:`):** Cleaner separation of concerns; each workflow stays focused. Adds latency (catalog generation waits for the registry workflow to complete before starting). Easier to maintain independently.

**What breaks if wrong:**
- Option A chosen without understanding the component registry workflow's full scope: you may unintentionally create side effects on catalog generation that are triggered only when the registry changes (not when catalog sources change independently).
- Option B chosen without considering latency: in a busy repo, the `workflow_run:` chain can add 5-10 minutes to the time before generated docs reflect a push to main.

**This decision blocks Sprint 4. It must be made before Sprint 4 begins.**

---

### Gate H4 — `contribute/` → `docs-guide/contributing/` migration scope

**Decision:** Does the Phase 1.3 migration include ALL content from `contribute/CONTRIBUTING/`, or only the GIT-HOOKS and AGENT-INSTRUCTIONS files identified in the recommendations?

**Options:**
- **Option A (full migration):** Move all files; update all inbound links in `docs.json`, `AGENTS.md`, and `v2/` pages. Complete the migration in one session.
- **Option B (selective migration):** Move only the two identified files (GIT-HOOKS.md, AGENT-INSTRUCTIONS.md); leave the rest for a later cleanup. Less disruption; may leave the repo in a partially-migrated state.

**What breaks if wrong:**
- Partial migration that leaves some `contribute/` content in place creates ongoing dual-location confusion — the exact problem the migration is meant to fix.
- Full migration that misses inbound link updates breaks the `docs.json` nav and any `AGENTS.md` references that pointed to the old paths.

**This decision must be made before Sprint 6 begins for the contributing migration work.**

---

## 4. Risk and sequencing

### Riskiest thing to do first

**Writing and wiring `validate-governance-surfaces.js` before fixing the governance gaps it will find.**

If you write this validator and wire it to `check-docs-guide-catalogs.yml` before the 4 surfaces with declared-but-unimplemented states are corrected in the config (Sprint 2), CI immediately fails for every PR in the repo. This is not a theoretical risk — the validator is specifically designed to find exactly the gaps that currently exist. Wiring it before fixing the config or choosing a warning-first rollout mode (Gate H1) makes CI permanently red.

**Mitigation:** Sprint 1 corrects the data. Gate H1 decides the rollout mode. Sprint 2's execution must update `ownerless-governance-surfaces.json` to reflect actual current state (downgrading aspirational `autofix` entries to `advisory` until they are actually wired) in the same PR that wires the validator.

---

### Riskiest thing to do last

**Leaving the race condition unfixed after wiring more surfaces to CI.**

Sprint 3 adds more `--write` steps to `generate-docs-guide-catalogs.yml`. Each new `--write` step is an additional auto-commit to main. The race condition between `generate-component-registry.yml` and `generate-docs-guide-catalogs.yml` worsens as more generation steps are added. The longer the race condition remains unfixed after Sprint 3, the higher the probability of a competing auto-commit corrupting the git history on a busy day.

Do not delay Sprint 4 beyond one session after Sprint 3 completes.

---

### What breaks downstream if done in wrong order

| Wrong sequence | What breaks downstream |
|---|---|
| Sprint 3 (CI wiring) before Sprint 1 (data fixes) | CI wires the component registry generator, but the generator template still has a stale banner path. The newly-wired CI propagates 32 pages with wrong repair commands on the next push. |
| Sprint 4 generator splits before Sprint 3 wiring | Sprint 3 adds `--check` for `generate-docs-guide-indexes.js`. Sprint 4 splits that script into two. The Sprint 3 `--check` step now references a non-existent script. CI breaks immediately. |
| Sprint 5 taxonomy enforcement before Sprint 5 dispatch layer | Contributors get PR failures for invalid `pageType` values with no repair path. `lpd repair` doesn't work yet. Enforcement is hostile without a fix command. |
| Sprint 2 governance validator wired to CI before `ownerless-governance-surfaces.json` is corrected | CI fails for every PR until the 4 declared-but-unimplemented surfaces are either wired or their `rollout_state` is corrected. Immediate red CI for all contributors. |
| Authoring guide written before components catalog is regenerated (R9 in recommendations.md) | The guide's "how to find components" section points contributors to a catalog showing `undefined` categories. The first impression of the authoring system is broken. Re-run the generator before the guide references the catalog. |

---

## 5. Quick wins (do today)

Each of these takes under 30 minutes, has no dependencies on other work, and visibly improves system reliability or accuracy.

---

### QW1 — Fix the wrong filename in `source-of-truth-policy.mdx`

**File:** `docs-guide/policies/source-of-truth-policy.mdx`
**Fix:** Change `docs-guide/overview.mdx` → `docs-guide/source-of-truth-guide.mdx` in the required canonical files list.
**Why it matters:** Source-of-truth policy with a wrong path is self-undermining. Every agent or human following the policy to verify a canonical file will get a 404. This single edit fixes the credibility of the policy document.
**Time:** Under 5 minutes.

---

### QW2 — Fix the stale path reference in `docs-guide/docs-glossary.md`

**File:** `docs-guide/docs-glossary.md`
**Fix:** Change the `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` reference to the correct current path (`workspace/plan/active/...`).
**Why it matters:** The glossary is read by agents orienting in the repo. A stale internal path in the glossary sends agents to a file that doesn't exist at that location, breaking their context.
**Time:** Under 5 minutes.

---

### QW3 — Re-run the components-catalog generator

**Command:** `node tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write`
**Why it matters:** The catalog currently shows `undefined` categories (confirmed in recommendations.md, R9). Every contributor or agent reading `docs-guide/catalog/components-catalog.mdx` to understand the component taxonomy gets corrupted data. One command fixes this without any code changes.
**Time:** Under 10 minutes (run command, verify output, commit).

---

### QW4 — Add the missing `---` frontmatter delimiter to `docs-guide/features/ai-tools.mdx`

**File:** `docs-guide/features/ai-tools.mdx`
**Fix:** Add `---` at line 1. The file currently starts with bare frontmatter key-value pairs. Mintlify cannot parse page metadata without the opening delimiter.
**Why it matters:** This is a production parse failure. The page's metadata is invisible to Mintlify, meaning title, description, and status are all not registered. It affects every agent and human that queries the AI tools documentation.
**Time:** Under 5 minutes.

---

### QW5 — Fix the `dev-tools.mdx` stale Tip callout

**File:** `docs-guide/tooling/dev-tools.mdx`
**Fix:** Change `python3 operations/scripts/generate-component-snippets.py` to the correct Node.js path. Remove or replace the draft AI-comment block at lines 23-70 that is marked as not-live documentation.
**Why it matters:** This is a contributor-facing page for tooling. The Tip callout is the first actionable instruction a contributor sees when setting up their dev environment. Running a command that fails on the first try erodes trust in the documentation system as a whole.
**Time:** Under 15 minutes.

---

## Appendix: Recommendation cross-reference

| Rec ID | Source file | Sprint block | Notes |
|---|---|---|---|
| R1.1, R1.2, R1.3, R1.4 (pipeline) | `recommendations-pipeline.md` | Sprint 1 | All data fixes |
| R9 (recommendations.md) | `recommendations.md` | QW3 / Sprint 1 | Components catalog re-run |
| R5 (recommendations.md) | `recommendations.md` | QW1 | Wrong filename in SoT policy |
| R2.1, R2.2 (pipeline) | `recommendations-pipeline.md` | Post-Sprint 1, anytime | Platform features — independent |
| R3.1-R3.4 (pipeline) | `recommendations-pipeline.md` | Sprint 3 | CI wiring for ungoverned surfaces |
| R4.1, R4.2 (pipeline) | `recommendations-pipeline.md` | Sprint 4 | Generator splits |
| R5 (pipeline) | `recommendations-pipeline.md` | Sprint 4 | Race condition fix |
| R6 (pipeline) | `recommendations-pipeline.md` | Sprint 5 | Freshness contracts |
| R7 (pipeline) | `recommendations-pipeline.md` | Sprint 5 | Taxonomy enforcement |
| R8 (pipeline) | `recommendations-pipeline.md` | Sprint 5 | Dispatch layer |
| R9.1, R9.2, R9.3 (pipeline) | `recommendations-pipeline.md` | Sprint 2 | Governance validators |
| R10 (pipeline) | `recommendations-pipeline.md` | Sprint 2 | Config schemas |
| R12 (pipeline) | `recommendations-pipeline.md` | Sprint 6 | Contributor guides |
| R1 (recommendations.md) | `recommendations.md` | Sprint 6 | contribute/ migration (Gate H4) |
| R4 (recommendations.md) | `recommendations.md` | Sprint 6 (Gate H2) | ai-features.mdx |
| R6, R7 (recommendations.md) | `recommendations.md` | Sprint 5 | audience + maintenance frontmatter |
| R17, R18 (recommendations.md) | `recommendations.md` | Sprint 5 | Secrets + adapter parity to surfaces config |
