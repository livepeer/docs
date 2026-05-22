# Task 13 — Script Documentation Consolidation: Execution Sub-plan

> **Type**: Execution plan — awaiting Q1–Q5 approval before any step runs
> **Date**: 2026-03-20
> **Depends on**: `doc-recommendation.md` decisions approved (Q1–Q5)
> **Full audit**: See `script-docs.md`
> **Architecture**: See `doc-recommendation.md`
> **Branch**: `docs-v2-dev-scripts`

---

## Pre-conditions (must be true before starting)

- [ ] Q1–Q5 in `doc-recommendation.md` answered by human
- [ ] `update-jsdoc-headers.js` @type fix committed (done — current session)
- [ ] Worktree synced with latest `docs-v2-dev`

---

## Overview

Task 13 migrates the script documentation ecosystem from the current fragmented state (3
conflicting metadata sources, 2 overlapping specs, 3 overlapping catalogs, hidden spec) to
the target architecture (1 JSON registry → generated outputs, 1 human-authored spec page on nav).

**High-risk areas:**
- Migration script reads 273 JSDoc headers — any parse error produces bad registry data
- `script-governance-config.js` is used by ~15 downstream scripts — changing `CLASSIFICATION_DATA_PATH` affects all of them
- `docs.json` nav edit — malformed JSON crashes the whole site
- `structure.md` archive — must diff first to catch any content not in `script-framework.md`

**Test after every step** — do not batch multiple steps before testing.

---

## Step 1 — Fix pre-conditions

### 1.1 Sync worktree
```bash
cd /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-scripts
git fetch origin && git merge docs-v2-dev --no-edit
```

### 1.2 Commit @type fix (if not already committed)
`update-jsdoc-headers.js` now has `@type remediator` in its header. Commit if not done.

### 1.3 Verify test baseline
```bash
npm test --prefix tests -- --testPathPattern=script-docs
```
Expected: `✅ Script documentation checks passed`

---

## Step 2 — Regenerate component-registry.json

**Why first**: unblocks `docs-guide-sot.test.js` crash. One command, no risk.

```bash
node tools/scripts/generators/components/documentation/generate-component-registry.js
```

Verify: `docs-guide/component-registry.json` exists and has content.

Run full test suite:
```bash
npm test --prefix tests
```

Expected: `docs-guide-sot.test.js` no longer crashes. Other pre-existing failures (Style Guide,
MDX-safe Markdown, Docs Navigation, AI Tools Registry) are pre-existing and not caused by this step.

---

## Step 3 — Write one-time JSON migration script

**Goal**: Produce `tools/config/script-registry.json` from JSDoc headers.

**File**: `tools/scripts/generators/governance/catalogs/generate-script-registry.js`

**What it does**:
1. Reads all `.js`/`.sh`/`.py` files under `tools/scripts/` (excluding `x-archive/`, `config/`, test files)
2. Parses JSDoc header tags: @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy, @status
3. Derives `type`/`concern`/`niche` from folder path if tag is missing or malformed
4. Writes `tools/config/script-registry.json` with new schema

**New schema** (per `doc-recommendation.md`):
```json
{
  "scripts": [
    {
      "file": "tools/scripts/audits/content/quality/audit-copy-patterns.js",
      "name": "audit-copy-patterns.js",
      "type": "audit",
      "concern": "content",
      "niche": "quality",
      "purpose": "...",
      "description": "...",
      "mode": "read-only",
      "pipeline": "...",
      "scope": "...",
      "usage": "...",
      "policy": "...",
      "status": "active"
    }
  ]
}
```

**Validation**: After generation, run:
```bash
node -e "const r = require('./tools/config/script-registry.json'); console.log('entries:', r.scripts.length)"
```
Expected: ~273 entries.

Run script-docs test:
```bash
npm test --prefix tests -- --testPathPattern=script-docs
```

---

## Step 4 — Update script-governance-config.js

**File**: `tools/lib/script-governance-config.js`

