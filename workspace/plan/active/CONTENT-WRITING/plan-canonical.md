# Content Writing Pipeline — Plan v2 (Reviewed & Updated)

## Context

This plan supersedes the original GET IT ALL collation plan and the draft plan-canonical.md execution sequence. It has been reviewed by 5 deep-dive audit agents against the actual repo state as of 2026-03-23. All corrections from that audit are incorporated. Status markers reflect what is actually true in the repo, not what was assumed.

**Goal**: Write pages with the right, verified information, in the right sections and journey structure, in the right voice, with correct naming and terminology — efficiently, using parallel agents and parallel chats where possible.

**Not in scope now**: MDX layout / component selection (handled by layout-pass.md, Phase 10+). Focus is COPY CONTENT: voice, information, naming, structure.

**Output file**: `workspace/plan/active/CONTENT-WRITING/plan-v2.md`

**Canonical refs**: `design-canonical.mdx` · `plan-canonical.md` · `AGENTS.md` · `Frameworks/` · `Prompts/Prompts-By-Phase/`
**AI working rules**: `workspace/plan/active/_Project-Management_/ai-rules-guides.md` — mandatory read before any phase execution
**Design-canonical → plan relationship**: design-canonical.mdx is the structured system view (what the system is, its parts, ideal state). This plan is the execution reality built on top of it — takes Steps from design-canonical and extends them with parallel run paths, handoffs, phase sequencing, and a decision log. They are not the same document and must not be conflated.
**Outcome test**: Before executing any phase, ask: if every task on this list is completed, does the stated outcome actually get achieved? A task list is not an outcome.

---

## Current State Snapshot (Corrected)

### ✅ Complete
- Framework definitions (pageType 7-types, purpose 15-values, audience, persona, lifecycleStage, complexity, industry/niche, veracity)
- Voice rules — **ALL 7 audiences** (gateway, orchestrator, developer, builder, delegator, community, founder) ← _plan was wrong; file covers all 7_
- Section naming rubric (locked)
- IA section vocabulary (08a-ia-per-tab.md)
- Audience design prompt v5 + collation prompt v2
- Phase 1 runs: v5 runs + collation outputs exist for all 5 priority tabs — **draft outputs only, not yet approved**. v5 ran before the testing protocol existed; retroactive Check B validation required per tab before Phase 2 runs.
- Content pass prompt (WRITE/REVIEW/REWRITE modes) — untested
- Layout pass prompt — untested (blocked on upstream phases completing, not on schema)
- Master resource index + collated research
- **frontmatter-taxonomy.js core migration** — 7 canonical types + 15 purposes + deprecated aliases already implemented ← _plan was wrong; core migration done_
- veracity-library.md (45 sources) — complete
- veracity.md framework — **LOCKED 2026-03-23**
- PM infrastructure — decision-registry.md, blocking-items.md, tab-status.md, feedback-routing-map.md, cross-tab-journeys.md — all created
- prompt-testing-protocol.md — created (1 review agent + 3 runs)
- content-scan.md prompt — **built + tested on Gateways** (gateways-content-scan.md produced)
- AUDIT mode in content-pass.md — **built** (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP + component table + page brief template)
- content-pass.md Phase 5.4 false warning — **removed** (confirmed voice rules cover all 7 audiences)
- veracity-pass.md + pack-guide.md — **built** (DRAFT, awaiting test runs + human approval)
- veracity → glossary feedback loop (Phase 7 of veracity-pass.md) — **built**
- structure-audit.md — position violation check + P0/P1/P2 decision tree **added**
- Check B validation — Gateways ✅ APPROVED · Orchestrators ✅ APPROVED
- Collation outputs — lp-token ✅ produced · About ✅ produced
- Raw content inventory packs (secondary tier — useful as raw material, NOT IA-mapped research packs): Gateways, Orchestrators, Developers, About, Delegators — all produced
- v5 learnings — Orchestrators created

### ❌ Missing (P0 gaps — block content production)
- **IA-mapped research packs** (Phase 2.5 — NEW): Must be built from scratch after IA approval per tab, using approved IA as primary structure. Current raw inventory packs are secondary tier only — do NOT use as final research packs. One pack per tab, unlocked only after IA is human-approved.
- Tab maps (`v2/[tab]/_workspace/tab-map.md`) — not yet produced (Phase 3 IA Audit hasn't run in production). Expected — not a design gap.
- Brand & Copy Guide not integrated as base layer in `voice-rules.md` or `content-pass.md`
- Phase 11 prompts: portal-navigator-generator, faq-generator, faq-sourcing-guide, glossary-finalizer — **DEFERRED** (first tab 70%+ through Phase 6)
- New field validators in `frontmatter-taxonomy.js` for: `persona`, `industry`, `niche`, `lifecycleStage`, `veracityStatus` — missing
- v5 learnings: Gateways, Developers, LPT, About — missing
- Collation learnings v2: Orchestrators, Developers, About — missing
- Terminology tracking file — not yet created (needed for v7 prompt)

### ⚠️ Structural Issues Found (agent audit)
- **Glossary authority clarified** (user correction): `resources/glossary.mdx` = human-made, reviewed, authoritative. `resources/compendium/glossary.mdx` = AI-generated, unverified — must be reviewed against human version before any content is trusted
- `component-layout-profile.json` uses OLD pageType names (`landing`, `how_to`) — misalignment with canonical new types
- `broken-links.yml` is advisory-only (non-blocking) — must be made blocking for v2 paths after file moves
- About tab: `discover-substrate` non-canonical audience token produced by v5 run — About is a TAB not an audience; multi-audience handling needed in v6 prompt
- Naming rubric Step 16 enrichment not done (per-pageType/purpose/audience naming guidance needed)
- No stub file template for Phase 4.5 reconsolidation
- Voice rules lack persona-level differentiation (framework defines 4 builder personas, 4 developer personas — all treated as monolithic)

---

## Product-Level Findings (Holistic Review)

These findings are from a holistic product review, not a phase-compliance check. They describe what the plan will and will not produce.

**Verdict**: This plan will produce technically correct, audience-classified, voice-consistent pages. It will not produce a system that improves with use (no feedback loop), and the pages have never been pressure-tested against actual user confusion — they are written to AI-generated JTBD matrices that no real gateway operator, delegator, or orchestrator has validated.

**The single biggest structural gap**: The veracity pass has no handoff pack. It is harder to build than the single phase paragraph implies — it requires claim-type coverage analysis, 45-source resolution logic, staleness rules per category, and testing against real marked-up content. Without it built and tested before production, every page that ships carries unresolved factual claims and a `veracityStatus` field that is dishonest.

**The system is open-loop**: Layer 6 (Feedback System) of the canonical design is not in this plan. The first tab's corrections will be applied locally (to pages) but never propagated to the standards that generated them. The second tab starts at the same quality level as page 1 of the first tab. Minimum viable fix: create a correction-to-file routing map before Phase 6 runs, and add "Feedback routing map exists" to the Content Pass Open gate.

**Phase 1 outputs were never tested**: v5 ran before the testing protocol existed. Every downstream phase consumes Phase 1 as ground truth but no gate verifies the Phase 1 output was correct. Retroactive Check B validation per tab (review agent, one pass, read-only) must run before Phase 2 for any tab.

**Reader journey coherence has no checkpoint until Phase 12**: Cross-tab graduation paths (builder→developer→gateway) are not enforced until all 5 tabs complete. A persona journey smoke-test should be added to the Phase 3 IA Approval gate — before any content is written, trace each primary persona through the approved tab-map to verify entry question is answered, pages hand off correctly, and no required JTBD is only in on-demand positions.

**Phase 11 and Phase 12 are scaffolding, not load-bearing**: Pack 3 (Phase 11 prompts) and Phase 12 cross-tab consistency should be deferred until the first tab is 70%+ through Phase 6. Building them now adds scope without unblocking anything.

---

## ⚠️ Human Decisions Required

These are structural and strategic decisions that cannot be resolved by agents. They must be decided and recorded in `decision-registry.md` before the phases that depend on them can run.

**Specific open items are NOT listed here** — they are tracked in `blocking-items.md` (runtime document, populated as phases run and human reviews happen). Items found in AI-generated collation outputs are proposals, not confirmed decisions, until a human reviews them.

**Structural decisions known to need resolution** (confirmed by human, not from AI runs alone):

| Decision | Tab | Blocks |
|---|---|---|
| Rewards placement (before or after operator selection?) | Delegators | **Phase 3** |
| S6 split (real-time/custom compute: split or merged?) | Developers | **Phase 3** |
| Tab structure: Delegators, About, Developers reorganisation scope | All 3 | Phase 2+ |
| About multi-audience model: how is audience documented in frontmatter for a multi-audience tab? | About | Phase 6+ |
| v1 vs v2 docs.json: confirm v2/ is the canonical source for all phases | All | Phase 3 |

---

## Phase Execution Framework

This is a **framework, not a rigid procedure**. Different phases need different agent types and different amounts of design latitude. The goal is the best outcome — not checklist compliance.

---

### ⚠️ Confirm-Before-Spawn Rule (in effect from 2026-03-23)

**No agent may be spawned without explicit human confirmation in chat first.**

Before spawning any agent, state:
1. What the agent will do (one sentence)
2. What files it will read
3. What it will produce
4. Why it can run now (what dependency is met)

Wait for confirmation. Do not batch agent spawns inside a larger "run everything" response. Exception: if the human explicitly says "run all" or "go ahead" for a batch that was already proposed and approved item-by-item.

---

### Per-Tab Flow (in effect from 2026-03-23)

All tab-specific work follows this sequence. **Tabs are reviewed and locked one at a time in priority order.** No downstream agent work begins for a tab until the human locks the IA for that tab.

```
For each tab (in priority order: Orchestrators → Gateways → ...):

1. HUMAN reviews the canonical IA output for this tab
2. HUMAN iterates if needed (requests changes, re-runs collation, etc.)
3. AGENT: Phase 1b persona iteration check — reads raw inventory against provisional IA, flags content patterns not covered by existing personas
4. HUMAN reviews flags → iteration decision (add persona / confirm existing coverage / deprioritise)
   - If personas added: audience design iteration run → updated IA → back to step 3
5. HUMAN locks the IA for this tab (final)
6. AGENT: Deep research pass on the finalised glossary entries from the IA
   (run in Claude Web — read all glossary terms, cross-check against veracity sources,
   return a canonical terminology file with verified definitions and unresolved ambiguities)
7. AGENTS (parallel, background): IA-mapped research packs + other tab-dependent tasks
   — only AFTER IA is locked; built from scratch using approved IA as primary structure
8. HUMAN checkpoint: review research pack + terminology disambiguation results
9. Continue to Phase 2+ for this tab
```

**IA review**: IAs are presented one section at a time in chat — not all at once. Human reviews each section, raises questions, then confirms before moving to the next.

---

### Mandatory before any phase runs

1. Read `ai-rules-guides.md` (`workspace/plan/active/_Project-Management_/ai-rules-guides.md`) — governs how all agents work in this repo
2. Read the phase's `pack-guide.md` (in the phase's `Prompts/Prompts-By-Phase/[N]-[name]/` folder). **This is not optional.** Pack-guide defines: pre-flight steps, running order, known failure modes, what good vs bad output looks like.
3. Re-read the Decision Log (`decisions/decision-registry.md`) for any decisions affecting this phase. Do not rely on context or memory.
4. Verify pre-conditions explicitly before executing. If a pre-condition is false, correct the plan before proceeding.

