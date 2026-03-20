# Script Documentation — Architecture Recommendation

> **Type**: Decision document — recommendations for approval
> **Date**: 2026-03-20
> **Feeds into**: Task 13 execution (see plan.md)
> **Full audit**: See script-docs.md

---

## TL;DR

There are currently 54 surfaces documenting scripts across this repo. Most of the duplication, drift, and confusion traces back to **one root cause**: the specification, the catalog, and the metadata are all in different places with different schemas and no declared relationship between them.

The fix is simple in principle: **one JSON registry → everything generated from it**, plus **one spec page on the nav**.

---

## What We Have Now (the mess)

### Three metadata sources that conflict

| Source | Schema | Problem |
|--------|--------|---------|
| JSDoc headers in every script | New: `@type / @concern / @niche` (11 tags) | Correct — but only lives per-file |
| `tasks/reports/script-classifications.json` | Old: `category` (7 values, doesn't match new `type` enum) | Silently wrong — missing `concern`, `niche`, `mode`, `description` |
| `docs-guide/catalog/scripts-catalog.mdx` | Duck-types both above | Auto-generated but inconsistent output |

The generator reconciles these via duck-typing. A script with `@type: audit` in its JSDoc header can have `category: validator` in the JSON. These are treated as equivalent. They are not.

### Two overlapping specs

- `structure.md` — 25KB, folder taxonomy + JSDoc tag spec, written first
- `script-framework.md` — 50KB, canonical spec, written later, more complete

Neither references the other. `tools/scripts/README.md` links to `structure.md` — the wrong one. A contributor following that link misses the canonical spec entirely.

### Three overlapping catalogs

- `catalog.md` — hand-generated March 2026, pre-reclassification, **stale**
- `scripts-catalog.mdx` — auto-generated, current, on nav, **hard to read**
- `scripts-library.mdx` — manually written during this task, **will drift**

### The canonical spec is hidden

`script-framework.md` — the document that defines how every script in this repo should be written — lives in `tasks/plan/active/SCRIPT-GOVERNANCE/`. Not on the nav. Not linked from docs-guide. Only findable if you already know it exists.

### Test suite crash

`docs-guide/component-registry.json` is missing. `generate-ui-templates.js` expects it. `docs-guide-sot.test.js` crashes. This is the component analogue of the same problem — no JSON registry driving generated outputs.

---

## What We Need (the recommendation)

### One JSON registry per domain

**For scripts:**
```
tools/config/script-registry.json
```
Replaces `tasks/reports/script-classifications.json`. New schema matches JSDoc headers:
`type`, `concern`, `niche`, `purpose`, `description`, `mode`, `pipeline`, `scope`, `policy`, `status`.

**For components:**
```
docs-guide/component-registry.json
```
Currently missing. Regenerate via `generate-component-registry.js`. Already the expected input for `generate-ui-templates.js` and `components-catalog.mdx`.

### Everything generated FROM the JSON

```
tools/config/script-registry.json
    │
    ├── docs-guide/catalog/scripts-catalog.mdx      ← auto-generated, on nav
    ├── tools/script-index.md                        ← scoped dev quick-ref
    ├── tests/script-index.md                        ← scoped dev quick-ref
    └── [7 other scope indexes]

docs-guide/component-registry.json
    │
    ├── docs-guide/catalog/components-catalog.mdx   ← auto-generated, on nav
    └── [VS Code snippets, UI templates, etc.]
```

Generated files are **never hand-edited**. They carry a generated-file banner enforced by the pre-commit hook.

### Two human-authored MDX pages per domain (on nav, stable)

**Scripts:**

| Page | Path | Content |
|------|------|---------|
| Governance spec | `docs-guide/policies/script-governance.mdx` | 3-tier taxonomy, JSDoc standard, @mode values, @pipeline notation, best practices, how to write a new script. Promoted from `script-framework.md`. |
| Catalog | `docs-guide/catalog/scripts-catalog.mdx` | Full listing, auto-generated from `script-registry.json`. Already on nav. Improve readability. |

**Components:**

| Page | Path | Content |
|------|------|---------|
| Governance spec | `docs-guide/frameworks/component-governance.mdx` | Already exists and is on nav. Keep as-is. |
| Catalog | `docs-guide/catalog/components-catalog.mdx` | Auto-generated from `component-registry.json`. Already on nav. |

### The key principle: spec ≠ catalog

The **spec page** explains the governance model — taxonomy, standards, how to contribute. Human-authored, stable, updated intentionally.

The **catalog page** lists what exists. Auto-generated, always current, never hand-edited.

They are separate pages. Other nav pages that need to reference either one link to it — they do not copy the content inline.

---

## What to Remove

| File | Remove because |
|------|---------------|
| `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` | Stale snapshot. Replaced by generated catalog. |
| `tasks/plan/active/SCRIPT-GOVERNANCE/structure.md` | Superseded by script-framework.md. Diff first, fold any unique content in, then archive. |
| `tasks/plan/active/SCRIPT-GOVERNANCE/scripts-library.mdx` | Manual MDX that will drift. Narrative belongs in spec MDX page. |
| `tasks/reports/script-classifications.json` (old schema) | Replaced by `tools/config/script-registry.json`. |

All removals via `git mv` to `x-archive/` — no deletions.

---

## What to Fix Before Execution

**Must happen before JSON migration:**

1. **27 mistyped `@type` values** — listed in `audit-report.md`. Examples: `docs-fact-registry.js` (typed audit, is validator), `docs-research-packet.js` (typed audit, is dispatch), `generate-seo.js` (typed generator, is remediator). If migrated with wrong types, the registry starts wrong.

2. **`docs-guide/component-registry.json` missing** — run `generate-component-registry.js` to regenerate. Unblocks the test suite crash in `docs-guide-sot.test.js`.

---

## Execution Order (Task 13)

1. Fix 27 mistyped `@type` values
2. Regenerate `docs-guide/component-registry.json`
3. Write one-time migration script → `tools/config/script-registry.json` (reads JSDoc headers + old JSON → new schema)
4. Update `tools/lib/script-governance-config.js` — point `CLASSIFICATION_DATA_PATH` to new registry
5. Update catalog generator — read new schema, produce readable grouped MDX
6. Create `docs-guide/policies/script-governance.mdx` from `script-framework.md` + add to `docs.json` nav
7. Diff `structure.md` → fold unique content → archive
8. Archive `catalog.md` and `scripts-library.mdx`
9. Fix stale links in `tools/scripts/README.md`
10. Run full test suite — confirm clean

---

## Decisions Needed

> **Q1: Spec page location** — `docs-guide/policies/` or `docs-guide/tooling/`?
>
> `policies/` sits alongside agent-governance-framework, root-allowlist-governance, audit-system-overview — all governance rules.
> `tooling/` sits alongside lpd-cli, dev-tools — practical how-to tools.
>
> **Recommendation: `docs-guide/policies/`** — writing scripts follows governance rules, not just tooling preferences.

---

> **Q2: Who owns the JSON?** — Is `script-registry.json` generated from JSDoc headers, or are JSDoc headers generated from the JSON?
>
> **Recommendation: JSDoc headers are authoritative.** They live with the code, version with the code, and are the per-script ground truth. The JSON is a derived index — regenerated from JSDoc headers by a generator script whenever scripts change. Do not invert this.

---

> **Q3: Should component-registry work happen in Task 13 or separately?**
>
> It is currently blocking the test suite. It is a one-command fix (`generate-component-registry.js`).
>
> **Recommendation: Fix in Task 13 step 2.** The blocker is trivial to resolve and enabling clean tests is worth it.
