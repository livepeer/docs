# Content Pipeline — Governance Index

All framework decisions, definitions, and architectural rules for the page review pipeline.
Use this as the entry point for any agent or session working on this pipeline.

---

## Master Plan

| File | What it contains |
|---|---|
| [plan.md](plan.md) | Full 22-step execution plan, progress tracker, decision log, open questions |
| [collation.md](collation.md) | Dated inventory of every repo resource with themes — input to framework |
| [research.md](research.md) | External research references including Shtuka `livepeer-data-geography` v1 |

---

## Framework Definitions (Phase 1)

### Page Taxonomy

| File | What it contains |
|---|---|
| [framework.md](framework.md) | Canonical enum definitions — pageType + pageVariant, audience, persona per audience, purpose enum |
| [pageType.md](pageType.md) | Per-page audit report — assessed pageType, pageVariant, purpose per v2 page |

### Purpose

| File | What it contains |
|---|---|
| [pagePurpose.md](pagePurpose.md) | Full purpose definitions — 15 values; each with industry, definition, description, process, information type, governs (content need / outcome / voice / structure) |

### Information Layer

| File | What it contains |
|---|---|
| [information-type.md](information-type.md) | 9 information type definitions — factual, conceptual, procedural, analytical, evaluative, structural, change, narrative, technical; purpose → type mapping; key architectural decisions |
| [veracity.md](veracity.md) | Veracity standards and sources registry per information type — what "verified" means for each type, authoritative sources, pipeline failure conditions |

---

## Key Architectural Decisions

All decisions are logged in [plan.md → Decision Log](plan.md). Critical ones summarised here:

| Decision | Rule |
|---|---|
| Information type is section-level | Agent identifies type per section at runtime — not page-level, not tagged in content |
| Information type is not frontmatter | Derived from `purpose` via the mapping in information-type.md |
| `veracityStatus` is the only new frontmatter field from the information layer | `verified` / `unverified` / `stale` |
| Purpose → information type mapping defines permitted types | Not that every section is the same type — a build page has narrative intro, factual prereqs, procedural steps, technical code |
| Persona is array field, audience-scoped | Optional, derived; not primary taxonomy |
| `overview` is a pageVariant, not a pageType | Cross-type variant meaning "entry/orientation page for this section" |
| `navigation` stays as primary pageType | Pure routing pages — portals, tab roots |
| UK English throughout | No US spelling anywhere in pipeline definitions or output |

---

## Locked Enums

### pageType (7 primary)
`concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`

### pageVariant (selected)
`overview` (cross-type), `specification`, `compendium`, `library` — see [framework.md](framework.md)

### audience (7)
`founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community`

### persona (per audience)
See [framework.md](framework.md) for full per-audience persona lists

### purpose (15)
`orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`

### information type (9)
`factual`, `conceptual`, `procedural`, `analytical`, `evaluative`, `structural`, `change`, `narrative`, `technical`

### complexity (3)
`beginner`, `intermediate`, `advanced`

### lifecycleStage (7)
`discover`, `evaluate`, `setup`, `build`, `operate`, `troubleshoot`, `optimise`

### veracityStatus (3)
`verified`, `unverified`, `stale`

### industry (9) — array, max 2, first dominates
`technical`, `finance`, `economics`, `business`, `marketing`, `governance`, `broadcast`, `AI`, `livepeer` — see [industry.md](industry.md) — DRAFT pending lock

### niche (8) — array
`web3`, `protocol`, `tokenomics`, `AI`, `video`, `streaming`, `hardware`, `infrastructure` — see [industry.md](industry.md)

---

## Pending Definitions (Phase 1 remaining)

| Step | Task | File |
|---|---|---|
| 5b | Information category (format/layout) | Deferred to Phase 2 |
| 6 | Industry + niche (field taxonomy — terminology + voice register) | [industry.md](industry.md) — DRAFT, pending lock |
| 7 | Complexity + lifecycleStage | ✅ [complexity.md](complexity.md) |
| 8a | IA per tab — section structure, audience journey, page groups | TBD |
| 8 | Generation contract (how all fields combine) | TBD |
| 9 | Voice rules per audience | TBD |
| 10 | Section naming rules | TBD |
| 11 | Page structure rules per pageType | TBD |

---

## Related Resources (Repo-wide)

| File | What it contains |
|---|---|
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | Canonical source of truth — all framework definitions must align here |
| `snippets/templates/pages/page-composition-framework.mdx` | Page composition rules — input to Step 11 |
| `v2/_workspace/research/content-naming.md` | Section naming rubric — input to Step 10 |
| `v2/_workspace/research/ai-coauthoring.md` | Purpose + evaluation research notes — informed pagePurpose.md |
| `tasks/plan/active/TERMINOLOGY-COLLATE/` | Full terminology collation across all tabs — input to veracity library |
| `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` | Script catalog — reference for validation tooling in Phase 2 |
| `ai-tools/ai-skills/` | Existing skills — to be replaced or extended by pipeline skills in Phase 2 |
