# 08a — IA Per Tab: Section Vocabulary, Audience Journey, Page Groups

**Status**: DRAFT — awaiting checkpoint approval
**Step**: 8a (Content Writing Pipeline)
**Scope**: Gateways + Orchestrators (pilot). All other tabs are post-pipeline.
**Sources**:
- `docs-guide/policies/v2-folder-governance.mdx` — publishable lane contract
- `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` — 6-position structural pattern + per-tab purpose skeletons
- `docs.json` — live navigation structure (v2)
- `v2/gateways/` and `v2/orchestrators/` — actual folder + subgroup structure

---

## Task 8a-1: Standard Section Vocabulary

### Canonical Section Names per pageType

The standard vocabulary applies to any full-stack tab (Gateways, Orchestrators, Developers, LP Token).

| Position | Folder/File | Canonical name | pageType | pageVariant | Notes |
|---|---|---|---|---|---|
| 1 — root | `portal.mdx` | portal | `navigation` | `portal` | Tab entry point with hero |
| 1 — root | `navigator.mdx` | navigator | `navigation` | `landing` | Secondary nav/routing page |
| 2 — concepts | `concepts/` | concepts | `concept` | `overview` for entry page | Orientation + architecture |
| 3 — quickstart | `quickstart/` or `quickstart.mdx` | quickstart | `instruction` | `quickstart` | Fastest path to first success |
| 4 — setup | `setup/` | setup | `instruction` | `setup` | Full installation + configuration procedures |
| 5 — guides | `guides/` | guides | `guide` | `overview` for entry page | Practical understanding; operational phase |
| 5a — tutorials | `guides/tutorials/` | tutorials | `tutorial` | (none) | Tab-specific tutorials live inside `guides/`, not `resources/` |
| 6 — resources | `resources/` | resources | — | — | Container section — two sub-sections below |
| 6a | `resources/reference/` | reference | `reference` | `overview`, `specification`, `compendium`, `changelog` | Structured lookup — specs, FAQ, glossary, troubleshooting |
| 6b | `resources/knowledge-hub/` | knowledge-hub | `resource` | `knowledge-hub` | Curated external/public content — tools, directories, community channels, showcases |

**Rules**:
- `resources/` is the single position-6 container — `reference/` and `knowledge-hub/` are sub-sections within it
- Positions 1–3 are LINEAR for first-time readers; positions 4–6 are ON-DEMAND
- `tutorials/` is a subgroup within `guides/` for tab-specific tutorials; externally-sourced or community tutorials go in `resources/knowledge-hub/`
- `portal.mdx` and `navigator.mdx` are publishable section root files — they are NOT workspace files

### Prohibited at Section Root (per v2-folder-governance.mdx)

These file types must NOT appear alongside publishable pages at `v2/<section>/`:
- `plan.md`, `personas.md`, `review.md`, restructuring notes → belong in `v2/<section>/_workspace/`
- Any `_contextData`, `_archive`, `x-resources`, `TO-ADD` bucket → retired per governance policy

---

## Task 8a-2: Folder Divergence

### Gateways — `v2/gateways/`

| Item | Status | Notes |
|---|---|---|
| `concepts/` | ✅ Canonical | — |
| `guides/` | ✅ Canonical | — |
| `quickstart/` | ✅ Canonical | — |
| `setup/` | ✅ Canonical | — |
| `resources/` | ✅ Canonical | — |
| `portal.mdx` | ✅ Canonical | — |
| `navigator.mdx` | ✅ Canonical | — |
| `index.mdx` | ✅ Canonical | — |
| `_workspace/` | ✅ Canonical | Created; stray files moved in |
| `x-deprecated/` | ✅ Permitted lane | — |
| `x-archived/` | ✅ Permitted lane | — |
| `resources/reference/` | ⚠️ Sub-section missing | Reference content (faq.mdx, glossary.mdx, compendium/, technical/, go-livepeer/) exists flat in `resources/` — needs reorganisation into `resources/reference/` |
| `resources/knowledge-hub/` | ⚠️ Sub-section missing | No knowledge-hub content currently; section doesn't exist yet |

### Orchestrators — `v2/orchestrators/`

