# Content Writing Pipeline — Dependency Tree
> Generated: 2026-03-23
> Source of truth: plan-canonical.md (reviewed + corrected plan v2)
> Status verified against: project-state.md · decision-registry.md · blocking-items.md · filesystem

This file is the authoritative map of what can run now vs what is blocked.
File existence has been verified — no status is assumed.

---

## Status Key

| Marker | Meaning |
|---|---|
| ✅ COMPLETE | Output file exists and has been produced |
| 🔄 READY | All dependencies met; can run now (no human decision needed) |
| 🔒 HUMAN GATE | Needs explicit human decision or sign-off before proceeding |
| ⏳ BLOCKED | Waiting on another task to complete first |
| ❌ MISSING | Required output file does not exist |

---

## Agent Runnable vs Human Gated

| Label | Meaning |
|---|---|
| AGENT-RUNNABLE | Agent can execute; dependencies are met; no human decision required |
| HUMAN-GATED | Cannot proceed without explicit human decision or approval |

---

## TOP-LEVEL PIPELINE

```
PM Infrastructure ✅
│
├── Phase 0 — Tab Structure Decisions 🔒 HUMAN GATE
│   ├── Outputs Phase 1b (per tab, after IA lock)
│   ├── Outputs Phase 2 (per tab)
│   └── Outputs Phase 3 (per tab)
│
├── Phase 1 — Audience Design ✅ (draft only — not approved)
│   └── Check B Validation ✅ Gateways + Orchestrators only
│
├── Phase 1b — Persona Iteration Loop ⏳ BLOCKED (IA not locked per tab)
│
├── Phase 2 — Content Scan 🔄 READY (Orchestrators, Developers, About, Delegators)
│   └── Phase 2 — Gateways ✅ COMPLETE
│
├── Phase 2.5 — IA-Mapped Research Pack ⏳ BLOCKED (IA must be locked first)
│
├── Phase 3 — IA Audit ⏳ BLOCKED (Phase 2 + Phase 0 approval required)
│
├── Phase 3.5 — Terminology & Naming Pre-Work ⏳ BLOCKED (Phase 3 required)
│
├── Phase 4 — Content Audit (AUDIT mode) ⏳ BLOCKED (Phase 3 required)
│
├── Phase 4.5 — Reconsolidation ⏳ BLOCKED (Phase 4 + human approval)
│
├── Phase 5 — Voice Rules ⚠️ PARTIALLY COMPLETE (gaps remain)
│
├── Phase 6 — Content Pass ⏳ BLOCKED (Phases 3, 4, 4.5, 5 required)
│
├── Phase 7 — Veracity Pass ⏳ BLOCKED (Phase 6 + Phase 8 must precede)
│
├── Phase 8 — Naming Audit ⏳ BLOCKED (Phase 6 required)
│
├── Phase 9 — Schema Migration 🔄 PARTIALLY READY (core done; validators remaining)
│
├── Phase 10 — Layout Pass ⏳ BLOCKED (Phases 6 + 7 + 8 required per page)
│
├── Phase 11 — Universal Pages ⏳ DEFERRED (first tab 70%+ through Phase 6)
│
└── Phase 12 — Cross-Tab Consistency ⏳ BLOCKED (all 5 tabs through Phase 10)
```

---

## INFRASTRUCTURE (Pre-Phase — All Tabs)

### PM Infrastructure
**Status**: ✅ COMPLETE
**Outputs** (all exist, verified):
- `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`
- `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md`
- `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`
- `workspace/plan/active/CONTENT-WRITING/decisions/cross-tab-journeys.md`
- `workspace/plan/active/CONTENT-WRITING/decisions/feedback-routing-map.md`
- `workspace/plan/active/CONTENT-WRITING/prompt-testing-protocol.md`
**Missing** (❌):
- `workspace/plan/active/CONTENT-WRITING/decisions/terminology-tracking.md` stub — ❌ MISSING
  - NOTE: `decisions/terminology-tracking.md` exists. Verify if this satisfies the stub requirement.

### Prompt Infrastructure
**Status**: ✅ COMPLETE for production-ready prompts
**Outputs** (all exist, verified):
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-content-scan/content-scan.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-content-scan/content-scan-learnings.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md` ✅
  - Position violation check: ✅ ADDED
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` ✅
  - AUDIT mode: ✅ BUILT
  - Phase 5.4 false warning: ✅ REMOVED
  - Component mapping + page brief: ✅ BUILT
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` ✅ (DRAFT — awaiting test + approval)
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/4-layout-pass/pack-guide.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` ✅ (all 7 audiences — gaps remain, see Phase 5)
**Missing** (❌):
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/5-universal-pages/` — entire directory ❌ DEFERRED

### Framework Files
**Status**: ✅ COMPLETE
**Outputs** (verified):
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` ✅ LOCKED 2026-03-23
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` ✅ (45 sources)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/information-type.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md` ✅
- `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md` ✅
- `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx` ✅
- `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` ✅ (locked structure; not yet production-tested)

---

## PHASE 0 — Tab Structure Decisions