**Change**: Update `CLASSIFICATION_DATA_PATH` to point to new registry:
```js
// Before:
const CLASSIFICATION_DATA_PATH = path.join(REPO_ROOT, 'tasks/reports/script-classifications.json');

// After:
const CLASSIFICATION_DATA_PATH = path.join(REPO_ROOT, 'tools/config/script-registry.json');
```

**Also update**: The `category` enum (7 old values) → `type` enum (6 new values):
```js
// Before:
const VALID_CATEGORIES = ['generator', 'validator', 'auditor', 'remediator', 'config', 'utility', 'runner'];

// After:
const VALID_TYPES = ['audit', 'generator', 'validator', 'remediator', 'dispatch', 'automation'];
```

**Risk**: ~15 scripts `require('./lib/script-governance-config')` or similar. After this change,
any script reading `CLASSIFICATION_DATA_PATH` will read the new registry. Verify the new schema
is backward-compatible OR update each consumer.

**Audit consumers first**:
```bash
grep -r "script-governance-config" tools/scripts/ --include="*.js" -l
grep -r "CLASSIFICATION_DATA_PATH" tools/ --include="*.js" -l
```

Run full test suite after this step.

---

## Step 5 — Update catalog generator

**File**: `tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js` (or equivalent)

**Change**: Update to read from new schema (`type`/`concern`/`niche` fields) instead of old
schema (`category` field).

**Output format improvement**: Current `scripts-catalog.mdx` is hard to read (flat list).
Target: grouped by type → concern → niche with counts and descriptions per group.

**Template**:
```
## Audits (42 scripts)

### content / quality (8)
| Script | Purpose | Mode |
|--------|---------|------|
| audit-copy-patterns | ... | read-only |
...
```

Run test after: `npm test --prefix tests -- --testPathPattern=script-docs`
Verify `docs-guide/catalog/scripts-catalog.mdx` renders correctly.

---

## Step 6 — Create docs-guide/policies/script-governance.mdx

**Source**: `tasks/plan/active/SCRIPT-GOVERNANCE/script-framework.md` (50KB, canonical spec)

**Process**:
1. Read `script-framework.md` in full
2. Adapt from Markdown to MDX (add frontmatter, Mintlify components)
3. Scope: 3-tier taxonomy, JSDoc 11-tag standard, @mode values, @pipeline notation, best
   practices, how to write a new script, tier table (hard-gate/soft-gate/self-heal)