| Item | Status | Notes |
|---|---|---|
| `concepts/` | ✅ Canonical | — |
| `guides/` | ✅ Canonical | — |
| `quickstart/` | ✅ Canonical | — |
| `setup/` | ✅ Canonical | — |
| `resources/` | ✅ Canonical | — |
| `portal.mdx` | ✅ Canonical | — |
| `navigator.mdx` | ✅ Canonical | — |
| `index.mdx` | ✅ Canonical | — |
| `_workspace/` | ✅ Canonical | — |
| `x-archived/` | ✅ Permitted lane | — |
| `resources/reference/` | ⚠️ Sub-section missing | Same pattern — reference content flat in `resources/` |
| `resources/knowledge-hub/` | ⚠️ Sub-section missing | No knowledge-hub content currently |

**Note**: Reorganising `resources/` sub-sections is a pipeline output (Step 21), not a blocking issue for framework definition. Both tabs have the content; it just needs the correct folder structure applied.

---

## Task 8a-4: Primary Audience + Reader Journey Per Tab

**Purpose**: Maps which audience each tab serves and what their step-by-step journey through the tab looks like. This is the structural context layer the generation contract (Step 8) and context pack skill (Step 17) use to place any given page in its journey position. Without this, a page like `payments-and-pricing/clearinghouse.mdx` has no structural context — the pipeline can't know it's an `operate`-stage page for a `gateway` audience without the tab journey map.

### Gateways

**Primary audience**: `gateway`
**Arriving question**: "How do I set up and run a gateway?"
**Personas**: `graduate` | `provider` | `architect` | `broadcaster` | `platform`

**Linear journey** (positions 1–3):
1. `portal/navigator` → tab entry, value prop, routing
2. `concepts/` → what a gateway is, how it works, architecture, business model — EVALUATE
3. `quickstart/` → install → configure → route first job — ACTIVATE

**On-demand journey** (positions 4–6):
4. `setup/` → full installation + configuration (deeper than quickstart)
5. `guides/` → marketplace mechanics, monitoring, payments, node pipelines, production operations
6. `resources/reference/` → config specs, FAQ, troubleshooting | `resources/knowledge-hub/` → tools, community

**Cross-tab paths**:
- → `about/` for protocol economics + contract addresses
- → LP Token tab for on-chain setup (funding, registration)
- → Orchestrators for understanding the other side of the marketplace

### Orchestrators

**Primary audience**: `orchestrator`
**Arriving question**: "How do I set up, run, and earn with a node?"
**Personas**: `operator` | `hobbyist` | `commercial` | `specialist` | `delegate`

**Linear journey** (positions 1–3):
1. `portal/navigator` → tab entry, routing, value prop
2. `concepts/` → role, capabilities, architecture, incentive model — EVALUATE
3. `quickstart/` → install → register on-chain → process first job — ACTIVATE

**On-demand journey** (positions 4–6):
4. `setup/` → full installation, requirements, configure, connect and activate, test
5. `guides/` → AI pipeline setup, model curation, deployment details, staking/rewards, monitoring, economics
6. `resources/reference/` → config specs, FAQ, troubleshooting | `resources/knowledge-hub/` → tools, community

**Cross-tab paths**:
- → `about/` for protocol economics + contract addresses
- → LP Token tab for staking + governance
- → Gateways for understanding client-side of the marketplace

---

## Task 8a-5: IA Per Section — Pilot Scope

### Gateways — `guides/` Section Groups

Pipeline pilot group: `v2/gateways/guides/`

| Subgroup | Primary pageType | lifecycleStage | Reader's question | Page count (est.) |
|---|---|---|---|---|
| `operator-considerations/` | `guide` | `evaluate` | Is operating a gateway right for me? What are the real economics and trade-offs? | 2 |
| `deployment-details/` | `guide` + `instruction` | `setup` | How do I choose my deployment approach? | 2 |
| `monitoring-and-tooling/` | `guide` | `operate` | How do I monitor my gateway and stay healthy? | ~5 |
| `node-pipelines/` | `guide` + `instruction` | `build` | How do I configure my gateway for different job types? | 6 |
| `payments-and-pricing/` | `guide` | `operate` + `optimise` | How do payments work and how do I price competitively? | 6 |
| `tutorials/` | `tutorial` | `setup` + `build` | Can I build and run this end-to-end? | 5 |
| `advanced-operations/` | `guide` | `optimise` | How do I scale, harden, and optimise my gateway? | ~5 |
| `roadmap-and-funding/` | `guide` + `resource` | `operate` | What's coming and what funding exists? | 4 |

### Orchestrators — `guides/` Section Groups

Pipeline pilot group: `v2/orchestrators/guides/`