### Agent types — use the right one for the work

**Design-thinking / product-thinking agents** — use when the phase involves open questions, structural decisions, or strategic framing. These agents should have latitude to propose alternatives, surface assumptions, and think from the reader's perspective. Don't constrain them to a checklist.

Available skills: `docs-copy`, `docs-research-to-implementation-plan`, `page-content-research-review`, `agentic-project-management-orchestrator`

**Critical review / analysis agents** — use when the phase produces output that must be verified against canonical sources, checked for factual accuracy, or validated for downstream compatibility.

Available skills: `docs-change-review`, `docs-source-verification`, `docs-impact-propagation`, `docs-research-packet-generation`, `docs-review-packet-generation`

**Implementation checker agents** — use when executing approved decisions: running tests, fixing validated issues, executing file moves, validating output formats.

Available skills: `docs-review-fix-execution`, `staged-test-suite-runner`, `mintlify-authoring-style-compliance`, `docs-ia-route-placement`, `style-mdx-quality-fix-playbook`

**Specialist tools** (invoke where the work specifically matches): `glossary-terminology-generation`, `docs-json-navigation-maintenance`, `component-library-guided-authoring`, `docs-source-verification`

### At each step completion — report inline:
- Notes on what completed and any surprises
- Flags or recommendations found during implementation
- Brief plan status update (what's done, what's next)
- Description of next task and any blockers

_"Describing the next task is not approval to execute it."_ — state next step, wait for go.

### Context packs
Each phase specifies which files agents receive. Agents do not rely on ambient knowledge — files are explicitly passed. Context pack for each phase is defined in that phase's section.

### Parallelism
- Multiple tabs can run the same phase simultaneously (one agent per tab)
- Within a tab, phases are sequential (Phase 3 waits for Phase 2 output)
- Cross-tab phases (Phase 12) require all tabs to have completed their upstream phases
- Findings-before-fixes: gather all findings, present as structured report, get scope approval, then execute — not fix-as-you-go

---

## Prompt Testing Protocol (Simplified)

**Applies to every new or upgraded prompt before any production run.**

1. **1 internal review agent** — single agent runs all three checks in one pass:
   - Check A: Best practices (clarity, instruction hierarchy, failure modes)
   - Check B: Canonical design alignment (output aligns with `design-canonical.mdx` system expectations and next-phase inputs)
   - Check C: Generality (usable for ANY tab, including multi-audience tabs like About — not just the first test tab)
2. **3 agent test runs** — randomised tab selection; at least one multi-audience tab (About or Community) must be included
3. **Collate learnings** — using standardised severity: `CRITICAL` (fix before next version) · `HIGH` (fix recommended) · `MEDIUM` (monitor for pattern) · `INFO` (expected variation, document)
4. **Human approval** — approve prompt + confirm alignment with canonical expectations and next-phase inputs
5. **Version learnings file** — per version, per tab, using standardised severity labels
6. **Surface all learnings + upgrade proposals before any version increment** — human approves before version bump

**Reduced from 3 review agents to 1** — 3 separate agents per prompt was over-engineered; all three checks run in one structured pass.

---

## Project Management

### Decision Registry

**Location**: `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` (create this file)

Every locked decision must be recorded here before it can be used as a dependency. Format:

```
| ID | Decision | Tab(s) | Decided by | Date | Unblocks | Record |
```

No phase may consume a decision that is not in the registry. If a collation note says "NaaP locked as Network-as-a-Product" — it must also appear in the registry with a date and sign-off.

Each structural decision entry must also record: **named decision authority** (who has the right to decide), **information required** (what must be known before deciding), and a **reversal condition** ("this decision holds as long as: [condition]"). Without reversal conditions, a structural decision reversed after Phase 3 runs requires rebuilding the tab-map, reconsolidation plan, all page briefs, and all affected content.

### Tab Status Board

**Location**: `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md` (create this file)

Per-tab gate tracking. A tab is only "open" for a phase when its gate is explicitly unlocked:

| Tab | IA Approved | Terminology Locked | Content Scan Done | Structure Approved | Content Pass Open | Veracity Done | Layout Done |
|---|---|---|---|---|---|---|---|
| Gateways | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Orchestrators | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Delegators | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| About | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Developers | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

### Gate Definitions

Each gate requires a specific artefact AND explicit human sign-off:

