---
title: Handoff — component-usage-map.json Generator (2A-II.4)
status: open
created: 2026-03-21
recipient: COMPONENT-GOVERNANCE thread
---

# Handoff: component-usage-map.json Generator (2A-II.4)

## What this is

There is an orphaned generator at:

```
tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js
```

This script generates a component usage map. Its current `@pipeline` annotation says `manual — not yet in pipeline`. It is not called by any CI workflow, hook, or `lpd` command.

## What is known

- **Script path:** `tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
- **Output:** unknown — likely `docs-guide/catalog/components-catalog.mdx` or `component-usage-map.json` (to be confirmed by reading the script)
- **Pipeline status:** completely manual, no automation
- **Related:** `tools/vscode/components/component-registry.json` — the plan notes this may be stale vs. `docs-guide/component-registry.json`

## What COMPONENT-GOVERNANCE needs to do

1. **Read and document** what `generate-docs-guide-components-index.js` actually produces — what is its output file, what does it index, where does the output live
2. **Trace dependents** — what reads the output? Is it referenced in docs.json, AGENTS.md, any CI workflow?
3. **Decide pipeline placement** — once the output and dependents are understood:
   - If it indexes component library state: add to `generate-docs-guide-catalogs.yml` (trigger: `snippets/components/**` changes)
   - If it's a standalone component-governance artifact: create its own workflow pair (`generate-component-catalog.yml` + `check-component-catalog.yml`)
4. **Resolve `component-registry.json` discrepancy** — `tools/vscode/components/component-registry.json` and `docs-guide/component-registry.json` may be duplicates or diverged. Clarify which is authoritative and update the VSCode extension if needed.

## Constraint to carry forward

**Pre-commit hook is hard-gates-only.** Do NOT add generators to pre-commit. Use CI workflows (push-to-main auto-commit + PR check pair) matching the pattern in:
- `.github/workflows/generate-docs-guide-catalogs.yml`
- `.github/workflows/check-docs-guide-catalogs.yml`

## Why this was deferred

REPO-STRUCTURE-GOV could not safely determine the output target or pipeline placement without understanding the component governance model. That context lives in COMPONENT-GOVERNANCE.