**Type**: HUMAN-GATED
**Status**: 🔒 HUMAN GATE — No decisions locked except D-NAV-01 (navigation disambiguation pattern)
**Inputs required**:
- All existing Phase 1 audience design outputs (exist as drafts)
- Human review of all 5 tab structures

**Outputs** (none exist yet):
- `workspace/plan/active/CONTENT-WRITING/decisions/phase-0-decisions-lock.md` — ❌ MISSING
- Entries in `decision-registry.md` for all structural decisions below

**Decisions needed before pipeline can advance** (all ❌ not yet recorded in decision-registry.md):

| Decision | Tab(s) | Blocks |
|---|---|---|
| Rewards placement (before or after operator selection?) | Delegators | Phase 3 — Delegators |
| S6 split (real-time/custom compute: split or merged?) | Developers | Phase 3 — Developers |
| Tab structure: Delegators reorganisation scope | Delegators | Phase 2+ |
| Tab structure: About reorganisation scope + multi-audience model | About | Phase 2+ |
| Tab structure: Developers reorganisation scope | Developers | Phase 2+ |
| v1 vs v2 canonical path confirmation | All | Phase 3 |
| Glossary authority per tab (human-made vs AI-generated) | All | Phase 3.5 |
| NaaP, BYOC, LIP-92 verification status | Gateways, Orchestrators | Phase 3.5 |
| Phase 12 trigger (once vs incremental; minimum tab set) | All | Phase 12 |
| Named decision authority + reversal conditions for each BLOCKING item | All | Phase 3 |

**ONE decision locked** (D-NAV-01):
- Navigation disambiguation page is a locked cross-tab pattern (all multi-path tabs)
- Recorded in `decision-registry.md` ✅

**What Phase 0 unblocks**: Everything downstream — no tab can reach Phase 2+ without Phase 0 structural decisions for that tab.

---

## PHASE 1 — Audience Design

**Type**: AGENT-RUNNABLE (runs already done); HUMAN-GATED (approval pending)
**Overall status**: ✅ Draft outputs exist for all 5 tabs — NOT yet approved

### Per-Tab Audience Design Status

#### Orchestrators (Priority 1)
**Status**: ✅ Draft complete — 🔒 HUMAN GATE (approval required)
**Inputs used**: Multiple v1–v5 runs
**Outputs** (verified):
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/collation-notes-orchestrators.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v5.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/validation-check.md` ✅ (Check B — APPROVED)
- `context-packs/orchestrators-audience-doc.md` ✅
**Unblocks**: Phase 1b (Orchestrators) once IA is reviewed and locked by human

#### Gateways (Priority 2)
**Status**: ✅ Draft complete — 🔒 HUMAN GATE (approval required)
**Inputs used**: v4–v5 runs
**Outputs** (verified):
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/collated/canonical-gateways-audience-design.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/collated/collation-notes-gateways.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/learnings/collation-v2.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/validation-check.md` ✅ (Check B — APPROVED)
**Unblocks**: Phase 1b (Gateways) once IA is reviewed and locked by human

#### Developers (Priority 3)
**Status**: ✅ Draft complete — 🔒 HUMAN GATE (approval required; S6 split decision blocking Phase 3)
**Outputs** (verified):
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/developers/collated/canonical-developers-audience-design.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/developers/collated/collation-notes-developers.md` ✅
**Missing** (❌):
- `validation-check.md` for Developers — ❌ MISSING (Check B not yet run)
**Unblocks**: Check B validation can run now (AGENT-RUNNABLE); Phase 1b after IA locked

#### About (Priority 4)
**Status**: ✅ Draft complete — 🔒 HUMAN GATE (approval required; multi-audience model decision needed)
**Outputs** (verified):
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/about/collated/canonical-about-audience-design.md` ✅
**Missing** (❌):
- `validation-check.md` for About — ❌ MISSING (Check B not yet run)
- `collation-notes-about.md` — ❌ MISSING (only collated canonical output exists)
**Unblocks**: Check B validation can run now (AGENT-RUNNABLE); Phase 1b after IA locked

#### Delegators / lp-token (Priority 5)
**Status**: ✅ Collation outputs exist — 🔒 HUMAN GATE (rewards placement decision blocking Phase 3)
**Outputs** (verified):
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/lp-token/collated/canonical-lp-token-audience-design.md` ✅
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/lp-token/collated/canonical-lpt-delegators-audience-design.md` ✅ (Claude Web run)
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/lp-token/collated/chatgpt-canonical-delegators-lp-token-audience-design.md` ✅
**Missing** (❌):
- `validation-check.md` for Delegators — ❌ MISSING (Check B not yet run)
**Unblocks**: Check B validation can run now (AGENT-RUNNABLE); Phase 1b after IA locked

---

## PHASE 1b — Persona Iteration Loop (per tab)

**Type**: AGENT-RUNNABLE (agents) + HUMAN-GATED (iteration decision + IA lock)
**Status**: ⏳ BLOCKED — all 5 tabs blocked on human IA review

**Dependencies for each tab**:
- Phase 1 draft output must exist for that tab ✅ (exists for all 5)
- Raw inventory pack must exist for that tab ✅ (exists for all 5)
- Human has reviewed Phase 1 output and is ready to proceed

**Inputs** (per tab):
- `context-packs/[tab]-research-pack.md` — raw secondary inventory ✅ (all 5 exist)
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md` ✅
- `Frameworks/content-pipeline-framework.md` ✅