| Gate | Artefact required | Sign-off required |
|---|---|---|
| **IA Approved** | Canonical audience design output (collated) reviewed and approved | Human explicitly approves per tab before Phase 2+ runs |
| **Terminology Locked** | All BLOCKING items resolved + recorded in decision-registry.md | Human confirms all BLOCKING items resolved |
| **Content Scan Done** | `context-packs/[tab]-content-scan.md` exists and complete | Human reviews scan output |
| **Structure Approved** | `v2/[tab]/_workspace/tab-map.md` approved + **persona journey smoke-test passed** (trace each primary persona through tab-map: first page answers arriving question, each page hands off correctly, no required JTBD served only by on-demand positions) | Human approves IA audit output |
| **Content Pass Open** | Tab map exists + terminology locked + voice rules confirmed + **feedback routing map exists** (`decisions/feedback-routing-map.md`) | Human confirms all dependencies met |
| **Veracity Done** | All `REVIEW:` markers resolved; `veracityStatus` set in frontmatter | Human clears all veracity flags |
| **Layout Done** | All pages pass layout-pass.md; frontmatter complete; render validates | Human approves layout output |

### Blocking Item Tracker

**Location**: `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md` (runtime document — created and populated as phases run)

This file is NOT pre-populated from AI runs. It is populated by humans as they review agent outputs per phase. Each blocking item is recorded when a human reviews a collation output and decides it cannot be resolved automatically.

Format:
```
| ID | Item | Tab(s) | Type | Owner | Resolution method | Status |
```

Items are added here by humans after reviewing agent collation outputs. AI agents propose open items; humans decide which are genuinely blocking and record them here with their authority to resolve.

---

## Parallel Chat Handoff Packs

These are ready to hand to separate chat sessions immediately.

### Pack 1: Build Prompt Testing Protocol + Content Scan Prompt

**Title**: Phase 2 Infrastructure — content-scan.md build and test

**Prerequisite**: Phase 0 tab structure approved for at least Gateways

**Primary source files to read at start**:
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md` (Phase 3 — defines what content-scan output must feed)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`
- `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/learnings/v4.md` (example learnings structure)

**Exact goal/deliverable**:
1. Create `workspace/plan/active/CONTENT-WRITING/prompt-testing-protocol.md` (simplified protocol: 1 agent + 3 runs)
2. Create `Prompts/Prompts-By-Phase/2-content-scan/content-scan.md` — prompt that reads `docs.json` + `v2/[tab]/*.mdx`, produces `context-packs/[tab]-content-scan.md`. Spec: reading scope = v2/[tab]/ primary; schema target = 7-type canonical; status definitions: `current` / `draft` / `stub` / `empty` with explicit criteria; must produce output compatible with structure-audit.md inputs
3. Test on Gateways tab: 1 review agent run + 1 test run → produce `context-packs/gateways-content-scan.md`
4. Write `Prompts/Prompts-By-Phase/2-content-scan/content-scan-learnings.md`

**Output paths**: As listed above. Do NOT write to any other paths.

**Human checkpoint**: (1) Approve simplified protocol; (2) Approve prompt before test run; (3) Approve learnings + pilot output before Phase 2 production runs

**Does NOT touch**: Phase 1 outputs, Phase 9 schema, any actual content writing, voice-rules.md

---

### Pack 2: Build AUDIT Mode + Component Mapping for content-pass.md

**Title**: Phase 4 Infrastructure — AUDIT mode and info-type → component reference

**Prerequisite**: None (can start immediately)

**Primary source files to read at start**:
- `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` (full file — existing modes as reference)
- `docs-guide/config/component-registry.json` (117 components, 6 categories)
- `tools/config/component-layout-profile.json` (old pageType → component mapping — note: uses deprecated type names)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`

**Exact goal/deliverable**:
1. Write AUDIT mode spec into `content-pass.md` — decision framework (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP) with rationale format, input requirements, output format (`context-packs/[tab]/[group]-audit.md`), edge cases (wrong audience, multi-job pages, schema conflicts, cross-tab duplication)
2. Add Phase 4b to content-pass.md: information-type → component suggestions table (reference only, not layout decisions). Map each of the 8 information types to typical components. NOTE: component-layout-profile.json uses deprecated pageType names — annotate this
3. Add page brief template to content-pass.md (what humans approve before WRITE runs)
4. Fix the false warning in content-pass.md Phase 5.4 (voice rules exist for all 7 audiences)
5. Add pre-flight dependency check to content-pass.md context block

**Output paths**: Edit `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` in place.

**Human checkpoint**: (1) Review AUDIT mode decision framework before it's added; (2) Approve full content-pass.md update

**Does NOT touch**: voice-rules.md, structure-audit.md, any Phase 1 outputs, actual content

---

### Pack 4: Build Veracity Pass Prompt (HIGH PRIORITY — no pack existed)

**Title**: Phase 7 Infrastructure — veracity-pass.md build, claim-type analysis, and test

**Prerequisite**: `veracity.md` framework must be locked before this pack runs (currently DRAFT — lock first)

**Why this needs a dedicated pack**: Unlike content-scan and AUDIT mode, the veracity pass has had no handoff pack. It is the claim-resolution spine of the pipeline — `veracityStatus: verified` in frontmatter is meaningless without it. Harder to build than implied: requires claim-type analysis before prompt design.

**Primary source files to read at start**:
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` (lock this first — currently DRAFT)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` (45 sources)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/information-type.md`
- `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx` (Layer ④ Veracity Engine spec)
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` (understand what WRITE mode outputs look like)

**Exact goal/deliverable**:
1. **Claim-type coverage analysis first** — before writing the prompt, classify 20+ claim types from sample content against the 45-source library. Document gaps. This analysis drives the prompt design.
2. Lock `veracity.md` (remove DRAFT status, add version date)
3. Create `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` — with: confidence scoring matrix, auto-resolve rules (governance-controlled values are NEVER auto-resolved), staleness matrix per category, REVIEW marker format, mixed-type page handling, `veracityStatus` values
4. Create `Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md`
5. Test on 3 sample pages from Gateways v2 content: 1 review agent run + 3 test runs
6. Write `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass-learnings.md`

**Output paths**: As listed above. Do NOT write to any other paths.

**Human checkpoint**: (1) Approve claim-type analysis before prompt build; (2) Approve locked veracity.md; (3) Approve prompt before test runs; (4) Approve learnings before Phase 7 production

**Does NOT touch**: content-pass.md, layout-pass.md, any Phase 1 outputs, actual content

---

### Pack 3: Phase 11 Universal Pages Infrastructure

**⚠️ DEFERRED** — Do not build until first tab is 70%+ through Phase 6. Building ahead of that point adds scope without unblocking anything. Phase 11 cannot run until a tab completes Phase 10 anyway.

**Title**: Build portal, navigator, FAQ, and glossary prompts for Phase 11

**Prerequisite**: ~~This can be built now but not run until first tab reaches Phase 10. Start building while Phases 2-8 run.~~ **First tab 70%+ through Phase 6. Not before.**

**Primary source files to read at start**:
- `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx`
- `Prompts/Prompts-By-Phase/4-layout-pass/layout-pass.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/08a-ia-per-tab.md`

**Exact goal/deliverable**:
1. `Prompts/Prompts-By-Phase/5-universal-pages/portal-navigator-generator.md` — input: tab-map + all page titles/headings + glossary; output: portal.mdx + navigator.mdx (both `pageType: navigation`)
2. `Prompts/Prompts-By-Phase/5-universal-pages/faq-sourcing-guide.md` — human process doc: which platforms per tab, question selection criteria, curation workflow
3. `Prompts/Prompts-By-Phase/5-universal-pages/faq-generator.md` — input: curated question list + glossary + canonical content; output: structured FAQ page
4. `Prompts/Prompts-By-Phase/5-universal-pages/glossary-finalizer.md` — input: all glossary entries from Phases 6-8; output: final `glossary.mdx` with cross-references, veracity status, related terms
5. `Prompts/Prompts-By-Phase/5-universal-pages/phase-11-pack-guide.md` — execution order + handoff instructions

**Human checkpoint**: Review all 4 prompts before Phase 11 runs on first tab

**Does NOT touch**: content-pass.md, structure-audit.md, any Phase 1-10 content

---

## Phases

### Phase 0 — Tab Structure Decisions (FIRST — before any content work)

**IA Per-Tab Approval Gate**: The canonical audience design output (collated) for each tab MUST be reviewed and explicitly approved by human before ANY Phase 2+ work begins for that tab. This is a per-tab gate. Tabs unlock independently.

**Decisions locked here, recorded in decision-registry.md**:

| Tab | Structure status | Action needed |
|---|---|---|
| Orchestrators | 12 canonical sections confirmed | Confirm section vocabulary; confirm v2 path is canonical |
| Gateways | Minor guides restructure only | Confirm which guides move; confirm v2 path is canonical |
| Delegators | Can be reorganised | Rewards placement decision (BLOCKING) + structure decisions |
| About | Can be reorganised | Multi-audience model decision + scope vs Home |
| Developers | Can be reorganised | S6 split decision + sub-path structure |

**Additional Phase 0 decisions required**:
- **v1 vs v2 canonical path**: Confirm `v2/[tab]/` is the canonical source for all Phase 2+ work. Without this, Phase 3 (IA Audit) will audit the wrong structure.
- **Glossary authority**: For tabs with two glossary files (`resources/glossary.mdx` AND `resources/compendium/glossary.mdx`), confirm `resources/compendium/glossary.mdx` is canonical per 08a-ia-per-tab.md
- **Terminology items B-01/B-02/B-03**: Confirm whether NaaP, BYOC, LIP-92 are already verified. If yes, record in decision-registry.md and remove from blocking items.
- **Phase 12 trigger**: Decide — run Phase 12 once (all 5 tabs complete) or incrementally (minimum 3 tabs sharing a cross-tab journey). Record in decision-registry.md. If incremental: define minimum tab set (suggestion: Gateways + Orchestrators + Developers share a graduation path). An incremental Phase 12 run is provisional — it locks cross-tab conventions for tabs that ran, with "pending [remaining tabs]" items open.
- **Structural decision owners**: For each BLOCKING structural decision in the Human Decisions table, record in decision-registry.md: named decision authority, information required to decide, and reversal condition. These must exist before Phase 3 runs for the affected tab.
- **Phase 1 retroactive validation**: Before Phase 2 runs for any tab, run a single Check B review agent against that tab's Phase 1 canonical output — verifies correct linear/on-demand section positioning. Produces `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/validation-check.md`. This is cheap and catches foundational errors before Phase 3 encodes them.

**Phase 0 deliverable**: `workspace/plan/active/CONTENT-WRITING/decisions/phase-0-decisions-lock.md` — human-signed approval per tab

**Checkpoint**: Human approves per-tab structure AND audience design output before Phase 2 runs for that tab.

---

### Phase 1 — Audience Design — Draft outputs exist, approval pending

v5 runs + collation outputs exist for all 5 priority tabs. **These are draft outputs, not approved inputs.** v5 ran before the testing protocol existed — the outputs have never been validated against the Check B (canonical design alignment) criteria that the protocol now requires. Retroactive validation per tab runs at Phase 0, before Phase 2 for that tab unlocks.

**lp-token and About**: canonical collation outputs are **missing** — source material exists but consolidation runs have not been done. These tabs cannot reach Phase 2 until their canonical outputs exist and pass validation.

**Outstanding items (must resolve at Phase 0)**:
- Delegators: rewards placement (BLOCKING)
- Developers: S6 split (BLOCKING)
- About: multi-audience model — `discover-substrate` is non-canonical; needs human decision on how About tab audience is documented in frontmatter
- All tabs: unresolved BLOCKING terminology items (some may already be verified — confirm at Phase 0)

**v5 prompt known gap (fix in v6)**:
About/substrate tabs produce non-canonical audience token (`discover-substrate`). Prompt v6 must add explicit guidance: "If this tab serves multiple audiences with no single canonical token, document the multi-audience model in the Phase 1 output. Do NOT create a new audience token."

**v5 learnings files outstanding**: Orchestrators v5 learnings file not found — create before Phase 1 is fully signed off.

---

### Phase 1b — Persona Iteration Loop (NEW — before IA is locked)

**What it does**: Before the IA is locked, reviews the raw v1/v2 content inventory for content patterns, implicit audiences, or use cases not captured in the Phase 1 audience design. New personas may emerge from what actually exists in the content — this must happen before the IA is finalised.

**Why before IA lock**: Phase 2.5 maps content against the locked IA. If new personas emerge AFTER the IA is locked, the IA must be reopened and Phase 2.5 re-run. The iteration loop here is cheaper.

**Feed**: The raw v1/v2 content inventory packs (secondary tier — already produced as `context-packs/[tab]-research-pack.md` for all 5 tabs). These packs were produced without IA context — they are the right input for persona emergence review precisely because they reflect what content actually exists, not what the IA expected.

**Process**:
1. Agent reads raw inventory pack + current canonical IA for the tab
2. Flags: any content that serves a persona NOT in the current IA; any significant topic cluster with no matching section; any audience segment implied by existing content
3. Human reviews flags — decides: (a) existing persona covers it, (b) add persona to IA, (c) deprioritise
4. If (b): audience design iteration run → updated IA → human re-reviews
5. If (a) or (c): IA confirmed, proceed to lock
6. Human locks IA

**Output**: Either a confirmed IA (no changes needed) or an updated canonical audience design output for that tab.

**Agent context pack**:
- Raw inventory pack: `context-packs/[tab]-research-pack.md`
- Current canonical IA: `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
- `Frameworks/content-pipeline-framework.md` (audience taxonomy)

