# Phase 1 — Audience Design: Resource List

**Prompt**: `audience-design.md`
**What this phase does**: Defines the audience for a tab — personas, jobs-to-be-done, section shape, and lifecycle position. Output grounds every downstream phase.

---

## HOW TO USE THIS FILE

**These resources are not canonical. They are not a checklist. Do not load them by default.**

The right approach for this phase is:

1. **First-principles thinking first.** Start from the problem. What does a reader arriving at this tab actually need? What does good audience design look like from scratch, with no reference materials? Design your approach from first principles and design thinking before opening any file in this list.

2. **Then ask: which resources would genuinely elevate this?** After you have a first-principles approach, review the resource list below. For each file, ask: would loading this produce a meaningfully better output, or would it just add noise? Only load resources that answer yes.

3. **Test and iterate.** Run the phase with your selected resources. Evaluate the output. Record results in this phase's `testing/` folder. Update test status in this file. Promote resources that improve output quality; drop resources that don't.

The resource list below is a library of candidates — not a prescription. A first-principles approach that uses two well-chosen resources will outperform a prompt bloated with everything on this list.

---

**Testing rule**: No source is trusted until tested. See `COLLATION-PLAN.md`. Test status below reflects current state — update as tests run.

---

## Guides & Guards — Rules Constraining Output Quality

Files that tell the prompt HOW to think and what constraints to apply.

| File | Why needed | Test status |
|---|---|---|
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.-Audience-&-Persona-Mapping-&-Definitions/index.md` | **Primary audience authority.** 7 network functions, 7 Livepeer-specific personas with activation moments and pain points. "Route by goal, not label" rule. Supersedes generic persona frameworks. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md` | **Developer disambiguation routing table.** "Developer" maps to 4+ different personas. Required for any tab that touches developer-labelled audiences. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` | 6 page purposes with position logic: positions 1–3 are obligatory (orient, activate, first task); 4–6 are on-demand. Needed when deriving section shape. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md` | Journey-derived IA blueprint. Flags "Choose Your Integration Path" as most critical page type. Informs section ordering decisions. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/01_PRD-Docs/index.md` | Strategic context, 6 goals (G1–G6). Prevents phase 1 design that contradicts the site's purpose. Background only — not a primary input. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | Master framework. Defines the overall pipeline and how Phase 1 fits in. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md` | 7 canonical page type definitions. Used when assigning page types to the section shape output. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md` | 15 canonical purpose values. Used when assigning purpose to each proposed page. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/complexity.md` | Complexity levels. Informs audience-level assumptions. | ⬜ not tested |
| `v2/internal/overview/strategic-alignment.mdx` | 6 strategic goals. Context for what the docs are optimising toward. | ⬜ not tested |
| `v2/internal/rfp/problem-statements.mdx` | 4 core v2 problems. Frames what the audience is arriving to solve. | ⬜ not tested |

---

## Reference Sources — Authoritative Sources for Terminology & Facts

Files that tell the prompt WHAT IS TRUE — canonical terms, verified sources.

| File | Why needed | Test status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md` | Prevents AI from using deprecated v1 terminology (broadcaster, etc.) when describing personas and jobs. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/copy-governance.md` | Terminology governance including what terms are banned outright. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/reference-sources-quality-scored/universal-terms.md` | Universal canonical term list. Locks terminology before persona work begins. | ⬜ not tested |
| Per-tab glossary (relevant tab) | Tab-specific terms. Load the glossary for the tab being designed before Phase 1 begins. | ⬜ not tested |

---

## Repo Context — Existing Content Grounding the Prompt

Files that tell the prompt WHAT ALREADY EXISTS in the repo.

| File | Why needed | Test status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/personas.md` | Points at gateway, developer, and community persona files. Use as a cross-check: does the AI-derived persona contradict existing sourced research? | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/ia-maps-and-templates.md` | Points at site-map, orchestrators IA map, and TEMPLATE. Site ownership map needed to avoid cross-tab duplication. | ⬜ not tested |
| `AGENTS.md` | Source-of-truth priority chain. Phase 1 outputs that conflict with higher-priority sources need flagging. | ⬜ not tested |

---

## Pre-flight Requirements

Before running `audience-design.md` on a tab:

- [ ] Per-tab glossary loaded (locks terminology before persona work)
- [ ] Site map loaded (cross-tab ownership check — Phase 1 cannot design in isolation)
- [ ] If tab touches developer-labelled audience: developer disambiguation routing table loaded

---

## Known Risks (from master-resource-review.md)

- **Self-identification gap**: Personas must be routed by goal, not by what label users use. The Design Spec audience matrix is the authority on this — it's not currently in audience-design.md.
- **Developer disambiguation missing**: "Developer" maps to 4+ personas. Without the routing table, Phase 1 will produce a monolithic developer persona.
- **JTBD count**: Community audience analysis produced 20 JTBDs. If unconstrained, AI can generate lists that aren't useful. Target: 5–12 jobs per audience type.
- **Multi-tab actors**: Some personas touch multiple tabs (platform builders need Solutions + Gateways + Developers). Phase 1 must ask: where does this tab's responsibility end?