**Outputs** (none exist yet):
- Confirmed IA with no changes, OR
- Updated canonical audience design output for that tab

**Unblocks**: Phase 2.5 (IA-mapped research pack) once IA locked; final IA lock gate

**Why blocked**: Human must first review Phase 1 collated output per tab and confirm readiness to proceed. No tab's IA has been reviewed yet.

---

## PHASE 2 — Content Scan (per tab)

**Type**: AGENT-RUNNABLE
**Status**: 🔄 READY for Orchestrators, Developers, About, Delegators; ✅ COMPLETE for Gateways

### Gateways
**Status**: ✅ COMPLETE
**Output** (verified):
- `context-packs/gateways-content-scan.md` ✅
**Unblocks**: Phase 3 (IA Audit — Gateways) once Phase 0 approval given

### Orchestrators
**Status**: 🔄 READY TO RUN (AGENT-RUNNABLE)
**Dependencies met**:
- `content-scan.md` prompt exists ✅
- v2/orchestrators/ content exists ✅
- `docs.json` exists ✅
- Canonical audience design exists (draft) ✅
**Inputs**:
- `docs.json`
- `v2/orchestrators/` all .mdx files
- `Frameworks/content-pipeline-framework.md`
- `Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md`
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`
**Output** (does not exist):
- `context-packs/orchestrators-content-scan.md` — ❌ MISSING
**Unblocks**: Phase 3 (Orchestrators IA Audit)

### Developers
**Status**: 🔄 READY TO RUN (AGENT-RUNNABLE)
**Output** (does not exist):
- `context-packs/developers-content-scan.md` — ❌ MISSING
**Unblocks**: Phase 3 (Developers IA Audit)

### About
**Status**: 🔄 READY TO RUN (AGENT-RUNNABLE)
**Output** (does not exist):
- `context-packs/about-content-scan.md` — ❌ MISSING
**Unblocks**: Phase 3 (About IA Audit)

### Delegators
**Status**: 🔄 READY TO RUN (AGENT-RUNNABLE)
**Output** (does not exist):
- `context-packs/delegators-content-scan.md` — ❌ MISSING
**Unblocks**: Phase 3 (Delegators IA Audit)

**NOTE**: All 4 remaining scans can run in parallel (one agent per tab). Human must approve scan output before Phase 3 runs for that tab (quick review gate, not a blocking decision).

---

## PHASE 2.5 — IA-Mapped Research Pack (per tab)

**Type**: AGENT-RUNNABLE (after IA locked)
**Status**: ⏳ BLOCKED — all tabs blocked on IA lock (Phase 1b + human IA approval)

**Dependencies** (per tab, none met yet):
- IA must be human-locked for that tab ❌
- Phase 1 canonical output must be approved ❌
- v1 + v2 content must be accessible ✅
- `Frameworks/veracity-library.md` ✅

**Inputs** (per tab):
- Approved canonical IA output: `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
- Raw inventory pack (secondary reference): `context-packs/[tab]-research-pack.md`
- All `v2/[tab]/` MDX files
- All `v1/[tab]/` source files
- `Frameworks/veracity-library.md`

**Outputs** (none exist yet):
- `context-packs/[tab]-research-pack-v2.md` — ❌ MISSING for all 5 tabs
- `terminology-draft-[tab].md` — ❌ MISSING for all 5 tabs (produced alongside research pack)

**Also runs in parallel (per-tab flow step 6)**:
- Deep research pass on finalised glossary entries (Claude Web — after IA locked)
- Inputs: finalised glossary from approved IA
- Output: canonical terminology file with verified definitions + unresolved ambiguities

**Unblocks**: Phase 3 human checkpoint review; Phase 3.5 terminology work

---

## PHASE 3 — IA Audit / Structure Audit (per tab)

**Type**: AGENT-RUNNABLE (agents) + HUMAN-GATED (tab-map approval)
**Status**: ⏳ BLOCKED — all tabs blocked

**Dependencies** (per tab):
- `context-packs/[tab]-content-scan.md` must exist (Phase 2 output) — ✅ Gateways only; ❌ others
- Phase 0 structural decisions must be locked for that tab ❌ (none locked yet)
- Phase 1 canonical output approved ❌ (none approved yet)
- `structure-audit.md` prompt with position violation check ✅

