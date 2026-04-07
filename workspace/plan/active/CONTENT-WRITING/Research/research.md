# Content Writing Pipeline — Plan

**Status**: Draft
**Branch**: `docs-v2-dev`
**Created**: 2026-03-19
**Goal**: Build a modular, testable page-review and rewrite co-authoring pipeline that ensures every docs page is accurate, audience-appropriate, well-voiced, correctly named, and consistently laid out.
**See also**: [collation.md](collation.md) — dated inventory of every repo resource with themes extracted.

---

## Problem Statement

The repo has ~24 skills, ~14 audit scripts, ~12 policies, ~6 frameworks, 12 page templates, and extensive registries — but:

1. **No orchestration layer** chains them into a single page-review flow
2. **Individual pieces don't reliably produce the needed result** — they need to be redefined and validated
3. **Manual orchestration** is required (the pipeline lives in the author's head)
4. **No feedback loop** — no way to test whether a skill's output meets the quality bar before it feeds the next step

---

## Pipeline Goal

Every page must be:
- **True & accurate** from core sources of truth
- **Audience-purposeful** — succeeds in its audience's outcome
- **Journey-clear** — provides information in the right order for the reader's journey
- **Voice-correct** — matches the audience and defined copy preferences
- **Section-named well** — governing-concept content descriptors, not literal labels
- **Homogeneous in style and layout** — uses page templates and composables mapped to data/information types

---

## Architecture: 3-Layer Pipeline

```
Layer 1: CONTEXT PACK    (per tab/group — run once, reused across pages)
Layer 2: PAGE REVIEW     (per page — draws from context pack)
Layer 3: APPLY & VALIDATE (per page — rewrite + quality gate)
```

Each layer has: **inputs**, **a skill**, **outputs**, and **acceptance criteria** (how we test it works).

---

## Phase A: Define the Pieces

### A1. Context Pack (Layer 1)

**What it does**: For a given tab/group, produces a single reference document that all page reviews in that group draw from.

**Inputs**:
- Navigation group path (from `docs.json`)
- `docs-guide/frameworks/content-system.mdx` (IA model, content layers)
- `v2/internal/overview/personas.mdx` (developer journey stages)
- Role-specific personas (e.g. `v2/gateways/personas.md`)
- `tools/config/accuracy-source-registry.json` (source-of-truth mappings)
- `docs-guide/policies/source-of-truth-policy.mdx` (canonical boundaries)
- Existing page frontmatter across the group (pageType, audience, purpose)

**Outputs** (file: `v2/_workspace/context-packs/{group-slug}.md`):
1. Group position in site IA (tab, group, subgroup, neighbours)
2. Audience + persona(s) for this group
3. Journey stage mapping (what reader knows before, needs to know after)
4. Required information inventory (what data/facts are needed)
5. Gap analysis (what's missing vs what exists in current pages)
6. Sources of truth for this group's claims

**Acceptance criteria**:
- [ ] A human reviewer can read the context pack and agree with the audience/journey mapping
- [ ] The information inventory covers all topics a reader in that journey stage would need
- [ ] Gap analysis correctly identifies pages that are missing or thin
- [ ] Sources listed are actually canonical (cross-check against `accuracy-source-registry.json`)

**Existing assets to draw from**:
- `docs-research-packet-generation` SKILL (packet generation pattern)
- `research-skill-workflow.mdx` (discovery boundaries, trust model)
- `research-review-packet-plan-template.md` (tranche structure)
- `usefulness-journeys.json` (journey definitions)

**Existing assets that are NOT sufficient** (need redesign):
- Current research skills produce reports but don't synthesize into a reusable context document
- Persona files exist but aren't connected to navigation groups

---

### A2. Page Review Brief (Layer 2)

**What it does**: For a single page, produces a structured review brief that diagnoses what needs to change.

**Inputs**:
- The page file (MDX content)
- The context pack for the page's group (from A1)
- `docs-guide/frameworks/page-taxonomy-framework.mdx` (12 pageTypes, 9 audiences, 15 purposes)
- `workspace/plan/complete/dep-COPYWRITING FRAMEWORK/copy-rules-SKILL.md` (voice rules, banned words/phrases)
- `v2/_workspace/research/content-naming.md` (section naming rubric)
- `docs-guide/policies/component-layout-decisions.mdx` (layout contract per pageType)
- `snippets/templates/pages/page-composition-framework.mdx` (page structure rules)

**Outputs** (structured review brief per page):
1. **Type assessment**: Current pageType vs recommended pageType
2. **Audience assessment**: Current audience/persona vs context-pack audience
3. **Journey assessment**: Does page content match reader's journey stage?
4. **Voice assessment**: Violations of copy rules (banned words, wrong tone, qualifiers)
5. **Naming assessment**: Section titles scored against content-naming rubric
6. **Information assessment**: Completeness vs context-pack information inventory
7. **Layout assessment**: Current layout vs approved layout for this pageType
8. **Priority ranking**: Which issues matter most for this page

**Acceptance criteria**:
- [ ] Review brief correctly identifies the pageType (validated against a human-labeled set)
- [ ] Voice violations are real (no false positives against `copy-rules-SKILL.md`)
- [ ] Naming scores match human scoring on a sample set
- [ ] Information gaps found actually exist (not already covered elsewhere on the page)
- [ ] Layout recommendations are valid per `component-layout-decisions.mdx`

**Existing assets to draw from**:
- `copy-rules-SKILL.md` (self-contained, works well as-is)
- `content-naming.md` (comprehensive rubric, ready to use)
- `page-taxonomy-framework.mdx` (taxonomy is solid)
- `tools/lib/docs-usefulness/prompts/*.js` (page-type-specific evaluation prompts)
- `tools/lib/copy-governance/banned-phrases.txt` + `banned-words.txt`

**Existing assets that are NOT sufficient**:
- `docs-change-review`, `mintlify-authoring-style-compliance`, `page-content-research-review`, `docs-copy` — these skills each do one fragment; need to be fused into a single coherent pass
- Review packet templates produce reports but not actionable rewrite instructions

---

### A3. Rewrite + Validate (Layer 3)

**What it does**: Takes the review brief and the original page, produces a rewrite, then validates it.

**Inputs**:
- Original page file (MDX)
- Review brief (from A2)
- Context pack (from A1)
- Page template for the target pageType (from `snippets/templates/pages/`)
- Component library (from `snippets/components/`)
- Golden examples (to be created — see A4)

**Outputs**:
1. Rewritten page file (MDX)
2. Validation report (pass/fail against acceptance criteria)
3. Diff summary (what changed and why, keyed to review brief items)

**Acceptance criteria**:
- [ ] Rewrite addresses every item in the review brief
- [ ] No banned words/phrases remain (automated check via `banned-phrases.txt`)
- [ ] Section titles pass the content-naming rubric (score >= 20/25)
- [ ] Frontmatter is complete and valid (pageType, audience, purpose, complexity)
- [ ] Layout matches `component-layout-decisions.mdx` for the pageType
- [ ] MDX renders without errors (Mintlify syntax validation)
- [ ] Page passes existing `quality-gates.mdx` checks
- [ ] Human spot-check: accuracy of claims against source of truth

**Existing assets to draw from**:
- 12 page templates in `snippets/templates/pages/`
- `page-composition-framework.mdx` (page structure rules)
- `component-layout-profile.json` (machine-readable layout config)
- `quality-gates.mdx` (layered quality gate map)
- `lint-copy.js` (automated copy validation)

---

### A4. Reference Bundles (supporting material for skills)

Skills need curated, self-contained reference material — not pointers to 26KB governance docs.

**To create**:

1. **Per-audience "don'ts" file** — extracted from copy governance, audience-specific. Gateway operators get different don'ts than delegators.
   - Source: `copy-rules-SKILL.md` + `Copywriting Governance Framework.md`
   - Output: `v2/_workspace/references/donts-{audience}.md`

2. **Golden examples per pageType** — 1-2 exemplar pages that represent "what good looks like"
   - Curated manually from best existing pages or written fresh
   - Output: `v2/_workspace/references/golden-examples/{pageType}.mdx`

3. **Condensed rules per skill** — each skill gets a `references/` directory with only the rules it needs, pre-extracted
   - Not duplicating governance docs; extracting the actionable subset

4. **Source-of-truth cheat sheets per group** — which repos, contracts, APIs, Discord channels are authoritative for each docs group
   - Source: `accuracy-source-registry.json` + human curation
   - Output: embedded in context packs (A1)

---

## Phase B: Build the Pipeline

### B1. Build Context Pack Skill

- [ ] Define the skill contract (inputs, outputs, format)
- [ ] Implement the skill (single invocation produces the context pack file)
- [ ] Test on pilot group (gateways/guides)
- [ ] Human review of pilot output
- [ ] Iterate until acceptance criteria pass

### B2. Build Page Review Skill

- [ ] Define the skill contract
- [ ] Implement: fuse copy-rules + naming-rubric + taxonomy + layout checks into one pass
- [ ] Test on 3-5 pages from pilot group
- [ ] Compare review brief against human review of same pages
- [ ] Iterate until acceptance criteria pass

### B3. Build Rewrite Skill

- [ ] Define the skill contract
- [ ] Implement: consumes review brief, applies template, produces rewrite
- [ ] Create golden examples for at least 3 pageTypes (how_to, overview, reference)
- [ ] Test on 3-5 pages from pilot group
- [ ] Human review of rewrites against review briefs
- [ ] Iterate until acceptance criteria pass

### B4. Wire the Pipeline

- [ ] Create orchestration script/skill that runs Layer 1 → Layer 2 → Layer 3 in sequence
- [ ] Add checkpoint/approval gates between layers (human can review context pack before page reviews run)
- [ ] Add batch mode (run all pages in a group)

---

## Phase C: Test & Validate

### C1. Acceptance Test Framework

Each piece needs its own test, not just an end-to-end check.

| Layer | Test Type | Method |
|---|---|---|
| Context Pack | Human agreement test | Generate pack, have human rate accuracy of audience/journey/gap analysis on 1-5 scale |
| Page Review | Precision/recall test | Generate briefs for 10 pages, compare against human review. Measure: false positives (flagged issues that aren't real) and false negatives (missed real issues) |
| Rewrite | Before/after quality test | Score original and rewrite against the same rubric. Rewrite must score higher on every dimension |
| End-to-end | Pilot group test | Run full pipeline on one group, measure: pages improved, pages made worse, pages unchanged |

### C2. Automated Validation Checks

These can run without human review:

- [ ] **Banned words check**: `grep` against `banned-words.txt` and `banned-phrases.txt` — zero tolerance
- [ ] **Frontmatter completeness**: All required fields present and valid against taxonomy
- [ ] **Section naming score**: Automated scoring against content-naming rubric (score >= 20/25)
- [ ] **MDX syntax validation**: Mintlify renders without errors
- [ ] **Layout compliance**: Components used match `component-layout-profile.json` for the pageType
- [ ] **Link integrity**: No broken internal links introduced

### C3. Human Validation Checks

These require a human:

- [ ] **Accuracy**: Claims match source of truth
- [ ] **Journey coherence**: Page makes sense in the reader's journey (requires reading the context pack + page together)
- [ ] **Voice**: "Does this sound right for this audience?" — subjective but critical
- [ ] **Information completeness**: Nothing important is missing

### C4. Iteration Protocol

When a test fails:
1. Identify which layer produced the bad output
2. Check if the input to that layer was correct (garbage in → garbage out)
3. If input was good, fix the skill
4. If input was bad, fix the upstream layer
5. Re-run from the fixed layer forward
6. Do NOT re-run the entire pipeline if only one layer failed

---

## Existing File Map

All files in the repo that relate to this pipeline, organized by which layer they serve.

### Layer 1 (Context Pack) inputs
| File | Purpose | Status |
|---|---|---|
| `docs-guide/frameworks/content-system.mdx` | IA model, content layers | Ready |
| `v2/internal/overview/personas.mdx` | Developer journey stages | Ready |
| `v2/gateways/personas.md` | Gateway operator personas (5 detailed) | Ready |
| `tools/config/accuracy-source-registry.json` | Source-of-truth mappings | Ready |
| `docs-guide/policies/source-of-truth-policy.mdx` | Canonical boundaries | Ready |
| `tools/config/usefulness-journeys.json` | Journey definitions | Ready |
| `docs-guide/tooling/research-review-packet-plan-template.md` | Tranche structure pattern | Pattern reference |
| `docs-guide/frameworks/research-skill-workflow.mdx` | Discovery boundaries | Pattern reference |

### Layer 2 (Page Review) inputs
| File | Purpose | Status |
|---|---|---|
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | 12 pageTypes, 9 audiences, 15 purposes | Ready |
| `workspace/plan/complete/dep-COPYWRITING FRAMEWORK/copy-rules-SKILL.md` | Voice rules, banned words/phrases | Ready |
| `v2/_workspace/research/content-naming.md` | Section naming rubric (22KB) | Ready (updated today) |
| `docs-guide/policies/component-layout-decisions.mdx` | Layout contract per pageType | Ready |
| `snippets/templates/pages/page-composition-framework.mdx` | Page structure rules | Ready (updated today) |
| `tools/lib/copy-governance/banned-phrases.txt` | Banned phrases list | Ready |
| `tools/lib/copy-governance/banned-words.txt` | Banned words list | Ready |
| `tools/lib/docs-usefulness/prompts/*.js` | Page-type evaluation prompts | Evaluate for reuse |

### Layer 3 (Rewrite) inputs
| File | Purpose | Status |
|---|---|---|
| `snippets/templates/pages/*.mdx` | 12 page templates | Ready |
| `tools/config/component-layout-profile.json` | Machine-readable layout config | Ready |
| `docs-guide/policies/quality-gates.mdx` | Quality gate map | Ready |
| `tools/scripts/lint-copy.js` | Automated copy validation | Ready |
| `docs-guide/component-registry.json` | Component inventory (246KB) | Ready |
| `docs-guide/component-usage-map.json` | Component usage mapping (418KB) | Ready |

### Reference material (to create)
| File | Purpose | Status |
|---|---|---|
| `v2/_workspace/references/donts-{audience}.md` | Per-audience don'ts | To create |
| `v2/_workspace/references/golden-examples/{pageType}.mdx` | Exemplar pages | To create |
| Source-of-truth cheat sheets per group | Embedded in context packs | To create |

### Existing skills (evaluate, retire, or absorb)
| Skill | Relevance | Action |
|---|---|---|
| `docs-research-packet-generation` | Pattern for context pack generation | Absorb pattern into Layer 1 |
| `docs-source-verification` | Fact-checking | Absorb into Layer 1 gap analysis |
| `docs-change-review` | Fragment of Layer 2 | Replace with unified Page Review |
| `docs-copy` | Fragment of Layer 2 | Replace with unified Page Review |
| `mintlify-authoring-style-compliance` | Fragment of Layer 2 | Replace with unified Page Review |
| `page-content-research-review` | Fragment of Layer 2 | Replace with unified Page Review |
| `style-mdx-quality-fix-playbook` | Fragment of Layer 3 | Absorb into Rewrite skill |
| `seo-frontmatter-generation` | Utility | Keep as standalone post-step |
| `glossary-terminology-generation` | Utility | Keep as standalone |

### Reports (existing review packets for reference)
| Location | Content |
|---|---|
| `workspace/reports/gateway-guides-review/2026-03-17-copy-review-packet/` | Gateway guides copy + authoring review |
| `workspace/reports/orchestrator-guides-review/2026-03-16-copy-review-packet/` | Orchestrator guides copy + authoring review |
| `workspace/reports/copy-governance/` | Copy framework audit reports |
| `workspace/reports/page-audits/` | Page-level audit reports |

---

## External Research Sources

### Shtuka Research — Livepeer Data Geography (v1)

**Source**: `https://github.com/shtukaresearch/livepeer-data-geography/tree/v1`
**Type**: Independent ecosystem analysis
**Relevance**: Role taxonomy, audience definitions, developer/gateway fuzzy boundary

**Summary**: Maps the Livepeer ecosystem into 7 roles across 5 entity types (Foundation, Gateway, Investor-Delegator, Orchestrator-Delegate, SPE). Uses a data geography model that rates information accessibility 0-5 per role and organises needs into 6 views (Demand, Supply, Delegator, Staking, Market, Governance).

**Key insight for audience definitions**: The "builder" classification is explicitly fuzzy. Shtuka defines three categories:
1. Teams building apps that consume Livepeer through third-party gateways → **outside the network** (our `builder` / formerly `platform-builder`)
2. Teams consuming the network directly → **effectively functioning as a gateway** (our `developer` → `gateway-operator` pipeline)
3. Smart contract/tooling builders → **adopt the perspective of whichever roles their tool serves**

This confirms the developer → gateway-operator graduation path is a real pattern, not just a docs routing problem. Builders who consume via API never touch the network; developers who build custom pipelines often end up running their own gateway.

**Gateway role definition**: "Aggregate customer requests for video transcoding and AI workloads, and distribute jobs to Orchestrators." Key responsibilities: job distribution, orchestrator selection, performance monitoring, cost optimisation. Most profitable gateways are Livepeer Inc. (Studio, Agent SPE).

**Data gaps identified by Shtuka** (relevant to our content pipeline):
- Protocol-level fault mitigation guidance for AI workloads
- Transparent orchestrator performance data, reliability metrics
- Extended capability reporting for informed gateway decision-making
- Job tagging infrastructure for granular demand tracking

**Files of note**:
- `roles/gateway.md` — gateway role + platform builder responsibilities
- `roles/orchestrator-delegate.md` — dual compute + governance role
- `roles/investor-delegator.md` — capital + yield role
- `model.md` — overall data geography model
- `resource-table.md` — data availability ratings per role

---

## Pilot

**Pilot group**: Gateways → Guides (already has persona research and recent review packets)

**Why**: Richest existing context (5 detailed personas, recent copy review, active contributor attention)

**Pilot sequence**:
1. Build Context Pack for gateways/guides → human review
2. Build Page Review briefs for 3 gateway guide pages → compare to existing review packets + human review
3. Build Rewrite for 1 gateway guide page → human review
4. Iterate until all 3 layers produce acceptable output
5. Then run full gateways/guides group
6. Then generalize to other groups

---

## What NOT to Build

- More audit scripts (14 exist, producing reports nobody acts on)
- More policy documents (12 exist, they're thorough)
- More skills that work in isolation — build 3 that compose
- A custom orchestration framework — a simple sequential script with approval gates is enough