**Human checkpoint**: Human reviews all flagged content patterns before iteration decision. Human explicitly locks IA after this phase — lock cannot happen before Phase 1b runs.

**Note**: For tabs where raw inventory is thin (Delegators), Phase 1b may not surface new personas. Run it anyway — the null result is a valid confirmation.

---

### Phase 2 — Content Scan (BUILD FIRST — P0 gap)

**What it does**: Reads `docs.json` + all `.mdx` files under `v2/[tab]/`. Produces structured per-page inventory.

**Output**: `context-packs/[tab]-content-scan.md`
- Per page: path · frontmatter fields · heading structure · content summary (2–3 sentences) · status
- Workspace artefacts listed
- Frontmatter completeness flagged against 7-type canonical schema

**Prompt spec (required before build)**:
- **File-reading scope**: `v2/[tab]/` is primary. List v1 paths for reference only — do not scan v1.
- **Schema target**: 7-type canonical schema (from `Frameworks/pageType.md`, `pagePurpose.md`). Flag any deprecated type values found.
- **Content summary**: One 2–3 sentence holistic summary per page covering the page's primary job.
- **Status definitions**: `current` = exists in v2/, no `draft` flag, intended for publication; `draft` = `draft: true` in frontmatter; `stub` = file exists but <100 words of body content; `empty` = file path in docs.json but no file, or zero bytes.
- **Must produce output compatible with structure-audit.md inputs** — verify against that prompt before finalising.

**Agent context pack** (loaded for every content scan agent run):
- `docs.json` (nav structure for the tab)
- `v2/[tab]/` directory (all .mdx files)
- `Frameworks/content-pipeline-framework.md` (canonical schema — 7 types, 15 purposes, frontmatter spec)
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md` (defines what the output must feed)
- Tab's approved Phase 1 canonical audience design output

**Parallel agents**: Run content scan for multiple tabs simultaneously (one agent per tab). Gateways first as pilot.

**Critical review**: 1 review agent reads the scan output + checks against structure-audit.md input requirements. Reports whether output is compatible.

**Human checkpoint**: Human reviews scan output + review agent findings. Approves before Phase 3 runs for that tab.

**Build process**: See Pack 1 handoff. Run through Prompt Testing Protocol before production.

**Tab order**: Gateways → Orchestrators → Developers → About → Delegators (can run in parallel once content-scan.md is approved)

**Dependencies**: None — can build immediately (see Pack 1).

---

### Phase 2.5 — IA-Mapped Content Research Pack (NEW — per-tab, post-IA-lock)

**What it does**: For each tab, produces a research pack that maps existing v1 + v2 content against the approved IA sections. This is the document content writers use to understand what content already exists per section, what needs writing from scratch, and what critical facts or gaps are present.

**This is NOT the raw inventory**. The raw v1+v2 inventories produced in the infrastructure sprint (gateways-research-pack.md, orchestrators-research-pack.md, etc.) are secondary tier — useful as raw material but not the final research packs. This phase builds from scratch using the approved IA as primary structure.

**Dependency**: IA must be human-locked for this tab before this phase runs. The approved IA is the primary input — not the raw inventory.

**What the agent receives**:
- Approved canonical IA output for this tab (`canonical-[tab]-audience-design.md`)
- Raw inventory pack (secondary reference only — agent does not repeat this work)
- All `v2/[tab]/` MDX files
- All `v1/[tab]/` source files (where v1 equivalent exists)
- `Frameworks/veracity-library.md` (for flagging factual issues found)

**Output**: `context-packs/[tab]-research-pack-v2.md`

Structure (one section per approved IA section):
```
## S[N] — [Section title from approved IA]
Section purpose: [from IA]
Primary persona served: [from IA]
Linear or on-demand: [from IA]

