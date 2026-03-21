# Content Writing Pipeline

**Status**: Active — Phase 1 framework in progress
**Branch**: `docs-v2-dev`
**Framework decisions**: [Frameworks/content-pipeline-framework.md](Frameworks/content-pipeline-framework.md)
**Execution plan**: [plan-canonical.md](plan-canonical.md)
**Governance index**: [index-canonical.md](index-canonical.md)

---

## Overview

Three-level pipeline for reviewing and writing Livepeer documentation pages.

Each level has a defined input, a main task, and a structured output. Human checkpoint between each level — nothing proceeds without explicit approval. All levels require the framework to be locked before use (Phase 0).

**Two operating paths:**

- **Review path** — existing page: Level 1 → Pass A (REVIEW) → ⏸ → Pass B → ⏸ → apply
- **Write path** — new or rewrite page: Level 1 → Pass A (WRITE/REWRITE) → ⏸ → Pass B → ⏸ → apply

**Current pilot scope**: `gateways/guides` and `orchestrators` — richest existing context. All other tabs are post-pilot.

---

## Phase 0 — Framework Lock

**Main task**: All framework definitions agreed and locked before any pipeline operation begins. This is not a pipeline step — it is a prerequisite. Nothing in Level 1–2 is reliable until all required files are locked.

### Framework files required

| File                                                          | What it defines                                                             | Status                             |
| ------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------- |
| `Frameworks/pageType.md`                                      | 7 pageTypes + pageVariant rules + governance table                          | ✅ Locked                          |
| `Frameworks/pagePurpose.md`                                   | 15 purpose values + information type mapping                                | ✅ Locked                          |
| `Frameworks/information-type.md`                              | 9 information types (section-level) + veracity standards per type           | ✅ Locked                          |
| `Frameworks/veracity.md`                                      | veracityStatus enum (3 values) + veracity standard per information type     | ✅ Locked                          |
| `Frameworks/veracity-library.md`                              | 45-source authoritative sources registry                                    | ✅ Locked                          |
| `Frameworks/complexity.md`                                    | complexity (3) + lifecycleStage (7) — calibration fields                    | ✅ Locked                          |
| `Frameworks/industry.md`                                      | 9 industry tokens + 8 niche tokens — voice register + terminology           | 🔄 DRAFT — awaiting lock           |
| `Prompts/voice-rules.md`                                      | Voice rules per audience (7 audiences) — register, tone, don'ts             | 🔄 DRAFT — built ahead of sequence |
| `Prompts/section-naming.md`                                   | Section naming rubric — scoring criteria, hard rules, per-pageType guidance | 🔄 PARTIAL                         |
| `v2/_workspace/references/content-pipeline/08a-ia-per-tab.md` | IA per tab — canonical section vocabulary, audience journey, page groups    | 🔄 DRAFT — awaiting checkpoint     |
| _Page templates per pageType_                                 | Required sections, allowed components, forbidden patterns per pageType      | ⬜ Not started — Step 11           |

### Outcome

All framework files locked and internally consistent. The pipeline may begin.

---

## Level 1 — Tab Map

**Main task**: Structural audit of a tab. Scan the tab's file system and docs.json navigation, classify every page against the taxonomy, map the audience journey from entry to depth, and identify structural gaps.

**When to use**: At the start of any content pipeline run for a full tab. Required before any Level 2 operation on pages within that tab. Do not run Level 2 on any page without a tab map for its parent tab.

### Frameworks required

| Framework file                                                | What it provides                                                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `Frameworks/pageType.md`                                      | Classification values for every page                                       |
| `Frameworks/pagePurpose.md`                                   | Purpose classifications                                                    |
| `index-canonical.md`                                          | All locked enums — pageType, audience, purpose, lifecycleStage, complexity |
| `v2/_workspace/references/content-pipeline/08a-ia-per-tab.md` | Canonical section vocabulary — what positions should exist in the tab      |

