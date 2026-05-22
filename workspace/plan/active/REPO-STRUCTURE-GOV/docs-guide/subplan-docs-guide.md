---
title: Docs Guide Cleanup & Framework Subplan
status: active
parent: REPO-STRUCTURE-GOV/plan.md
created: 2026-03-21
---

# Docs Guide Cleanup & Framework Subplan

## Current State

### Sections (7 canonical + _workspace)

| Section | Files | Status |
|---------|-------|--------|
| `catalog/` | 8 files (6 generated, 2 JSON schemas) | ✓ Clean — auto-generated, schema-governed |
| `contributing/` | 2 files | ✓ Clean |
| `features/` | 7 files | ⚠️ Mixed — some pages thin/stale |
| `frameworks/` | 4 files | ⚠️ Unclear — purpose of this section vs. policies is ambiguous |
| `policies/` | 15 files | ⚠️ Bloated — too many policies, overlap likely |
| `repoOps/` | 3 files (new 2026-03-21) | ✓ Clean — just built |
| `tooling/` | 6 files + reference-maps/ subdir | ⚠️ Mixed — content-brief-template.md is a .md not .mdx |
| `_workspace/` | archive/, drafts/, design specs | ✓ OK — not nav |

### Root-level clutter in docs-guide/

| File | Issue |
|------|-------|
| `source-of-truth-guide.mdx` | Sits at section root, not inside a subsection — special case or should move? |
| `docs-glossary.md` | `.md` file — violates all-MDX rule; also at root, not in any subsection |
| `component-registry.json` | JSON data file at section root — belongs in `catalog/` or `snippets/data/` |
| `component-registry-schema.json` | Same issue |
| `component-usage-map.json` | Same issue |

---

## Problems to Solve

### 1. Framework vs. Policies — unclear separation

`frameworks/` contains: `component-governance.mdx`, `content-system.mdx`, `page-taxonomy-framework.mdx`, `research-skill-workflow.mdx`

`policies/` contains 15 files covering governance, allowlists, audit systems, cleanup quarantine, agent governance, etc.

**The problem:** There is no clear rule distinguishing what goes in `frameworks/` vs. `policies/`. Both contain governance-adjacent content.

**Candidate rule:** `frameworks/` = decision models and taxonomies (how to think about something); `policies/` = enforceable rules with explicit "must/must not" language and enforcement mechanisms. This distinction is not currently documented or consistently applied.

### 2. Policies section is bloated (15 files)

Many policies were created in rapid governance sprints. Some may overlap, be redundant, or be at different levels of maturity. No audit has been done.

Files that may overlap:
- `generated-artifact-and-hook-governance.mdx` vs. `repoOps/maps/enforcement-map.mdx` — both document hooks/CI
- `audit-system-overview.mdx` vs. `quality-gates.mdx` — audit vs. quality may be the same concept
- `agent-governance-framework.mdx` — is this a framework or a policy?
- `skill-pipeline-map.mdx` — is this a policy or a feature map?

### 3. features/ section — thin pages and stale content

`data-integrations.mdx`, `automations.mdx`, `architecture-map.mdx` — unknown freshness and completeness. No lastVerified dates. No owner.

### 4. tooling/ — one .md file

`content-brief-template.md` is a `.md` not `.mdx`. Violates the all-MDX rule per docs-guide-structure-policy. (`.mintignore` has an explicit un-ignore rule for it — the policy violation is known but not resolved.)

### 5. JSON data files at docs-guide/ root

`component-registry.json`, `component-registry-schema.json`, `component-usage-map.json` are data files sitting at the section root. They should not be co-located with MDX content pages.

---

## Recommendations

### R1 — Define framework/policy boundary in policy doc

Update `docs-guide-structure-policy.mdx` with a clear decision rule:
- `frameworks/`: decision models, taxonomies, "how to think about X" — no enforcement language
- `policies/`: enforceable rules with "must/must not", version, owner, enforcement table

### R2 — Audit policies/ for overlap and promote/merge

Review all 15 policy files. For each pair that overlaps, decide: merge, cross-reference, or one becomes a section of the other.

Priority overlaps to resolve:
- `generated-artifact-and-hook-governance` ↔ `repoOps/maps/enforcement-map`
- `audit-system-overview` ↔ `quality-gates`
- `agent-governance-framework` — reclassify to `frameworks/` or rename to `-policy.mdx`
- `skill-pipeline-map` — reclassify to `features/` or `repoOps/maps/`

### R3 — Resolve root-level clutter

| File | Recommended action |
|------|--------------------|
| `docs-glossary.md` | Rename to `.mdx`, move to `features/glossary.mdx` or `contributing/glossary.mdx`; add to docs.json |
| `component-registry.json` | Move to `snippets/data/` or `docs-guide/catalog/` as a data artifact |
| `component-registry-schema.json` | Same as above |
| `component-usage-map.json` | Same as above |
| `source-of-truth-guide.mdx` | Keep at root — it is the section entry point; document this exception in policy |

### R4 — Standardize features/ page maturity

All `features/` pages need: `lastVerified`, `owner` frontmatter, and a minimum content bar (not just a header and one paragraph).

### R5 — Resolve content-brief-template.md

Convert to `.mdx` (trivial), remove the `.mintignore` un-ignore exception, close the policy violation.

---

## Tasks

> All tasks require explicit go-ahead before execution.

- [ ] **DG.1** Update `docs-guide-structure-policy.mdx` — add framework/policy decision rule (R1)
- [ ] **DG.2** Audit all 15 `policies/` files — produce overlap matrix; recommend merge/reclassify for each (R2)
- [ ] **DG.3** Move JSON data files from docs-guide/ root → appropriate location (R3) — requires docs.json audit for any references
- [ ] **DG.4** Rename `docs-glossary.md` → `.mdx`, move to appropriate subsection, wire into docs.json (R3)
- [ ] **DG.5** Audit `features/` pages — add frontmatter, flag thin pages (R4)
- [ ] **DG.6** Convert `tooling/content-brief-template.md` → `.mdx`, remove .mintignore exception (R5)
- [ ] **DG.7** Reclassify `agent-governance-framework.mdx` (frameworks/ or rename to -policy.mdx) — pending decision
- [ ] **DG.8** Reclassify `skill-pipeline-map.mdx` — pending decision

---

## Open Questions (need human decision)

1. Should `source-of-truth-guide.mdx` stay at root or move into a subsection (e.g. `contributing/`)? It's currently the first nav item in the Docs Guide group.
2. Should `agent-governance-framework.mdx` live in `frameworks/` or `policies/`?
3. Is `skill-pipeline-map.mdx` a policy, a feature, or a repoOps map?
4. Should the `frameworks/` section be merged into `policies/` (simplifying to 6 top-level sections)?