### Existing content that maps here
- [file path] — [1-sentence summary] — [status: current/draft/stub/empty]

### Content gaps
- [what the IA requires that has no existing file]

### Critical flags
- [factual issues, terminology inconsistencies, v1→v2 discrepancies found in existing content]
```

**Terminology output**: Alongside the research pack, the agent produces a `terminology-draft-[tab].md` file listing:
- All terms used across existing content for this section
- Potential splits (same concept, different terms used in v1 vs v2 or across files)
- Terms that appear in glossary vs terms that do not
- Flagged for deep research pass (Step 4 of per-tab flow)

**Human checkpoint**: Review research pack per section before content writing begins for that section.

**Process**: One agent per tab, run only after IA is locked. Orchestrators first.

---

### Phase 3 — IA Audit (Structure Audit)

`structure-audit.md` exists and is built. Requires content scan as input.

**What it does**: Maps ideal sections (from canonical audience design) against actual tab content. Produces gap analysis, orphan analysis, P0/P1/P2 work order.

**Output**: `v2/[tab]/_workspace/tab-map.md`

**Known gap to fix before first production run**:
- **Position violation check missing**: `structure-audit.md` Phase 3.2–3.3 has no logic to check whether obligatory content (must complete to proceed) is placed in on-demand positions (4–6). The Phase 3.4 quality gate asks for this but the upstream logic doesn't produce it. Add position-type validation step before running.
- **P0/P1/P2 definitions are subjective**: Replace narrative definitions with decision tree rules:
  - P0: Gap is in linear journey positions 1–3 and no workaround exists
  - P1: Gap affects secondary persona or on-demand access (positions 4–6)
  - P2: Polish/backlog — orphans, missing subsections of on-demand content

**Agent context pack** (loaded for every IA audit agent run):
- `context-packs/[tab]-content-scan.md` (Phase 2 output — required)
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md` (Phase 1 approved canonical output)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/08a-ia-per-tab.md` (section vocabulary + linear/on-demand rules)
- `docs.json` (nav structure extract for this tab only)
- `Frameworks/content-pipeline-framework.md`

**Parallel agents**: Run IA audit for multiple tabs simultaneously once their content scans are approved. One agent per tab.

**Critical review**: 1 review agent checks the tab-map output against Phase 1 audience design — are all required sections present? are any orphans wrongly kept? are position violations flagged?

**Human checkpoint**: Human reviews tab-map + critical review findings + persona journey smoke-test results. Approves tab-map before Phase 4 starts. This is the **IA Approved gate** on the Tab Status Board.

**Persona journey smoke-test** (required before tab-map approval — no new tooling needed, ~20 min per persona): For each primary persona in the Phase 1 audience design, trace the linear journey through the approved tab-map and confirm: (1) the first page in the journey answers that persona's arriving question; (2) each page in the linear sequence explicitly hands off to the next; (3) no required job-to-be-done is only served by on-demand positions (4–6). Record results in the tab-map approval sign-off. Failing personas block approval.

**Process**: Run in tab order: Gateways → Orchestrators → Developers → About → Delegators (can run in parallel once content-scan.md is in production)

**Human gate**: Tab map approved by human before Phase 4 runs for that tab.

---

### Phase 3.5 — Terminology & Naming Pre-Work

**BEFORE WRITING ANY CONTENT** — resolve and lock all terminology decisions.

**Per tab**:
1. **Resolve all BLOCKING items** from blocking-items.md — record resolutions in decision-registry.md
2. **Resolution process** (previously missing — now defined):
   - Authority: Human (with input from protocol team where needed)
   - Method: Check against specified source (repo, Notion, on-chain) → document finding → human signs off
   - Timing: Must complete before Phase 6 starts for that tab
   - Tracking: blocking-items.md updated to RESOLVED with date and decision
3. **Lock terminology** in the human-authored canonical glossary file: `v2/[tab]/resources/glossary.mdx` — this is the **human-made, reviewed source** and is authoritative. The `resources/compendium/glossary.mdx` file is AI-generated and unverified — it must be reviewed against the human-made file before any content in it is used. Do NOT treat the compendium version as authoritative.
4. **Run section titles** through naming rubric (≥20/25) before authoring begins

**Human checkpoint**: All BLOCKING items resolved and in decision-registry.md before Phase 6 starts for that tab.

**Note**: Glossary is a living document — updated throughout authoring. Finalised at Phase 11. A **terminology lock point** should be set at 80% completeness before Phase 6 begins, with a freeze at Phase 8.

---

### Phase 4 — Content Audit (AUDIT mode — BUILD FIRST — P0 gap)

**What it does**: Reviews every existing page in a section group. Per page: KEEP / MOVE / MERGE / SPLIT / REWRITE / DROP with rationale. Produces reconsolidation plan.

**Output**: `context-packs/[tab]/[group]-audit.md`

**AUDIT mode spec** (required before build — see Pack 2 handoff):
- **Section group** = a folder in `v2/[tab]/` (e.g., `v2/gateways/guides/`) — NOT a logical grouping
- **Decision tree**:
  - KEEP: In right location, aligned with audience/purpose, content sound
  - MOVE: Content good but belongs in different section — specify target path
  - MERGE: Redundant with another page — specify merge target
  - SPLIT: Page serves 2+ distinct jobs — specify new page names
  - REWRITE: Right scope, wrong/stale content — queues for Phase 6 REWRITE
  - DROP: Deprecated, orphaned, or superseded — specify what supersedes it
- **Edge cases**: Wrong-audience pages (flag for cross-tab review); multi-job pages (flag for SPLIT); old schema frontmatter (flag for Phase 9); cross-tab duplicates (flag for manual deduplication)
- **Output format**: `PAGE | DECISION | RATIONALE | TARGET (if applicable)`

**Build process**: See Pack 2 handoff. Test on Gateways guides after tab-map exists.

**Dependencies**: Tab map must exist (Phase 3 output). Voice rules confirmed (Phase 5).

---

### Phase 4.5 — Reconsolidation (file moves, docs.json, stubs)

**What it does**: Executes the approved reconsolidation plan from Phase 4.

**HUMAN APPROVAL GATE**: Human reviews and explicitly approves reconsolidation plan (all moves, merges, stubs) BEFORE any file move executes. Once approved, moves are non-negotiable.

**Steps per section group**:
1. I draft `docs.json` changes from approved group-audit
2. Human reviews and confirms — pays attention to file-move patterns (see below)
3. File moves executed
4. Stub `.mdx` files created for moved/merged pages — at old path, pointing to new path
5. Run link validation (broken-links check must pass for v2 paths before PR merge)
6. Re-run content scan to update `context-packs/[tab]-content-scan.md` to reflect new paths

**File-move patterns** (for docs.json updates):
- Pattern 1 — Folder reorganisation: remove old path, add new path with group structure
- Pattern 2 — Page merge: remove both, add consolidated page path
- Pattern 3 — Cross-section move: remove from source group, add to target group

**Stub file standard**:
- When to use: when a page path is removed and redirecting readers
- Format: `pageType: navigation`, `pageVariant: redirect`, `redirectTo: /v2/[tab]/[new-path]`
- Location: old path preserved temporarily for redirect; removed after migration verified

**Link validation**: After file moves, run broken-links check. Make v2 checks blocking (not advisory) before any PR merge from Phase 4.5 onward.

**`docs.json` is routing authority** per AGENTS.md — no moves without explicit human confirmation.

**Pipeline mapping required before any file move**: Before moving, removing, or renaming any file: (1) what does this file produce/serve? (2) what reads it or links to it? (3) what else writes to the same path? (4) is there a confirmed replacement? Only then act. Breaking a link silently removes content with no build error.

**Root cause only**: A page that is wrong or misplaced is not fixed by removing it — that hides the problem. The AUDIT decision (move/merge/drop) must identify what correctly supersedes or replaces it.

---

### Phase 5 — Voice Rules (Completed — but gaps remain)

**Current state**: `voice-rules.md` covers **all 7 audiences**: gateway, orchestrator, developer, builder, delegator, community, founder. The plan previously stated "gateway + orchestrator only" — this was incorrect.

**What still needs doing**:
1. **Integrate Brand & Copy Guide as base layer**: `ai-tools/ai-skills/docs-copy/` exists but is not loaded into `voice-rules.md` as a prerequisite. Create a synthesis document showing: (1) load copy-rules.md universal layer, (2) apply audience section from voice-rules.md, (3) apply persona-level nuance from framework Decision 4.
2. **Add persona-level voice differentiation**: Framework defines 4 builder personas (ai, video, realtime, agent) and 4 developer personas (network, ai, tooling, core). Voice rules treat each audience as monolithic. Add subsections distinguishing persona-level register differences.
3. **Add community persona routing table**: The boundary rules (delegator visiting community → use delegator voice; operator visiting community → use operator voice) exist in the framework (Decision 4) but are not in voice-rules.md.
4. **Fix content-pass.md Phase 5.4**: The warning "voice rules not yet defined for developer/delegator/community" is FALSE — rules exist. Remove or correct.
5. **Note**: "About audience" is NOT an audience token — About is a tab. Pages in the About tab can target any of the 7 audiences. Voice rules are audience-scoped, not tab-scoped.

**Voice testing phase**: Select 3 real pages per audience that has not yet been tested in production. Run content-pass.md Phase 5 checks only. Score: correct register? Prohibited terms absent? Opening order correct? Paragraph discipline?

---

### Phase 6 — Content Pass (WRITE/REVIEW/REWRITE)

`content-pass.md` exists with WRITE/REVIEW/REWRITE modes.

**Hard dependencies — all must be true before Phase 6 starts for a tab**:
- [ ] Tab map exists (Phase 3 complete and approved)
- [ ] Voice rules confirmed for tab's audience (Phase 5 complete)
- [ ] Canonical audience design approved (Phase 1 gate)
- [ ] Terminology locked (Phase 3.5 complete)
- [ ] Section naming rubric loaded
- [ ] AUDIT mode exists in content-pass.md (Pack 2 complete)

**Inputs to add to content-pass.md** (not yet loaded):
- `docs-guide/config/component-registry.json` — components catalog (117 components, authoritative path)
- `tools/config/component-layout-profile.json` — page-type to component mapping (NOTE: uses deprecated pageType names; cross-reference with canonical types)
- Information type → component suggestion table (Phase 4b — see Pack 2)

**Page brief format**: Before WRITE mode runs, a brief must be approved. The brief = context block PLUS: reader definition (audience/persona/arriving knowledge/arriving question) + one-sentence page outcome + prev/next page in journey + single job this page does + out-of-scope statement + human approval sign-off.

**Pilot scope** (Gateways): Content work proceeds **section by section**, each section unlocked by the approved tab IA map. The full tab is 536 pages — we do NOT pick an arbitrary subset. Instead: once the tab IA is finalised and approved, the approved IA map defines which sections exist and in what order. Content work starts with the first section in the approved IA, works through it completely, then moves to the next. The "pilot" is the first section from the approved IA, not a predefined page count.

**Process per tab**:
1. Confirm all hard dependencies above
2. AUDIT phase: run AUDIT mode on each section group (phase 4 must complete first)
3. For each page: AUDIT decision → if WRITE/REWRITE, run WRITE mode with approved brief
4. Human approves every page brief before writing begins
5. Human reviews every WRITE output before it moves to Phase 7

**Agent context pack** (loaded for every content pass agent run):
- `v2/[tab]/_workspace/tab-map.md` (Phase 3 approved output — REQUIRED, phase cannot run without this)
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` (section for this tab's audience)
- `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` (universal base layer)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/section-naming.md` (naming rubric)
- `docs-guide/config/component-registry.json` (reference only)
- The specific page file(s) being worked on

**Parallel agents**: Run WRITE mode on multiple pages within a section simultaneously. One page per agent.

**Critical review per section**: After all pages in a section are drafted, 1 review agent reads all outputs together — checks journey coherence (prev → this → next handoffs), voice consistency, terminology consistency.

**Human checkpoint per page**: Human approves brief before WRITE runs. Human reviews each WRITE output before it moves to Phase 8.

**Sequencing**: Gateways (first section from approved tab IA) → Orchestrators → Developers → About → Delegators

---

### Phase 7 — Veracity Pass + Glossary Update Loop

**NOTE**: Phase 8 (naming) must execute BEFORE Phase 7 (veracity). If naming changes section titles after veracity markers are placed, the markers become orphaned. Corrected ordering: Phase 6 → Phase 8 (naming) → Phase 7 (veracity) → Phase 10 (layout).

**What it does**: Two things in one pass:
1. Flags unverifiable claims in approved Phase 6 content — places REVIEW markers, sets `veracityStatus` in frontmatter
2. **Feeds verified terminology back to the human-authored glossary** — this is the veracity → glossary feedback loop. Without this, `veracityStatus: verified` on pages does not update the canonical terminology record.

**Glossary update rules** (Phase 7 of `veracity-pass.md`):
- Verified terminology → update `v2/[tab]/resources/glossary.mdx` (human-authored, authoritative)
- Do NOT write to `resources/compendium/glossary.mdx` (AI-generated, unverified)
- Agents disambiguate using all veracity library tiers before escalating
- **Only true ambiguity** (no primary or secondary source resolves the conflict) returns to human
- Everything that CAN be verified by a source is resolved and written to the glossary automatically

**Resources available** (built this session):
- `Frameworks/veracity-library.md` — 45 sources (complete)
- `Frameworks/veracity.md` — LOCKED 2026-03-23
- `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` — built, DRAFT (awaiting test runs + approval)
- `Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md` — built

**Build process**: Already built. Next: 1 review agent + 3 test runs (per testing protocol) → human approval → production

---

### Phase 8 — Naming Audit & Glossary (BEFORE Phase 7)

**Naming**: Every section title in every written page must score ≥20/25 on the naming rubric (`Prompts/section-naming.md`).

**Naming rubric status**: Rubric is locked (structure defined) BUT has NOT been tested or reviewed in production. It must go through the Prompt Testing Protocol (1 review agent + 3 test runs + human approval) before use at scale. Do not treat "locked" as "production-ready" — locking means the structure is finalised, not that quality is validated.

**Rubric enrichment needed** (Step 16): Add per-pageType, per-purpose, per-audience naming guidance to the rubric. Currently has generic placeholders. Execute before Phase 8 runs at scale.

**Naming audit integration**: Add to content-pass.md as a final step — "Before page approval, score every section heading against section-naming.md. Minimum 20/25. Headings scoring <20 must be revised."

**Glossary building**:
- Per-tab glossary (`v2/[tab]/resources/compendium/glossary.mdx`) updated throughout authoring
- Terminology lock at ~80% completeness before Phase 6 begins; hard freeze at end of Phase 8
- End-of-tab: review all terminology decisions, lock canonical forms, update per-tab glossary
- Master glossary (`v2/resources/livepeer-glossary.mdx`) updated after each tab completes

**Glossary sync strategy**: Master glossary is source of truth. Per-tab glossaries are curated subsets (audience-relevant terms). Define curation rules per audience before Phase 6 writes volume.

**Terminology decisions log**: All decisions (why NaaP is "Network-as-a-Product"; which BYOC expansion was chosen; etc.) recorded in `workspace/plan/active/CONTENT-WRITING/decisions/terminology-decisions.md`. Prevents re-litigating decisions.

---

### Phase 9 — Schema Migration (frontmatter-taxonomy.js)

**CORRECTED STATUS**: Core migration is **already complete** in the codebase. The plan previously called this "P0 not started" — this was wrong.

**What's done**:
- `CANONICAL_PAGE_TYPES` updated to 7-type set ✅
- `CANONICAL_PURPOSES` updated to 15 values ✅
- Deprecated aliases for old values implemented ✅ (e.g., `landing → navigation`, `how_to → instruction`)
- Backward compatibility maintained — deprecated values resolve to canonical before validation ✅

**What remains** (remaining scope — NOT a blocker for Phase 10):
1. **Add validators for 5 new fields**:
   - `normalizePersona(value, audience)` — validate against audience-scoped persona enums
   - `normalizeIndustry(value)` — validate array, max 2, against canonical industry enum
   - `normalizeNiche(value)` — validate array against canonical niche enum
   - `normalizeLifecycleStage(value)` — validate against 7-value enum
   - `normalizeVeracityStatus(value)` — validate against `verified | unverified | stale`
2. **Add test coverage** for new field validation
3. **Confirm CI enforcement**: identify which GitHub Action validates frontmatter — confirm new fields are enforced, not silently accepted

**Note on ordering**: Phase 9 is an independent track. It does NOT block Phase 10. Phase 10 is blocked by upstream content phases (6–8) completing, not by schema. Phase 9 should run in parallel with Phases 6–8.

---

### Phase 10 — Layout Pass (layout-pass.md — built)

Takes approved Phase 6+7+8 content → produces production-ready `.mdx` file.

**CORRECTED BLOCKER STATUS**: Phase 10 is NOT blocked by schema migration (Phase 9 core is already done). Phase 10 is blocked by upstream content phases (Phase 6 → Phase 8) completing for each page.

**Remaining prep before Phase 10 runs at scale**:
1. **Page template structural contracts**: Templates exist in `snippets/templates/pages/` but no formal documentation of required sections per template. Create `Frameworks/page-template-contracts.md` before Phase 10 runs at scale.
2. **Two template location check**: Confirm `snippets/templates/pages/` is authoritative (vs Design Spec references). Resolve before Phase 10.
3. **Component layout profile reconciliation**: `tools/config/component-layout-profile.json` uses old pageType names. Create mapping from old names to canonical names for layout-pass.md reference.
4. **Golden examples**: Create 1–2 approved golden example pages per pageType in `v2/_workspace/references/content-pipeline/golden-examples/` — reference for layout pass.

**Process**: Run per page after content (Phase 6) + naming (Phase 8) + veracity (Phase 7) approval. Layout pass applies templates, components, frontmatter, naming, UK English, render validation.

---

### Phase 11 — Universal Pages (built last per tab)

Every priority tab needs these pages. All built AFTER main content (Phase 10) is complete for that tab.

**⚠️ DEFERRED** — Do not build until first tab is 70%+ through Phase 6. Phase 11 cannot run until a tab completes Phase 10; building prompts now adds scope without value.

**4 prompts to build** (see Pack 3 handoff — trigger when first tab is 70%+ through Phase 6):

| Prompt to build | Output |
|---|---|
| `portal-navigator-generator.md` | `portal.mdx` + `navigator.mdx` per tab |
| `faq-sourcing-guide.md` (human process) | Curated FAQ question list per tab |
| `faq-generator.md` | `faq.mdx` per tab |
| `glossary-finalizer.md` | Final `glossary.mdx` per tab |

**Build order per tab** (after Phase 10 complete):
1. Finalize glossary (glossary-finalizer.md)
2. Generate portal + navigator (portal-navigator-generator.md)
3. Human curates FAQ questions from Discord/GitHub issues/Forum
4. Generate FAQ page (faq-generator.md)

**FAQ/Help sourcing**: Community questions from Discord, GitHub issues, Livepeer Forum. Process: web agent with connectors scrapes real questions → human curates (filters FAQ-worthy) → faq-generator.md produces answers from canonical content → human reviews. Distinct prompt, not content-pass.md.

---

### Phase 12 — Cross-Tab Consistency

After all 5 priority tabs have content:

1. **Cross-tab journeys map** (`workspace/plan/active/CONTENT-WRITING/decisions/cross-tab-journeys.md`): Create this during Phase 3 (IA Audit), not after Phase 11. Map all primary graduation paths + required CTAs per tab. This unblocks Phase 12 when the time comes.
2. Shared terminology consistent across tabs — spot-check 20 key terms
3. Cross-tab CTAs and handoffs present (graduation paths: founder → builder → developer → gateway; delegator → about; etc.)
4. AI discoverability: any page using `SearchTable`/`ShowcaseCards` has companion `.json` file (requirement must be in Phase 6 content-pass.md output requirements — add this)
5. Composable MDX candidates identified — scan first full tab (Gateways) for repeated patterns, create `composable-candidates.md` list; refactor deferred
6. Final glossary review across tabs

---

## Tab Execution Order

**Priority order confirmed by human 2026-03-23: Orchestrators → Gateways → (remaining TBD)**

| Priority | Tab | Phase 2 ready? | Blocker |
|---|---|---|---|
| 1 | Orchestrators | After Phase 0 approval | LIP-92 verify (non-blocking for Phase 2) |
| 2 | Gateways | After Phase 0 approval | NaaP terminology lock (provisional) |
| 3 | Developers | After Phase 0 approval | S6 split decision (BLOCKING for Phase 3) |
| 4 | About | After Phase 0 approval | Multi-audience model decision + structure |
| 5 | Delegators | After rewards placement decision | Rewards placement (BLOCKING for Phase 3) |

**Review flow**: Tabs are reviewed and locked one at a time in priority order. Human reviews IA for priority 1 tab first. Once locked, agents run for that tab. Priority 2 does not unlock until priority 1 IA is locked.

---

## What Can Be Built Immediately (no human decision needed)

**Run all of these as a parallel infrastructure sprint** — these are independent tracks with no mutual dependencies. Do not run them sequentially. They run while Phase 0 human decisions are being made.

| Task | Output | Phase it unblocks | Handoff pack? |
|---|---|---|---|
| Build `content-scan.md` prompt | Content scan prompt | Phase 2 | Pack 1 |
| Build AUDIT mode for `content-pass.md` | AUDIT mode | Phase 4 | Pack 2 |
| Fix content-pass.md Phase 5.4 false warning | Updated content-pass.md | Phase 5 | Pack 2 |
| Lock `veracity.md` framework (remove DRAFT status) | Locked veracity framework | Pack 4 | — |
| Build `veracity-pass.md` prompt + claim analysis | Veracity pass | Phase 7 | Pack 4 |
| Add position violation check to `structure-audit.md` | Updated structure-audit.md | Phase 3 | — |
| Create decision-registry.md + blocking-items.md + tab-status.md | PM infrastructure | Phase 0 | — |
| Create `decisions/feedback-routing-map.md` (correction → definition file routing) | Feedback routing map | Content Pass Open gate | — |
| Create `cross-tab-journeys.md` stub | Phase 12 foundation | Phase 12 | — |
| ~~Build Phase 11 prompts (portal/FAQ/glossary)~~ | ~~Pack 3~~ | **DEFERRED — first tab 70%+ through Phase 6** | Pack 3 |

**Phase 11 (Pack 3) is removed from this list** — it is not load-bearing for any of the five priority tabs to reach publishable state. Defer until the first tab is clearly tracking toward Phase 6 completion.

---

## What This Plan Does NOT Cover (yet)

- Layout/MDX (Phase 10) — in scope but after Phase 6 is running well
- Community tab — deferred
- Home, Solutions, Resource Hub — deferred
- Composable MDX refactor — deferred until all content complete
- Portal/Navigator content prompts — see Pack 3 (DEFERRED — first tab 70%+ through Phase 6)
- FAQ web agent connectors — deferred until Phase 11
- Retiring old skills — deferred

---

## Gaps Flagged (updated from audit)

1. **Brand & Copy Guide base layer**: Exists in `ai-tools/ai-skills/docs-copy/` but not integrated into `voice-rules.md` or `content-pass.md`.
2. **Phase 7/8 ordering**: Phase 8 (naming) must precede Phase 7 (veracity) — corrected in this plan.
3. **Three taxonomy conflicts**: Design Spec (10 types) vs Frameworks (7 canonical) vs `frontmatter-taxonomy.js` (now 7 canonical + deprecated aliases) — substantially resolved; remaining gap is new field validators.
4. **Two template locations**: `snippets/templates/pages/` vs Design Spec — confirm before Phase 10.
5. **Tab maps don't exist**: `v2/[tab]/_workspace/tab-map.md` required by `content-pass.md` but none exist yet. Created in Phase 3 (IA audit).
6. **Developer disambiguation routing table**: Exists in Design Spec but not in audience design prompt. Risk: developer persona treated as monolithic. Address in v6 if confirmed issue.
7. **AI discoverability obligation**: `SearchTable`/`ShowcaseCards` pages need companion `.json` files. Must be in Phase 6 content-pass.md output requirements.
8. **Feedback system**: No formal process for corrections to feed back into standards (`design-canonical.mdx` ⑥ Feedback System). Define before Phase 6 produces significant output.
9. **Information type → component mapping**: content-pass.md should include component catalog + page-type profiles to hint at type-appropriate components. Not layout decisions — info-type awareness. Add in Pack 2.
10. **Glossary update process**: Defined in Phase 8. Master → per-tab curation strategy needed.
11. **About multi-audience token**: `discover-substrate` non-canonical. v6 prompt must handle multi-audience tabs. Schema must support multi-audience pages.
12. **Glossary authority (user-clarified)**: `resources/glossary.mdx` = human-made, reviewed, authoritative. `resources/compendium/glossary.mdx` = AI-generated, unverified. Review AI version against human version; do not treat as equivalent. Resolve in Phase 3.5.
13. **component-layout-profile.json uses old pageType names**: Annotate this in content-pass.md when loading; reconcile before Phase 10.
14. **broken-links.yml advisory-only**: Make blocking for v2 paths before Phase 4.5 file moves.
15. **Prompt testing protocol simplification**: Reduced to 1 review agent + 3 test runs. Updated in this plan.
16. **Learnings severity standardisation**: Adopt CRITICAL/HIGH/MEDIUM/INFO across all learnings files. Apply to new learnings going forward.

---

## Progress Tracker

| Phase | Task | Status |
|---|---|---|
| PM | Create decision-registry.md | ✅ Done |
| PM | Create blocking-items.md | ✅ Done |
| PM | Create tab-status.md | ✅ Done |
| PM | Create cross-tab-journeys.md stub | ✅ Done |
| PM | Create decisions/feedback-routing-map.md | ✅ Done |
| PM | Create prompt-testing-protocol.md | ✅ Done |
| PM | Create decisions/terminology-tracking.md stub | ⬜ |
| 0 | Tab priority order confirmed (Orchestrators → Gateways) | ✅ Done |
| 0 | Tab structure decisions — Orchestrators + Gateways | ⬜ |
| 0 | Tab structure decisions — Delegators, About, Developers | ⬜ |
| 0 | Record named decision authority + reversal condition for each BLOCKING structural decision | ⬜ |
| 0 | Confirm/record NaaP, BYOC, LIP-92 status | ⬜ |
| 0 | Lock v1 vs v2 canonical path decision | ⬜ |
| 0 | Lock glossary authority per tab | ⬜ |
| 0 | Phase 12 trigger decision (once vs incremental; minimum tab set if incremental) | ⬜ |
| 0 | Produce phase-0-decisions-lock.md (human-signed) | ⬜ |
| 1 | Audience design — all 5 tabs | ✅ Done (draft — not approved) |
| 1 | Check B validation — Gateways | ✅ Done |
| 1 | Check B validation — Orchestrators | ✅ Done |
| 1 | Run retroactive Check B validation — Orchestrators, Developers (before Phase 2 unlocks) | ⬜ |
| 1 | lp-token canonical collation run (source material exists; consolidation missing) | ✅ Done |
| 1 | About canonical collation run (no collated/ folder exists) | ✅ Done |
| 1 | Resolve BLOCKING terminology items (post Phase 0 confirmation) | ⬜ |
| 1 | Orchestrators v5 learnings file | ✅ Done |
| 1 | Human review + lock IA — Orchestrators (PRIORITY 1) | ⬜ |
| 1 | Human review + lock IA — Gateways (PRIORITY 2) | ⬜ |
| 1b | Phase 1b persona iteration check — Orchestrators | ⬜ |
| 1b | Phase 1b persona iteration check — Gateways | ⬜ |
| 1b | Phase 1b persona iteration check — Developers | ⬜ |
| 1b | Phase 1b persona iteration check — About | ⬜ |
| 1b | Phase 1b persona iteration check — Delegators | ⬜ |
| 1.5 | Prompt testing protocol document (simplified) | ✅ Done |
| 2 | Build content-scan.md (Pack 1) | ✅ Done |
| 2 | Run content scan — Gateways | ✅ Done |
| 2 | Run content scan — Orchestrators | ⬜ |
| 2.5 | Build Phase 2.5 IA-mapped research pack — Orchestrators (AFTER IA locked) | ⬜ |
| 2.5 | Build Phase 2.5 IA-mapped research pack — Gateways (AFTER IA locked) | ⬜ |
| 2.5 | Deep research pass on finalised glossary — Orchestrators (Claude Web, AFTER IA locked) | ⬜ |
| 2.5 | Deep research pass on finalised glossary — Gateways (Claude Web, AFTER IA locked) | ⬜ |
| 2 | Run content scan — Developers, About, Delegators | ⬜ |
| 3 | Fix structure-audit.md: add position violation check | ✅ Done |
| 3 | Run IA audit — Gateways | ⬜ |
| 3 | Run IA audit — all priority tabs | ⬜ |
| 3.5 | Resolve BLOCKING items per tab (record in decision-registry.md) | ⬜ |
| 3.5 | Consolidate glossary file authority per tab | ⬜ |
| 3.5 | Lock terminology per tab | ⬜ |
| 4 | Build AUDIT mode + component mapping + page brief (Pack 2) | ✅ Done |
| 4 | Fix content-pass.md Phase 5.4 false warning (Pack 2) | ✅ Done |
| 4 | Run content audit — Gateways guides | ⬜ |
| 4.5 | Reconsolidation — Gateways | ⬜ |
| 5 | Integrate Brand & Copy Guide as base layer in voice-rules.md | ⬜ |
| 5 | Add persona-level voice notes (builder, developer, community) | ⬜ |
| 5 | Voice testing — 3 pages per audience | ⬜ |
| 6 | Content pass — Gateways guides (pilot, first section from approved IA) | ⬜ |
| 6 | Content pass — remaining tabs | ⬜ |
| 8 | Naming audit enrichment (Step 16 — per-pageType/purpose/audience) | ⬜ |
| 8 | Naming audit — all written pages | ⬜ |
| 8 | Glossary finalization — per tab | ⬜ |
| 7 | Lock veracity.md framework | ✅ Done |
| 7 | Build veracity-pass.md + pack-guide.md (Pack 4) | ✅ Done |
| 7 | Veracity → glossary feedback loop (Phase 7 of veracity-pass.md) | ✅ Done |
| 7 | Claim-type coverage analysis (Pack 4 prerequisite — 20+ claim types against 45-source library) | ⬜ |
| 7 | Run veracity pass — all written pages | ⬜ |
| 9 | Add new field validators to frontmatter-taxonomy.js (persona/industry/niche/lifecycleStage/veracityStatus) | ⬜ |
| 9 | Add test coverage for new field validation | ⬜ |
| 9 | Confirm CI enforcement for new fields | ⬜ |
| 9 | Core types/purposes migration | ✅ Done |
| 10 | Create page-template-contracts.md | ⬜ |
| 10 | Create golden examples per pageType | ⬜ |
| 10 | Reconcile component-layout-profile.json old type names | ⬜ |
| 10 | Layout pass — pilot (Gateways guides) | ⬜ |
| 11 | ⚠️ DEFERRED — Build Phase 11 prompts (Pack 3): portal-navigator-generator, faq-sourcing-guide, faq-generator, glossary-finalizer | ⬜ |
| 11 | ⚠️ DEFERRED — Universal pages — glossary finalization | ⬜ |
| 11 | ⚠️ DEFERRED — Universal pages — FAQ/help | ⬜ |
| 11 | ⚠️ DEFERRED — Universal pages — portal + navigator | ⬜ |
| 12 | Cross-tab consistency check | ⬜ |