### Research / source material required

| Source           | What to load                                                     |
| ---------------- | ---------------------------------------------------------------- |
| `docs.json`      | Tab's navigation group — every navigated path                    |
| `v2/[tab]/`      | File system — every file under the tab root                      |
| Page frontmatter | Current pageType, audience, purpose per page (read at scan time) |

### Phases

1. Scan the tab root — classify every file and folder (canonical, stray, divergence, missing)
2. Read docs.json navigation — cross-reference against file system (broken paths, orphaned files)
3. Classify every navigated page against the taxonomy — aligned, wrong-type, missing-fields, misplaced, stale
4. Map the audience journey — linear path (entry to activation) and on-demand paths (guides, reference, resources)
5. Gap analysis — missing pages, misclassified pages, content gaps
6. Output tab map document

### Outcome files

| File    | Path                             |
| ------- | -------------------------------- |
| Tab map | `v2/[tab]/_workspace/tab-map.md` |

### Prompt

`Prompts/level-1-tab-map.md`

**⏸ Human checkpoint — tab map reviewed and approved before Level 2 begins**

---

## Level 2 Pass A — Content Review / Write

**Main task**: Content layer only — audience fit, purpose, information types, voice, and veracity. No MDX formatting, no component placement — that is Pass B's job.

**When to use**: Per page, after tab map is approved. Requires a tab map for the parent tab.

### Three modes

| Mode      | When                                                         | Output                                                    |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| `REVIEW`  | Page exists; audit and produce a verdict with specific fixes | Review report: verdict + flagged issues in priority order |
| `WRITE`   | Page does not exist                                          | Full content layer in plain markdown, no MDX              |
| `REWRITE` | REVIEW verdict was REWRITE REQUIRED                          | Full content layer in plain markdown, no MDX              |

### Frameworks required

| Framework file                   | What it provides                                                        |
| -------------------------------- | ----------------------------------------------------------------------- |
| `Frameworks/pageType.md`         | Permitted information types per pageType; what each type governs        |
| `Frameworks/pagePurpose.md`      | Purpose → information type mapping; expected reader outcome per purpose |
| `Frameworks/information-type.md` | Type definitions; veracity standard required per type                   |
| `Frameworks/veracity.md`         | Veracity standards; when to flag vs block                               |
| `Frameworks/veracity-library.md` | Authoritative sources — what to cite per claim type                     |
| `Prompts/voice-rules.md`         | Audience-specific: register, terminology, don'ts, prohibited phrases    |
| `Frameworks/complexity.md`       | Assumed knowledge at each complexity level; lifecycleStage calibration  |

### Research / source material required

| Source          | What to load                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------- |
| Tab map         | `v2/[tab]/_workspace/tab-map.md` — required; provides PREV_PAGE, NEXT_PAGE, journey position |
| Current page    | Full page content (REVIEW / REWRITE modes)                                                   |
| Primary sources | Authoritative sources for factual claims expected on this page — named in context block      |

### Phases

1. Pre-flight — confirm brief: purpose stated in one sentence, adjacency coherent, scope is single
2. Read — read current page in full (REVIEW) or confirm brief is actionable (WRITE)
3. Audience fit — knowledge level vs complexity, persona fit, register match
4. Purpose check — does page structure lead the reader to the stated outcome?
5. Information type audit — per section: identify type, check permitted for pageType, apply veracity standard
6. Voice check — universal blocking rules, opening order, paragraph discipline, audience-specific voice
7. Veracity check — flag all unverifiable claims with `{/* REVIEW: [claim] — verify with: [source] */}`
8. Structure check — opening orientation (all pageTypes), section sequence and handoffs, no orphan sections

### Outcome files

| File            | Path                                                           | Mode            |
| --------------- | -------------------------------------------------------------- | --------------- |
| Review report   | `v2/_workspace/context-packs/[group]/reviews/[page]-review.md` | REVIEW          |
| Written content | `v2/_workspace/context-packs/[group]/writes/[page]-content.md` | WRITE / REWRITE |