| Subgroup | Primary pageType | lifecycleStage | Reader's question | Page count (est.) |
|---|---|---|---|---|
| `operator-considerations/` | `guide` | `evaluate` | Is running an orchestrator right for me? | 4 |
| `deployment-details/` | `guide` + `instruction` | `setup` | How do I choose my deployment setup? | 6 |
| `ai-and-job-workloads/` | `guide` + `instruction` | `build` | How do I set up and run AI pipelines and manage workloads? | 9 |
| `config-and-optimisation/` | `guide` | `operate` + `optimise` | How do I tune my node for performance? | varies |
| `monitoring-and-tooling/` | `guide` | `operate` | How do I monitor my node? | varies |
| `staking-and-rewards/` | `guide` | `operate` + `optimise` | How does staking work and how do I maximise earnings? | varies |
| `payments-and-pricing/` | `guide` | `operate` | How do payments work for orchestrators? | varies |
| `advanced-operations/` | `guide` | `optimise` | Advanced node operations and hardening | varies |
| `roadmap-and-funding/` | `guide` + `resource` | `operate` | What's coming and what funding exists? | varies |
| `tutorials/` | `tutorial` | `setup` + `build` | Tab-specific tutorials | varies |

---

## Task 8a-6: Per-Page Field Combinations (Input to Generation Contract)

For each page group in the pilot, the default field combination (pageType + audience + lifecycleStage) that the generation contract will resolve into structure + voice + components:

| Context | pageType | audience | lifecycleStage |
|---|---|---|---|
| Gateways portal/navigator | `navigation` | `gateway` | `discover` |
| Gateways concepts | `concept` | `gateway` | `evaluate` |
| Gateways quickstart | `instruction` + `quickstart` | `gateway` | `setup` |
| Gateways setup | `instruction` + `setup` | `gateway` | `setup` |
| Gateways guides (operator-considerations, deployment, monitoring, payments, advanced) | `guide` | `gateway` | `operate` or `optimise` |
| Gateways node-pipelines | `guide` | `gateway` | `build` |
| Gateways tutorials | `tutorial` | `gateway` | `build` |
| Gateways resources/reference | `reference` | `gateway` | any (on-demand) |
| Gateways resources/knowledge-hub | `resource` | `gateway` | any (on-demand) |
| Orchestrators portal/navigator | `navigation` | `orchestrator` | `discover` |
| Orchestrators concepts | `concept` | `orchestrator` | `evaluate` |
| Orchestrators quickstart | `instruction` + `quickstart` | `orchestrator` | `setup` |
| Orchestrators setup | `instruction` + `setup` | `orchestrator` | `setup` |
| Orchestrators guides (ai-workloads, config, monitoring, staking, payments, advanced) | `guide` | `orchestrator` | `operate` or `build` |
| Orchestrators tutorials | `tutorial` | `orchestrator` | `build` |
| Orchestrators resources/reference | `reference` | `orchestrator` | any (on-demand) |
| Orchestrators resources/knowledge-hub | `resource` | `orchestrator` | any (on-demand) |

---

## Open Questions for Checkpoint

1. **`resources/` flat content reorganisation**: Both tabs have reference content (faq.mdx, glossary.mdx, compendium/, technical/) sitting flat in `resources/`. Should the pipeline reorganise this into `resources/reference/` as a pipeline output (Step 21), or is this a separate task?

2. **`roadmap-and-funding/` placement**: Currently in `guides/`, but pages here are a mix of `resource` (funding links, grants) and `guide` (roadmap context). Should this subgroup eventually move to `resources/knowledge-hub/`?

3. **`guides/tutorials/` vs `resources/knowledge-hub/`**: Confirm rule: tab-specific tutorials (purpose-built for this tab's audience) → `guides/tutorials/`. Externally-sourced or community tutorials worth surfacing → `resources/knowledge-hub/`.

---

## ⏸ CHECKPOINT

**Review checklist**:
- [ ] Section vocabulary (8a-1) — `resources/reference/` and `resources/knowledge-hub/` structure correct?
- [ ] Folder divergence (8a-2) — divergence assessment accurate?
- [ ] Audience + journey (8a-4) — journeys accurate for both tabs?
- [ ] Guide subgroup IA (8a-5) — pageType and lifecycleStage assignments correct?
- [ ] Per-page field combinations (8a-6) — input to generation contract correct?
- [ ] Open questions resolved?
