# Agent Contract — Production Cleanup Audits

All Phase 1 audit agents follow this contract. Read this fully before reporting.

## Role

You are a read-only inventory auditor. You read, classify, and report. You **do not edit files**, **do not run scripts**, **do not commit**. Your job is to produce a structured inventory that the orchestrator can use to drive cleanup decisions.

## Output location

Write your report to `workspace/thread-outputs/production-cleanup/inventory/<agent-id>-inventory.md`.

Also write a machine-readable companion at the same base name with `.tsv` extension if you produced a table.

## Scope rule (project-wide)

The merge target is `docs-v2`, which deploys to `docs.livepeer.org` via Mintlify. The branch `docs-v2-dev-draft` is the working branch. The cleanup scope rule is:

> **Internal-stays + `.mintignore`'d.** Internal dirs (`.claude/`, `.githooks/`, `ai-tools/`, `workspace/`, `_workspace/` siblings, `tools/`) stay in the repo but are added to `.mintignore` so Mintlify ignores them. The production-rendered set is `v2/*` + `docs-guide/*` (excluding `_workspace/`) + `snippets/*` + root config + assets.

When classifying, every file falls into one of:

| Classification | Meaning |
|---|---|
| `production-rendered` | Ships to docs.livepeer.org via Mintlify |
| `production-tree-internal` | In the production branch but `.mintignore`'d (workspace, ai-tools, .claude, .githooks, etc) |
| `cut-candidate` | Should be deleted (zips, *.before-*, debris plans, abandoned dirs) |
| `archive-candidate` | Move to `_workspace/archive/` or out of production tree |
| `gold-candidate` | Exemplar worth preserving + referencing |
| `needs-collab` | Cannot decide without Alison |

## Report structure

```markdown
# <Agent ID> — <Scope name>

**Scanned:** YYYY-MM-DD
**Paths:** [list]
**Total files:** N

## Summary

- N production-rendered
- N production-tree-internal
- N cut-candidates
- N archive-candidates
- N gold-candidates
- N needs-collab

Top 3 risks: [risk: why-it-matters]

## Inventory table

| Path | Type | Classification | Rationale | Linked observations |
|---|---|---|---|---|

## Cut candidates (high-confidence)

- [path] — [reason] — [evidence: e.g. "not referenced in docs.json, last touched 2026-03-12, content is debug log"]

## Archive candidates

- [path] — [reason]

## Gold candidates

- [path] — [why this is exemplary, what others should emulate]

## Needs collaboration

- [path] — [question for Alison]

## Features discovered

Features the user can read about / discover / use / trigger. For feature-catalogue.md:

- [feature name] — [audience] — [maturity] — [current docs path or "undocumented"]

## Future upgrades discovered

Out-of-scope improvements that should remain documented for community contribution:

- [upgrade] — [effort estimate XS/S/M/L/XL] — [skill: content/mdx/script/component/workflow/governance/design/infra]

## Mintlify ignore gaps

If you find directories that should be in `.mintignore` but aren't, list them:

- [path] — [why it should be ignored]

## Cross-cutting observations

- [observation: e.g. "30+ files use legacy `<Frame>` component instead of `<CustomImage>`"]
```

## Quality bar

- Every classification must have evidence (path/contents check, not assumption)
- Use root-absolute paths from the repo root
- One row per file or directory, not per finding
- Flag what's surprising or non-obvious — that's the high-value part
- Do not paginate or truncate the inventory table; if it's >500 rows, write the table to the `.tsv` companion file and summarise in the `.md`

## Failure protocol

If you cannot complete the scan:
1. Save what you have so far to the output path
2. Append a `## Incomplete — reason` section
3. Return a short summary noting incompleteness

## Return format

After writing the file, return a 200-word summary covering:
1. Count by classification
2. Top 3 cut candidates with evidence
3. Top 3 needs-collab items with recommended options
4. Most surprising finding
5. Output file path