4. Does NOT contain: script inventory (that's the catalog page)
5. If Q4 approved: `<Snippet>` in shared blocks from `snippets/scripts/docs-snippets/`

**Frontmatter**:
```mdx
---
title: "Script Governance"
description: "Standards, taxonomy, and JSDoc requirements for all scripts in this repo"
---
```

**Add to `docs.json` nav** — under `docs-guide/policies/`:
```json
{ "page": "docs-guide/policies/script-governance" }
```

**Risk**: `docs.json` modification. Run MDX syntax check after:
```bash
node tools/scripts/validators/content/structure/validate-mdx-safe.js docs-guide/policies/script-governance.mdx
```

---

## Step 7 — Diff structure.md → fold unique content → archive

**Why**: `structure.md` (25KB) predates `script-framework.md` (50KB). May contain unique
content not yet in the canonical spec.

**Process**:
1. Read both files
2. Identify anything in `structure.md` NOT in `script-framework.md`:
   - Specific script assignments per folder
   - Niche sub-folder decisions
   - Historical rationale notes
3. Fold unique content into `script-framework.md` or `script-governance.mdx`
4. `git mv tasks/plan/active/SCRIPT-GOVERNANCE/structure.md tasks/plan/active/SCRIPT-GOVERNANCE/x-archive/structure.md`

---

## Step 8 — Archive stale documentation

**Files to archive** (all via `git mv` to `x-archive/`):

| File | Reason |
|------|--------|
| `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` | Stale snapshot (hand-generated March 2026, pre-reclassification) |
| `tasks/plan/active/SCRIPT-GOVERNANCE/scripts-library.mdx` | Manual MDX that will drift — narrative belongs in spec page |
| `tasks/reports/script-classifications.json` | Old schema, replaced by `tools/config/script-registry.json` |

Run test suite after to verify nothing references these paths.

---

## Step 9 — Fix stale links in README.md

**File**: `tools/scripts/README.md`

**Known issues**:
- Links to `structure.md` (wrong spec — should link to `script-governance.mdx` on nav)
- Any remaining old path references

After fix, verify all links in README resolve.

---

## Step 10 — Full test suite + commit

```bash
npm test --prefix tests
```

Review results:
- `script-docs.test.js`: must be clean (0 failures)
- `docs-guide-sot.test.js`: should be clean after step 2
- Pre-existing failures (Style Guide, MDX-safe, Nav, AI Tools): note counts, confirm not increased

If Q5 approved — regenerate locale mirrors:
```bash
# After EN catalog verified:
node tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js --locale cn
node tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js --locale es
node tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js --locale fr
```
(If locale flag not supported, copy-regenerate manually.)

**CHECKPOINT** — present full results to human before merge.

---

## Risks and Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Migration script misparses JSDoc → bad registry | Medium | Dry-run first, spot-check 10 scripts |
| `script-governance-config.js` consumers break on new schema | High | Audit all consumers before step 4, update each one |
| `docs.json` edit malforms nav JSON | Low | Validate JSON after edit, pre-commit hook catches it |
| `structure.md` archive loses unique content | Medium | Full diff in step 7 before archiving |
| Locale mirror regeneration produces wrong output | Low | EN-first (Q5), defer mirrors to follow-up |
| MDX spec page has bad syntax | Low | Run mdx-safe validator after creation |

---

## Files Modified (full list)

**Created**:
- `tools/config/script-registry.json`
- `tools/scripts/generators/governance/catalogs/generate-script-registry.js`
- `docs-guide/policies/script-governance.mdx`
- (if Q4) `snippets/scripts/docs-snippets/decision-tree.mdx`
- (if Q4) `snippets/scripts/docs-snippets/jsdoc-template.mdx`
- (if Q4) `snippets/scripts/docs-snippets/script-checklist.mdx`

**Modified**:
- `tools/lib/script-governance-config.js` — CLASSIFICATION_DATA_PATH + VALID_TYPES
- `tools/scripts/generators/governance/catalogs/generate-scripts-catalog.js` — new schema
- `docs-guide/catalog/scripts-catalog.mdx` — regenerated output
- `docs.json` — new nav entry for script-governance.mdx
- `tools/scripts/README.md` — fix stale links
- (if Q5) `v2/cn/docs-guide/catalog/scripts-catalog.mdx`
- (if Q5) `v2/es/docs-guide/catalog/scripts-catalog.mdx`
- (if Q5) `v2/fr/docs-guide/catalog/scripts-catalog.mdx`

**Archived** (git mv to x-archive):
- `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md`
- `tasks/plan/active/SCRIPT-GOVERNANCE/scripts-library.mdx`
- `tasks/plan/active/SCRIPT-GOVERNANCE/structure.md` (after diff + fold)
- `tasks/reports/script-classifications.json`

---

## Open Questions (Q1–Q5) — Require Human Approval Before Execution

See `doc-recommendation.md` for full context on each.

| # | Question | Recommendation |
|---|----------|---------------|
| Q1 | Spec page location: `policies/` or `tooling/`? | `policies/` |
| Q2 | JSDoc headers authoritative (not JSON)? | Yes — JSON is derived index |
| Q3 | Component registry fix in Task 13 or separately? | Task 13 step 2 |
| Q4 | MDX-in-MDX shared snippets? | Yes, defer to after core migration |
| Q5 | Locale mirrors in Task 13 or defer? | Defer EN-first |
