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
| `tutorial` placement is section-dependent | Tab-specific tutorial → `/guides`; community/external tutorial → `/resources` |
| `resource` vs `reference` are distinct pageTypes | `reference` = structured lookup (specification, compendium, changelog); `resource` = curated discovery (external tools, directories, showcases, community channels) |
| Pipeline scope: gateways + orchestrators first | Only gateways and orchestrators are structurally close to the standard section vocabulary. All other tabs are post-pipeline. |
| UK English throughout | No US spelling anywhere in pipeline definitions or output |

---

## Locked Enums

### pageType (7 primary)
`concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`

### pageVariant (locked)
`overview` (cross-type), `specification`, `compendium`, `changelog`, `knowledge-hub` — see [framework.md](framework.md)

`knowledge-hub` = `resource` variant — curated external/public content: tools, directories, showcases, community channels, ecosystem link collections

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
| 6 | Industry + niche (field taxonomy — terminology + voice register) | ✅ [industry.md](industry.md) |
| 7 | Complexity + lifecycleStage | ✅ [complexity.md](complexity.md) |
| ▶ 8a | IA per tab — section structure, audience journey, page groups | 🔄 [08a-ia-per-tab.md](../../v2/_workspace/references/content-pipeline/08a-ia-per-tab.md) — DRAFT, awaiting checkpoint |
| 8 | Prompt input spec — what each pipeline prompt needs in its context block | TBD |
| 9 | Voice rules per audience — feeds Pass A context blocks and review criteria | TBD |
| 10 | Formalise naming rules as a pipeline prompt (consolidate + move) | 🔄 [Prompts/section-naming.md](Prompts/section-naming.md) — draft |
| 11 | Page templates per pageType (Part A) + golden examples (Part B) | TBD |

---

## Related Resources (Repo-wide)

| File | What it contains |
|---|---|
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | Canonical source of truth — all framework definitions must align here |
| `snippets/templates/pages/page-composition-framework.mdx` | Page composition rules — input to Step 11 |
| `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` | Section naming prompt (moved from `v2/_workspace/research/content-naming.md`) — input to Step 10 |
| `v2/_workspace/research/ai-coauthoring.md` | Purpose + evaluation research notes — informed pagePurpose.md |
| `tasks/plan/active/TERMINOLOGY-COLLATE/` | Full terminology collation across all tabs — input to veracity library |
| `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` | Script catalog — reference for validation tooling in Phase 2 |
| `ai-tools/ai-skills/` | Existing skills — to be replaced or extended by pipeline skills in Phase 2 |