### Prompt

`Prompts/level-2-pass-a-content.md`

**⏸ Human checkpoint — content reviewed and approved before Pass B begins**

---

## Level 2 Pass B — Layout / Style

**Main task**: Apply structure and MDX formatting to approved Pass A content. Does not rewrite content — that is Pass A's job. Applies the pageType template, selects and places MDX components, formats the page, scores section names against the naming rubric, and writes frontmatter.

**When to use**: After Pass A content is approved by the human. Pass B does not run on unapproved content.

### Frameworks required

| Framework file                             | What it provides                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| `Frameworks/pageType.md`                   | Component palette per pageType; forbidden components; template mapping     |
| `Frameworks/content-pipeline-framework.md` | Locked enums for all 10 frontmatter fields                                 |
| `Prompts/section-naming.md`                | Naming rubric — scoring criteria (0–25), hard rules, per-pageType patterns |
| `index-canonical.md`                       | Locked enums reference                                                     |
| _Page templates per pageType_              | Required sections, section order, allowed components — Step 11 (pending)   |

### Research / source material required

| Source         | What to load                                                                    |
| -------------- | ------------------------------------------------------------------------------- |
| Pass A output  | Approved content from Pass A — required                                         |
| Tab map        | `v2/[tab]/_workspace/tab-map.md` — for frontmatter context and journey position |
| Component docs | `docs-guide/` MDX component reference for correct syntax                        |

### Phases

1. Template selection — identify correct template for pageType + pageVariant
2. Section mapping — match Pass A content sections to template required sections; flag any orphan sections
3. Component selection — per section: select appropriate components, apply placement rules, flag forbidden patterns
4. Frontmatter — write all 10 schema fields (pageType, pageVariant, audience, persona, purpose, industry, niche, complexity, lifecycleStage, veracityStatus)
5. Naming check — score every heading (## and ###) against naming rubric; correct anything below 20/25
6. Render validation — MDX structure parses clean; no component rule violations; UK English throughout

### Outcome files

| File           | Path                                                            |
| -------------- | --------------------------------------------------------------- |
| MDX-ready page | `v2/_workspace/context-packs/[group]/rewrites/[page]-final.mdx` |

### Prompt

`Prompts/level-2-pass-b-layout.md`

**⏸ Human checkpoint — final review before applying to file**

---

## Human Checkpoints

| After                  | Human reviews                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| Level 1 — Tab Map      | Tab map accurate? Journey maps to real reader needs (not just existing structure)? Gap analysis complete? |
| Pass A — REVIEW        | Verdict correct? Issues accurately identified? Not over-flagged? Priority order right?                    |
| Pass A — WRITE/REWRITE | Content complete? Audience fit? Voice correct? All veracity flags addressed or acknowledged?              |
| Pass B                 | Template applied correctly? Naming scores acceptable? MDX renders clean? Frontmatter complete?            |
| Before file apply      | Is this the version that goes in the repo? No outstanding REVIEW flags at very-high veracity?             |

---

## Veracity Flags

Claims the agent cannot verify are flagged inline in Pass A output:

```
{/* REVIEW: [specific claim] — verify with: [named source from veracity-library.md] */}
```

Human resolves flags before Pass B. Unresolved flags at very-high veracity standard (`factual`, `technical`, `procedural`, `change`) block publication.

---

## Output Location Map

All pipeline outputs land in `v2/_workspace/context-packs/`:

```
v2/_workspace/context-packs/
  [tab]-tab-map.md                          ← Level 1 output
  [group]/
    reviews/[page]-review.md                ← Pass A REVIEW output
    writes/[page]-content.md                ← Pass A WRITE/REWRITE output
    rewrites/[page]-final.mdx               ← Pass B output
```

Outputs are staging only — they are not applied to the live file until human approves.
