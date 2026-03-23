# Script Governance — Decision Log

All major decisions, corrections, scope changes, and resolved questions.
Named, dated, with rationale. Source of truth across context resets and handoffs.

---

## D1 — Folder taxonomy: `<type>/<concern>/<niche>` three-tier model
**Date**: 2026-03-19
**Decision**: Adopted three-tier `<type>/<concern>/<niche>` taxonomy for all scripts under `operations/scripts/`. Six types: `audits`, `generators`, `validators`, `remediators`, `dispatch`, `automations`. Four concerns per type: `content`, `components`, `governance`, `ai`. Niches are concern-specific sub-groupings.
**Rationale**: Flat `tools/scripts/` root was unmaintainable (70+ scripts, no discovery path). Consistent structure enables auto-cataloging from path alone.
**Reference**: `script-framework.md`, `plan.md` Task 1

---

## D2 — No deletions policy
**Date**: 2026-03-19
**Decision**: All superseded scripts go to `operations/scripts/x-archive/` via `git mv`. Nothing is ever deleted.
**Rationale**: Preserve history, allow reference, prevent accidental loss of logic.

---

## D3 — Pre-commit hook scope (Task 3)
**Date**: 2026-03-19
**Decision**: Pre-commit hook reduced to 5 hard gates only: MDX syntax, docs.json schema, deletion guard, allowlist/v1 freeze, codex isolation. Everything else moved to GitHub Actions PR workflows. Target: < 5 second pre-commit.
**Rationale**: 1,599-line pre-commit was blocking daily workflow. Index/catalog regeneration scripts must never run in pre-commit — too slow.

---

## D4 — Index/catalog scripts never in pre-commit
**Date**: 2026-03-19
**Decision**: `generate-docs-index`, `generate-pages-index`, `generate-component-registry`, `generate-script-registry`, and similar regeneration scripts must only run post-commit or post-PR via GitHub Actions, never in pre-commit.
**Rationale**: These are slow (full repo scans) and block commit workflows. They are self-healing via scheduled CI.

---

## D5 — Validator prefix conventions (Task 5)
**Date**: 2026-03-20
**Decision**: `validate-*` = read-only rule checks. `enforce-*` = hard-gate blockers. `test-*` = browser/Puppeteer runtime tests. Prefix encodes intent at a glance.
**Rationale**: Old mixed naming (`validate-*` used for both soft and hard gates) made pipeline tier ambiguous.

---

## D6 — Dispatcher concern rule (Task 3 / Task 12.6)
**Date**: 2026-03-20
**Decision**: Dispatchers may mix script *types* for ONE concern. They must NOT bundle multiple unrelated concerns. Master dispatchers (dispatching other dispatchers) are acceptable. `run-all.js`-style bundling of everything is not.
**Rationale**: Concern separation is the primary governance axis. Mixing concerns in a dispatcher creates uncontrolled scope, unclear failure attribution, and untestable pipelines.

---

## D7 — Governance tier encoding: approach B (Task 9a)
**Date**: 2026-03-23
**Decision**: Governance tiers are encoded in the existing `@pipeline` tag values, not a new `@tier` tag. Values: `P1` = pre-commit (hard-gate), `P2` = push/required CI (hard-gate), `P3` = PR check (soft-gate), `P5`/`P6` = scheduled cron (self-heal), `manual` = on-demand.
**Rationale**: No new tag standard needed — `@pipeline` already carries this information. Approach A (new `@tier` tag) would have required migrating all 147 script headers. Approach B only required cleaning up 6 malformed values.
**Reference**: `tools/config/script-governance.json` (generated manifest)

---

## D8 — Task 9 split: 9a (safe) + 9b (blocked)
**Date**: 2026-03-23
**Decision**: Task 9 split into 9a (script-side governance tiers — safe to execute) and 9b (docs-guide governance docs — blocked on DOCUMENTATION thread).
**Rationale**: Task 9 docs-guide work (policies/, catalog/ structure) would conflict with active DOCUMENTATION plan decisions D1 (concern as prefix vs subfolder), D-CONCERN (is `governance` a valid concern value), D9 (catalog file renames). 9b must not proceed until those are resolved and locked.
**Blocked by**: DOCUMENTATION thread decisions D1, D-CONCERN, D9

---

## D9 — Tasks 12.5 and 12.6 added to plan
**Date**: 2026-03-23
**Decision**: Two new tasks added before final merge:
- **Task 12.5** — Pipeline trigger review + mermaid diagrams: map actual vs ideal pipeline flow, flag misplaced triggers, propose reassignments
- **Task 12.6** — Dispatcher audit + master dispatcher coordination (INTERACTIVE): ensure all dispatchers separate by concern, design master dispatcher coordination pattern
**Rationale**: Area 3 of Task 8 surfaced dispatcher bundling concerns (`run-all.js`, multi-concern dispatchers) that are larger than the performance scope. Require dedicated interactive tasks.

---

## D10 — `snippets/` directory: no taxonomize needed
**Date**: 2026-03-23
**Decision**: `operations/scripts/snippets/` contains only `luma-calendar.jsx` and `test-scripts.sh`. No sub-taxonomy or restructure required. Note: `luma-calendar.jsx` should eventually move to `snippets/automations/` in the docs repo (content component, not a script).
**Rationale**: Task 9a flag scoped this as a pre-restructure holdover to investigate. Investigation found nothing requiring action.

---

## D11 — Pre-existing test failures (not caused by this work)
**Date**: 2026-03-23
**Decision**: The following test failures confirmed pre-existing and not introduced by this restructure:
- Style Guide: 559 errors — content quality issues in docs pages
- MDX-safe Markdown: 98 errors — pre-existing MDX content issues
- Docs Navigation: 4 errors — Resource HUB tab config + .mintignore issues
- Root Allowlist Format: 3 errors — `.cursorrules`, `ASSISTANT.md`, `.mintlify` legacy entries
- Portable Skill Export: 4 errors in run-all context, 0 in isolation — context-dependent artifact
- Docs-guide SOT crash — `docs-guide/component-registry.json` not present in scripts worktree (generated file in main docs repo)
**Rationale**: All listed failures exist on the branch before any of this plan's changes and are owned by other plans or content work.

---

## D12 — AI-tools registry skill rename fix (Task 10)
**Date**: 2026-03-23
**Decision**: Fixed `ai-tools/registry/ai-tools-registry.json` entry: `validate-component-layouts` → `component-layout-governance` (both `id` and `path` fields). This was a Task 5 artifact — skill directory was renamed but registry was not updated.
**Rationale**: AI-tools registry test was failing with 3 errors. The skill dir `component-layout-governance` existed but registry pointed to `validate-component-layouts`.

---

## D13 — `operations/node_modules` → symlink to `tools/node_modules`
**Date**: 2026-03-23
**Decision**: `operations/node_modules` is a symlink to `../tools/node_modules`. This is how shared dependencies (including `gray-matter`) resolve for scripts in `operations/` without duplicating the install.
**Rationale**: Noted during Task 10 investigation of gray-matter MODULE_NOT_FOUND report from another thread. Confirmed not an issue — symlink provides correct resolution.
