# Content Structure & Templates — Research Index

**Created**: 2026-04-07
**Thread**: CONTENT-STRUCTURE-TEMPLATES
**Purpose**: Master collation of all research findings for the page layout & composition framework.

---

## Decisions (locked this session)

| # | Decision | Answer | Authority |
|---|---|---|---|
| D1 | Template canonical location | `snippets/templates/pages/` (pages), `snippets/templates/pages/blocks/` (blocks), `snippets/templates/` root (guidelines & frameworks), `snippets/templates/supporting/` (prompts, skills, tooling) | Human — 2026-04-07 |
| D2 | Composable section scope | Section-level first (Prerequisites, Steps, Related Pages). Sub-section patterns (code+explanation, warning+workaround) as Phase 2 | Human — 2026-04-07 |
| D3 | PageType enum | 7 canonical types from `CONTENT-WRITING/Frameworks/pageType.md`: navigation, concept, tutorial, guide, instruction, reference, resource | Human — 2026-04-07 |
| D4 | Framework home | `snippets/templates/` initially; promote to `docs-guide/` later | Human — 2026-04-07 |

---

## Research Files

| # | File | What it covers |
|---|---|---|
| 01 | [01-page-anatomy.md](./01-page-anatomy.md) | 4-zone page structure, header/intro/body/footer rules, H2 flow patterns, opening/closing patterns |
| 02 | [02-component-mapping.md](./02-component-mapping.md) | 13 information types → component mapping, component selection decision tree, badge colour system |
| 03 | [03-section-patterns.md](./03-section-patterns.md) | Composition rules, nesting hierarchy, file architecture for complex pages, naming rubric, Mintlify constraints |
| 04 | [04-gold-standard.md](./04-gold-standard.md) | 5 gold-standard pages analysed (structure, components, why they work), recommended skeletons per pageType |
| 05 | [05-anti-patterns.md](./05-anti-patterns.md) | Forbidden patterns, Mintlify constraints, repo-enforced rules, common mistakes |
| 06 | [06-gaps-and-decisions.md](./06-gaps-and-decisions.md) | Source conflicts, missing pieces, what needs building |

---

## Source Material

### Canonical (source of truth)

| Source | Path | What it governs |
|---|---|---|
| pageType definitions | `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md` | 7 primary types, variants, per-page audit |
| Page composition framework | `snippets/templates/pages/page-composition-framework.mdx` | 4-zone structure, component rules |
| Component layout profile | `tools/config/component-layout-profile.json` | Required/allowed/forbidden per pageType (needs enum update) |
| Component governance structure | `workspace/plan/active/COMPONENT-GOVERNANCE/structure.md` | 6-category component folder taxonomy |
| Section naming rubric | `.claude/references/ia-and-naming/` | 6-step methodology, 5-dimension scoring |
| Quality checks | `v2/gateways/_workspace/canonical/checks.mdx` | 9-category, ~60-check quality framework |
| Icon map | `snippets/data/reference-maps/icon-map.jsx` | Semantic icon registry, 50+ icons |
| Voice rules | `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | Per-audience voice register |

### High-value reference (not canonical)

| Source | Path | What it contributes |
|---|---|---|
| Design Spec UX framework | `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/` | 13 content data types, composition patterns, page type × content type matrix |
| Content system | `docs-guide/frameworks/content-system.mdx` | 3-layer content model |
| My process | `workspace/plan/active/_MY_PROCESS/my-process.mdx` | Author workflow, quality criteria |
| Plan canonical | `workspace/plan/active/CONTENT-WRITING/plan-canonical.md` | 12-phase pipeline, gates, dependencies |
| Component layout decisions | `docs-guide/policies/component-layout-decisions.mdx` | Layout contract matrix |

### Exemplar pages (gold standard)

| Page | Path | Type |
|---|---|---|
| Orchestrator Role | `v2/orchestrators/concepts/role.mdx` | concept |
| Gateway Prepare | `v2/gateways/setup/prepare.mdx` | guide (instruction/setup) |
| Gateway Quickstart | `v2/gateways/quickstart/gateway-setup.mdx` | instruction/quickstart |
| Core Concepts | `v2/about/concepts/core-concepts.mdx` | concept |
| Protocol Overview | `v2/about/livepeer-protocol/overview.mdx` | overview |

---

## Dependencies

| Dependency | Status | Impact |
|---|---|---|
| COMPONENT-GOVERNANCE restructuring | Active | Component folder paths will change; templates must use new paths |
| SCRIPT-GOVERNANCE restructuring | Active | Validation scripts may move; enforcement hooks may change |
| CONTENT-WRITING pageType definitions | Active (being defined) | pageType enum is the foundation; templates must align |
| Google Doc research | Inaccessible | Prior research on page structure — needs export |

---

## Recommendations

See [06-gaps-and-decisions.md](./06-gaps-and-decisions.md) for the full gap analysis.

**Build order:**
1. Page Classification Guide — assemble from existing sources into `snippets/templates/page-classification.md`
2. Section Pattern Library — define 12-15 archetypes in `snippets/templates/section-patterns.md` + composable blocks in `snippets/templates/pages/blocks/`
3. Per-pageType dos/don'ts — one card per type in classification guide
4. Golden Examples — annotated real pages (extend the 5 we have to cover all 7 types)
5. Agent Prompt Template — structured prompt for AI page layout in `snippets/templates/supporting/`
6. VS Code tooling — snippets and completions in `tools/vscode/page-templates/`