**Inputs** (per tab):
- `context-packs/[tab]-content-scan.md` ← Phase 2 output
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/08a-ia-per-tab.md`
- `docs.json` (nav extract for this tab)
- `Frameworks/content-pipeline-framework.md`

**Outputs** (none exist yet):
- `v2/[tab]/_workspace/tab-map.md` — ❌ MISSING for all 5 tabs

**Human gate**: Persona journey smoke-test + tab-map approval before Phase 4 starts.
This is the **Structure Approved gate** on the Tab Status Board.

**Closest to ready**: Gateways (Phase 2 complete; blocked only on Phase 0 decisions)

**What each tab is blocked on**:
| Tab | Blocked on |
|---|---|
| Orchestrators | Phase 0 decisions + Phase 2 scan (scan is READY TO RUN) |
| Gateways | Phase 0 decisions (scan ✅ complete) |
| Developers | Phase 0 decisions + S6 split decision + Phase 2 scan |
| About | Phase 0 decisions + multi-audience model decision + Phase 2 scan |
| Delegators | Phase 0 decisions + rewards placement decision + Phase 2 scan |

---

## PHASE 3.5 — Terminology & Naming Pre-Work (per tab)

**Type**: AGENT-RUNNABLE (resolution checks) + HUMAN-GATED (sign-off on all BLOCKING items)
**Status**: ⏳ BLOCKED — depends on Phase 3 (tab-map) and Phase 0 (decisions)

**Dependencies**:
- Tab-map must exist (Phase 3 output) ❌ (none exist)
- All BLOCKING items from `blocking-items.md` must be resolved ❌ (blocking-items.md currently empty — items not yet logged from phase runs)
- Glossary authority confirmed per tab (Phase 0 decision) ❌

**Inputs** (per tab):
- `v2/[tab]/resources/glossary.mdx` (human-authored, authoritative)
- `Prompts/section-naming.md` (naming rubric)
- `blocking-items.md` (runtime — populated during phase runs)
- `decision-registry.md`

**Outputs** (none exist):
- Entries in `decision-registry.md` for all resolved BLOCKING items — ❌ MISSING
- Locked terminology in `v2/[tab]/resources/glossary.mdx` — ❌ MISSING
- `workspace/plan/active/CONTENT-WRITING/decisions/terminology-decisions.md` — ❌ MISSING
  (Note: `decisions/terminology-tracking.md` exists but is a stub; `terminology-decisions.md` is a distinct file)

**Unblocks**: Content Pass Open gate for Phase 6

---

## PHASE 4 — Content Audit (AUDIT Mode, per tab)

**Type**: AGENT-RUNNABLE (with approved tab-map)
**Status**: ⏳ BLOCKED — depends on Phase 3

**Dependencies**:
- Tab-map must exist (Phase 3 output) ❌
- Voice rules confirmed for tab's audience (Phase 5) — Phase 5 has gaps; core rules exist ✅

**Inputs** (per section group):
- `v2/[tab]/_workspace/tab-map.md` ← Phase 3 output (❌ does not exist)
- `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` (AUDIT mode) ✅
- Section group files: `v2/[tab]/[group]/`

**Outputs** (none exist):
- `context-packs/[tab]/[group]-audit.md` — ❌ MISSING for all tabs/groups

**Unblocks**: Phase 4.5 reconsolidation (per group, after human approval)

---

## PHASE 4.5 — Reconsolidation (per tab)

**Type**: HUMAN-GATED (approval before any file move executes)
**Status**: ⏳ BLOCKED — depends on Phase 4

**Dependencies**:
- Phase 4 AUDIT output approved by human ❌
- Human reviews docs.json changes before moves ❌

**Inputs**:
- `context-packs/[tab]/[group]-audit.md` ← Phase 4 output
- `docs.json`

**Outputs** (none exist):
- Executed file moves in `v2/[tab]/`
- Updated `docs.json`
- Stub `.mdx` redirect files at old paths
- Updated `context-packs/[tab]-content-scan.md` (re-run after moves)

**Human gate**: docs.json changes and all moves require explicit human confirmation before execution.
**Unblocks**: Phase 6 (Content Pass)

---

## PHASE 5 — Voice Rules

**Type**: AGENT-RUNNABLE (integration + testing tasks) + HUMAN-GATED (synthesis doc approval)
**Status**: ⚠️ PARTIALLY COMPLETE — core rules exist; integration gaps remain

**What exists** (✅):
- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` ✅ (all 7 audiences covered)

**What is missing** (❌):
- Brand & Copy Guide synthesis document (Brand & Copy Guide base layer not integrated) — ❌ MISSING
- Persona-level voice subsections (builder x4, developer x4) — ❌ MISSING in voice-rules.md
- Community persona routing table — ❌ MISSING in voice-rules.md
- Voice testing: 3 pages per untested audience — ❌ NOT YET RUN

**Tasks that are READY NOW** (AGENT-RUNNABLE):
1. Integrate Brand & Copy Guide as base layer synthesis document
   - Reads: `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` + `Prompts/voice-rules.md`
   - Produces: synthesis doc showing layered application
2. Add persona-level voice notes to voice-rules.md
3. Add community persona routing table to voice-rules.md

**Unblocks**: Content Pass Open gate for Phase 6

---

## PHASE 6 — Content Pass (WRITE / REVIEW / REWRITE)

**Type**: AGENT-RUNNABLE (per page, with approved brief) + HUMAN-GATED (every page brief + every output)
**Status**: ⏳ BLOCKED — all tabs blocked

**Hard dependencies (ALL must be true per tab)**:
| Dependency | Status |
|---|---|
| Tab-map exists (Phase 3 output) | ❌ None exist |
| Voice rules confirmed for tab's audience | ⚠️ Core exists; gaps remain |
| Canonical audience design approved (Phase 1) | ❌ None approved |
| Terminology locked (Phase 3.5) | ❌ Not started |
| Section naming rubric loaded | ✅ Exists |
| AUDIT mode in content-pass.md | ✅ Built |
| Feedback routing map exists | ✅ Exists |

**Inputs** (per page):
- `v2/[tab]/_workspace/tab-map.md` ← Phase 3 output
- `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
- `ai-tools/ai-skills/docs-copy/skills/copy-rules.md`
- `Frameworks/content-pipeline-framework.md`
- `Prompts/section-naming.md`
- `docs-guide/config/component-registry.json`
- The specific page file(s) being worked on

**Outputs** (none exist):
- Written/rewritten `.mdx` files in `v2/[tab]/`
- Approved page briefs (per page)

**Human gate**: Every page brief approved before WRITE runs. Every WRITE output reviewed before moving to Phase 7/8.

**Sequencing**: Gateways (first section from approved IA) → Orchestrators → Developers → About → Delegators

---

## PHASE 7 — Veracity Pass + Glossary Update Loop

**NOTE**: Phase 8 (Naming) must run BEFORE Phase 7. Naming changes section titles; if naming runs after veracity markers are placed, markers become orphaned.

**Correct ordering**: Phase 6 → Phase 8 → Phase 7 → Phase 10

**Type**: AGENT-RUNNABLE (per page) + HUMAN-GATED (clearing all REVIEW markers)
**Status**: ⏳ BLOCKED — depends on Phase 6 + Phase 8

**Prompt status**:
- `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` ✅ BUILT (DRAFT — awaiting test runs + approval)
- `Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md` ✅ BUILT

**Next step for veracity-pass.md** (AGENT-RUNNABLE now):
- Claim-type coverage analysis (20+ claim types vs 45-source library)
- 1 review agent + 3 test runs per testing protocol
- Human approval before production use

**Dependencies (for production)**:
- Phase 6 approved content ❌
- Phase 8 naming audit complete ❌
- `veracity-pass.md` test runs approved ❌ (prompt exists but untested)

**Inputs** (per page):
- Approved Phase 6 content (written .mdx files)
- `Frameworks/veracity.md` ✅ LOCKED
- `Frameworks/veracity-library.md` ✅ (45 sources)
- `v2/[tab]/resources/glossary.mdx` (human-authored)

**Outputs** (none exist):
- REVIEW markers in content files
- Updated `veracityStatus` frontmatter fields
- Updated `v2/[tab]/resources/glossary.mdx` (verified terminology fed back)

**Human gate**: All REVIEW markers cleared by human before tab achieves Veracity Done gate.

---

## PHASE 8 — Naming Audit & Glossary

**Type**: AGENT-RUNNABLE (scoring) + HUMAN-GATED (rubric enrichment approval)
**Status**: ⏳ BLOCKED — depends on Phase 6; rubric enrichment needed before scale

**Rubric status**: `Prompts/section-naming.md` ✅ exists (locked structure — NOT yet production-tested)
- Must go through Prompt Testing Protocol before scale use ❌ (not done)
- Step 16 enrichment (per-pageType/purpose/audience guidance) ❌ MISSING

**Task READY NOW** (AGENT-RUNNABLE):
- Rubric Step 16 enrichment: add per-pageType, per-purpose, per-audience naming guidance
  - Reads: `Prompts/section-naming.md` + `Frameworks/pageType.md` + `Frameworks/pagePurpose.md`
  - Produces: enriched `Prompts/section-naming.md`

**Dependencies (for production use)**:
- Phase 6 approved content ❌
- Rubric testing protocol run (1 review agent + 3 test runs) ❌

**Inputs** (per page):
- Written .mdx files (Phase 6 output)
- `Prompts/section-naming.md` (naming rubric)

**Outputs**:
- Updated section headings in .mdx files (all scoring ≥20/25)
- Updated per-tab glossary `v2/[tab]/resources/compendium/glossary.mdx`

**Unblocks**: Phase 7 (Veracity Pass can run once naming is finalised per page)

---

## PHASE 9 — Schema Migration (frontmatter-taxonomy.js)

**Type**: AGENT-RUNNABLE (independent track)
**Status**: 🔄 PARTIALLY READY — core migration done; validators remaining

**What is COMPLETE** (✅):
- `CANONICAL_PAGE_TYPES` — 7-type set ✅
- `CANONICAL_PURPOSES` — 15 values ✅
- Deprecated aliases (landing → navigation, how_to → instruction, etc.) ✅
- Backward compatibility maintained ✅

**What is MISSING and READY TO RUN** (AGENT-RUNNABLE now — independent of all content phases):
- `normalizePersona(value, audience)` validator — ❌ MISSING
- `normalizeIndustry(value)` validator — ❌ MISSING
- `normalizeNiche(value)` validator — ❌ MISSING
- `normalizeLifecycleStage(value)` validator — ❌ MISSING
- `normalizeVeracityStatus(value)` validator — ❌ MISSING
- Test coverage for new field validation — ❌ MISSING
- CI enforcement confirmation for new fields — ❌ MISSING

**Inputs**:
- `tools/config/frontmatter-taxonomy.js` (or equivalent — confirm path)
- `Frameworks/content-pipeline-framework.md` (persona/industry/niche/lifecycleStage enums)

**Does NOT block Phase 10** — runs in parallel with Phases 6–8.

---

## PHASE 10 — Layout Pass

**Type**: AGENT-RUNNABLE (per page) + HUMAN-GATED (approval)
**Status**: ⏳ BLOCKED — depends on Phases 6 + 7 + 8

**Pre-work required (READY NOW — AGENT-RUNNABLE)**:
- `Frameworks/page-template-contracts.md` — ❌ MISSING; create before Phase 10 scale run
- Golden examples per pageType in `v2/_workspace/references/content-pipeline/golden-examples/` — ❌ MISSING
- Template location confirmation (`snippets/templates/pages/` vs Design Spec) — ❌ not confirmed
- `tools/config/component-layout-profile.json` old pageType name mapping — ❌ not reconciled

**Prompt status**: `Prompts/Prompts-By-Phase/4-layout-pass/` exists with pack-guide.md ✅

**Inputs** (per page):
- Approved Phase 6 content
- Naming-audited (Phase 8) content
- Veracity-passed (Phase 7) content
- `snippets/templates/pages/` templates
- `docs-guide/config/component-registry.json`

**Outputs**:
- Production-ready `.mdx` files per tab

**Unblocks**: Phase 11 (Universal Pages — per tab)

---

## PHASE 11 — Universal Pages

**Type**: AGENT-RUNNABLE (per tab, after Phase 10)
**Status**: ⏳ DEFERRED — Do not build until first tab is 70%+ through Phase 6

**Trigger condition**: First tab 70%+ through Phase 6 — not met; not close to being met.

**Prompts to build** (none exist yet — ❌ all MISSING):
- `Prompts/Prompts-By-Phase/5-universal-pages/portal-navigator-generator.md` — ❌ MISSING
- `Prompts/Prompts-By-Phase/5-universal-pages/faq-sourcing-guide.md` — ❌ MISSING
- `Prompts/Prompts-By-Phase/5-universal-pages/faq-generator.md` — ❌ MISSING
- `Prompts/Prompts-By-Phase/5-universal-pages/glossary-finalizer.md` — ❌ MISSING
- `Prompts/Prompts-By-Phase/5-universal-pages/phase-11-pack-guide.md` — ❌ MISSING

**Outputs per tab** (none exist):
- `v2/[tab]/portal.mdx` — ❌
- `v2/[tab]/navigator.mdx` — ❌
- `v2/[tab]/faq.mdx` — ❌
- Final `v2/[tab]/resources/glossary.mdx` — ❌

**Unblocks**: Phase 12

---

## PHASE 12 — Cross-Tab Consistency

**Type**: AGENT-RUNNABLE (spot-check) + HUMAN-GATED (CTA and journey review)
**Status**: ⏳ BLOCKED — all 5 tabs must complete through Phase 10 (or minimum tab set if incremental trigger chosen)

**Foundation work READY NOW** (AGENT-RUNNABLE):
- `decisions/cross-tab-journeys.md` stub exists ✅ — can be populated with graduation paths during Phase 3
- Should be built out during Phase 3 runs, not deferred to Phase 12

**Inputs**:
- All `v2/[tab]/_workspace/tab-map.md` files (Phase 3 outputs)
- All written content (Phase 6 outputs)
- `decisions/cross-tab-journeys.md`

**Outputs** (none exist):
- Cross-tab journey verification report
- `v2/_workspace/composable-candidates.md` — ❌ MISSING
- Final `v2/resources/livepeer-glossary.mdx` updates

---

## CONTEXT PACKS — Verification Summary

All files under `context-packs/` verified by filesystem check:

| File | Status |
|---|---|
| `context-packs/orchestrators-ia-prereq.md` | ✅ EXISTS |
| `context-packs/gateways-ia-prereq.md` | ✅ EXISTS |
| `context-packs/developers-ia-prereq.md` | ✅ EXISTS |
| `context-packs/about-ia-prereq.md` | ✅ EXISTS |
| `context-packs/delegators-ia-prereq.md` | ✅ EXISTS |
| `context-packs/gateways-full-content.md` | ✅ EXISTS |
| `context-packs/developers-full-content.md` | ✅ EXISTS |
| `context-packs/gateways-v1-content.md` | ✅ EXISTS |
| `context-packs/orchestrators-v1-content.md` | ✅ EXISTS |
| `context-packs/orchestrators-audience-doc.md` | ✅ EXISTS |
| `context-packs/gateways-research-pack.md` | ✅ EXISTS (secondary tier) |
| `context-packs/orchestrators-research-pack.md` | ✅ EXISTS (secondary tier) |
| `context-packs/developers-research-pack.md` | ✅ EXISTS (secondary tier) |
| `context-packs/about-research-pack.md` | ✅ EXISTS (secondary tier) |
| `context-packs/delegators-research-pack.md` | ✅ EXISTS (secondary tier) |
| `context-packs/gateways-content-scan.md` | ✅ EXISTS |
| `context-packs/orchestrators-full-content.md` | ❌ MISSING (agent running: a735b8249f782fe94) |
| `context-packs/about-full-content.md` | ❌ MISSING (agent running: a042f8dd8ad90c491) |
| `context-packs/delegators-full-content.md` | ❌ MISSING (agent running: aa3cbbf9120f25e16) |
| `context-packs/orchestrators-content-scan.md` | ❌ MISSING |
| `context-packs/developers-content-scan.md` | ❌ MISSING |
| `context-packs/about-content-scan.md` | ❌ MISSING |
| `context-packs/delegators-content-scan.md` | ❌ MISSING |
| `context-packs/[tab]-research-pack-v2.md` (all 5) | ❌ MISSING (Phase 2.5 — not yet run) |
| `context-packs/[tab]/[group]-audit.md` (all) | ❌ MISSING (Phase 4 — not yet run) |

---

## RUNNING AGENTS (from project-state.md)

These agents were spawned in a previous session. Their outputs may or may not have landed:

| Agent ID | Purpose | Output | Status |
|---|---|---|---|
| a735b8249f782fe94 | Orchestrators v2 full content read | `context-packs/orchestrators-full-content.md` | ❌ Output file not found — may still be running |
| a7cc5ac70bc268a66 | Gateways v2 full content read | `context-packs/gateways-full-content.md` | ✅ COMPLETE (file exists) |
| a39bdf3f9b89f4ad2 | Developers v2 full content read | `context-packs/developers-full-content.md` | ✅ COMPLETE (file exists) |
| a042f8dd8ad90c491 | About v2 full content read | `context-packs/about-full-content.md` | ❌ Output file not found — may still be running |
| aa3cbbf9120f25e16 | Delegators v2 full content read | `context-packs/delegators-full-content.md` | ❌ Output file not found — may still be running |
| a598531df4d8fc98a | Orchestrators v1 full content read | `context-packs/orchestrators-v1-content.md` | ✅ COMPLETE (file exists) |
| a09fc49d79c3fe577 | Gateways v1 full content read | `context-packs/gateways-v1-content.md` | ✅ COMPLETE (file exists) |
| a2d89c404dfa8e9b9 | Developers v1 full content read | `context-packs/developers-v1-content.md` | ❌ Output file not found |
| a508a62e906465ea7 | About v1 full content read | `context-packs/about-v1-content.md` | ❌ Output file not found |
| a3c404cb3c76ae374 | Delegators v1 full content read | `context-packs/delegators-v1-content.md` | ❌ Output file not found |

**Action needed**: Verify which agents are still running vs failed. Missing outputs that the project-state.md says are "running" may need to be re-spawned.

---

## WHAT CAN RUN NOW (READY LIST)

### AGENT-RUNNABLE NOW — No human decision needed

These tasks have all dependencies met and can be spawned immediately (subject to Confirm-Before-Spawn Rule):

| Task | Inputs | Output | Unblocks |
|---|---|---|---|
| Content scan — Orchestrators | docs.json + v2/orchestrators/ + content-scan.md | `context-packs/orchestrators-content-scan.md` | Phase 3 (Orchestrators) |
| Content scan — Developers | docs.json + v2/developers/ + content-scan.md | `context-packs/developers-content-scan.md` | Phase 3 (Developers) |
| Content scan — About | docs.json + v2/about/ + content-scan.md | `context-packs/about-content-scan.md` | Phase 3 (About) |
| Content scan — Delegators | docs.json + v2/delegators/ + content-scan.md | `context-packs/delegators-content-scan.md` | Phase 3 (Delegators) |
| Check B validation — Developers | canonical-developers-audience-design.md + design-canonical.mdx | `Prompts/.../developers/validation-check.md` | Phase 2 Developers unlocks cleanly |
| Check B validation — About | canonical-about-audience-design.md + design-canonical.mdx | `Prompts/.../about/validation-check.md` | Phase 2 About unlocks cleanly |
| Check B validation — Delegators | canonical-lp-token-audience-design.md + design-canonical.mdx | `Prompts/.../lp-token/validation-check.md` | Phase 2 Delegators unlocks cleanly |
| Phase 9 — Add field validators to frontmatter-taxonomy.js | frontmatter-taxonomy.js + framework enums | Updated frontmatter-taxonomy.js | Frontmatter validation for new fields |
| Phase 8 — Naming rubric Step 16 enrichment | section-naming.md + pageType.md + pagePurpose.md | Enriched section-naming.md | Phase 8 production readiness |
| Phase 5 — Brand & Copy Guide synthesis document | copy-rules.md + voice-rules.md | Synthesis doc | Content Pass Open gate |
| Phase 5 — Persona-level voice notes | voice-rules.md + framework Decision 4 | Updated voice-rules.md | Phase 6 voice accuracy |
| veracity-pass.md — Claim-type analysis + test runs | veracity-pass.md + veracity-library.md + sample Gateways pages | Test run outputs + learnings | veracity-pass.md approval for production |
| Phase 10 — page-template-contracts.md | snippets/templates/pages/ | `Frameworks/page-template-contracts.md` | Phase 10 scale readiness |
| Phase 10 — Golden examples | Existing approved pages (if any) | `v2/_workspace/references/content-pipeline/golden-examples/` | Phase 10 reference |
| Populate cross-tab-journeys.md | decisions/cross-tab-journeys.md stub + IA outputs | Populated cross-tab-journeys.md | Phase 12 foundation |
| Verify/re-spawn failed agents | project-state.md agent list | Missing context-pack files | Phase 1b unblocking |

### HUMAN-GATED NOW — Need human decision to proceed

| Decision needed | Blocks |
|---|---|
| Review Phase 1 IA — Orchestrators (Priority 1) | Phase 1b and IA lock for Orchestrators |
| Review Phase 1 IA — Gateways (Priority 2) | Phase 1b and IA lock for Gateways |
| Phase 0 structural decisions for all 5 tabs | Phase 3 for all tabs |
| Rewards placement decision — Delegators | Phase 3 — Delegators |
| S6 split decision — Developers | Phase 3 — Developers |
| About multi-audience model decision | Phase 3 — About |
| v1 vs v2 canonical path confirmation | Phase 3 — all tabs |
| Glossary authority per tab | Phase 3.5 — all tabs |
| Phase 12 trigger decision | Phase 12 |

---

## WHAT IS CURRENTLY BLOCKED AND WHY

| Task | Blocked by | Blocker type |
|---|---|---|
| Phase 1b — all tabs | Human has not reviewed/locked IA for any tab | HUMAN GATE |
| Phase 2.5 — all tabs | IA not locked for any tab | Depends on human IA lock |
| Phase 3 — Gateways | Phase 0 decisions not locked | HUMAN GATE (closest to ready) |
| Phase 3 — Orchestrators | Phase 0 decisions + Phase 2 scan missing | HUMAN GATE + Phase 2 scan (READY) |
| Phase 3 — Developers | Phase 0 + S6 split + Phase 2 scan | HUMAN GATE (structural decision) |
| Phase 3 — About | Phase 0 + multi-audience model + Phase 2 scan | HUMAN GATE (structural decision) |
| Phase 3 — Delegators | Phase 0 + rewards placement + Phase 2 scan | HUMAN GATE (structural decision) |
| Phase 3.5 — all tabs | Phase 3 not done | Depends on Phase 3 |
| Phase 4 — all tabs | Phase 3 not done | Depends on Phase 3 |
| Phase 4.5 — all tabs | Phase 4 not done + human approval | Depends on Phase 4 |
| Phase 6 — all tabs | Phases 3, 4, 4.5, 5 not done | Depends on multiple phases |
| Phase 7 — all tabs | Phase 6 + Phase 8 not done | Depends on Phase 6 |
| Phase 8 production | Phase 6 not done | Depends on Phase 6 |
| Phase 10 — all tabs | Phases 6+7+8 not done | Depends on multiple phases |
| Phase 11 — all tabs | First tab not 70%+ through Phase 6 | DEFERRED |
| Phase 12 | All tabs not through Phase 10 | Depends on Phase 11 |
| `context-packs/orchestrators-full-content.md` | Agent may still be running (a735b8...) | In-flight or failed |
| `context-packs/about-full-content.md` | Agent may still be running (a042f8...) | In-flight or failed |
| `context-packs/delegators-full-content.md` | Agent may still be running (aa3cbb...) | In-flight or failed |
| `context-packs/developers-v1-content.md` | Agent listed as running (a2d89c...) but file not found | In-flight or failed |
| `context-packs/about-v1-content.md` | Agent listed as running (a508a6...) but file not found | In-flight or failed |
| `context-packs/delegators-v1-content.md` | Agent listed as running (a3c404...) but file not found | In-flight or failed |

---

## TAB PRIORITY ORDER

Confirmed by human 2026-03-23:

1. Orchestrators
2. Gateways
3. Developers
4. About
5. Delegators

Per-Tab Flow: tabs are reviewed and locked one at a time. Priority 2 does not unlock until Priority 1 IA is locked.

---

## NOTES ON ACCURACY

- All file existence checks performed against the live filesystem as of 2026-03-23.
- project-state.md lists 10 agents as "running" — file existence was checked for each. Files for 4 agents exist (Gateways v2, Developers v2, Gateways v1, Orchestrators v1). Files for 6 agents are missing and those agents may have failed or not yet completed.
- blocking-items.md Item Table is currently empty — items are populated by humans during phase runs. This means no formal blocking items are logged yet. Structural decisions tracked in project-state.md are the operative blockers.
- decision-registry.md contains ONE locked decision (D-NAV-01). All other structural decisions are open.
- Tab Status Board (tab-status.md) shows all gates as empty (⬜) for all 5 tabs — consistent with this tree.
