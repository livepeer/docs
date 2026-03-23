# Livepeer Docs — Content Pass
## Pass A · Content Layer Review / Write

**Your task**: Execute the phases below in order and produce the output at the end. Do not summarise instructions. Do not update the brief. Begin the pre-flight check immediately.

**Content layer only.** This pass handles audience fit, purpose, information types, voice, veracity, and section structure. Do not apply MDX components, frontmatter, or layout — that is Pass B.

---

## Context Block

_Fill all fields before running. Vague answers produce vague output._

```
TAB:              [tab name]
SECTION:          [e.g. guides/payments-and-pricing]
PAGE_PATH:        [e.g. v2/gateways/guides/payments-and-pricing/clearinghouse.mdx]
MODE:             [REVIEW / WRITE / REWRITE / AUDIT]

PAGE_TYPE:        [concept / tutorial / guide / instruction / navigation / reference / resource]
PAGE_VARIANT:     [overview / specification / compendium / changelog / quickstart / setup / knowledge-hub / none]
AUDIENCE:         [gateway / orchestrator / developer / builder / delegator / community / founder]
PERSONA:          [persona name from Phase 1 output — or "none" if not applicable]
PURPOSE:          [orient / explain / learn / choose / evaluate / start / build / configure / operate /
                   troubleshoot / verify / integrate / optimise / reference / update]
LIFECYCLE_STAGE:  [discover / evaluate / setup / build / operate / troubleshoot / optimise]
COMPLEXITY:       [beginner / intermediate / advanced]

PREV_PAGE:        [page name — one line: what it covers, what reader leaves able to do]
NEXT_PAGE:        [page name — one line: what it covers, what reader is expected to arrive knowing]

PHASE_1_OUTPUT:   [path to audience-design output for this tab]
TAB_MAP:          [path to v2/[tab]/_workspace/tab-map.md — or "none" if not yet created]
PRIMARY_SOURCES:  [authoritative sources for factual claims on this page, e.g. go-livepeer GitHub, API spec]
```

### Pre-flight dependency check

Confirm all applicable items before running. Items marked (WRITE only) are required for WRITE mode; all others apply to all modes.

- [ ] Tab map exists (`v2/[tab]/_workspace/tab-map.md`)
- [ ] Phase 1 canonical audience design approved
- [ ] Terminology locked (Phase 3.5 complete)
- [ ] Voice rules confirmed for this tab's audience (`workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` covers all 7 audiences: gateway, orchestrator, developer, builder, delegator, community, founder)
- [ ] Section naming rubric loaded
- [ ] AUDIT mode complete — Phase 4 decision (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP) recorded for this page
- [ ] Page brief approved (WRITE mode only)
- [ ] Feedback routing map exists (`decisions/feedback-routing-map.md`)

---

## Pre-flight — Confirm the Brief is Complete

Before running any phase, check all three:

**1. Can the purpose be stated in one sentence?**
`This page lets the [AUDIENCE] [concrete action].`
If not: PURPOSE field is wrong or the page scope is too broad. Stop and fix the brief.

**2. Does the adjacency make sense?**
The reader arrives from PREV_PAGE knowing enough to use this page. The reader leaves ready for NEXT_PAGE. If there is a gap: note it — the page may need an orientation sentence, or the section order in Phase 2 output is wrong.

**3. Is this page one scope?**
One purpose = one page. If PURPOSE requires two distinct reader outcomes, the page needs splitting. Stop and flag before proceeding.

Record answers. Proceed only when all three pass.

---

## Phase 1 — Read

**REVIEW / REWRITE:** Read the current page in full.
- Note what the page claims to do (description, introduction)
- Note what the page actually does (content per section)
- Record existing frontmatter values

**WRITE:** Confirm the brief is actionable.
- Every context block field is filled and specific
- Primary sources are named for expected factual claims
- Reader journey is clear (prev → this → next)

Do not begin content analysis until Phase 1 is complete.

---

## Phase 2 — Audience Fit

### 2.1 Knowledge level

Does the page's language match COMPLEXITY?

- `beginner` — no assumed prior knowledge of the domain
- `intermediate` — familiar with the domain, not yet operational
- `advanced` — deep operational experience; reads for precision

Flag: sections that assume too much (above complexity) or over-explain (below complexity). Quote the specific text.

### 2.2 Persona fit

Load the PHASE_1_OUTPUT for this tab. Find the persona matching PERSONA in the Phase 1 personas table.

Does every major section serve this persona's arriving question and motivation? Check specifically:
- Does the page address the persona's entry state (what they arrive knowing)?
- Does the page deliver the persona's exit state (the concrete action or decision from Phase 1)?
- Is the reader question for this page's section (from Phase 1 section structure) answered?

Flag: sections that serve a different persona, sections that ignore the stated persona's primary concern, and content that assumes knowledge the persona doesn't arrive with. Quote the specific text.

### 2.3 Register

Does the page's writing register match the audience?

**Base voice** (universal — applies to all audiences and pages):
- Voice identity: knowledgeable colleague — not a professor, not a marketer
- Transparent: state what works, what doesn't, what's missing. No handwaving.
- Candid: honest about tradeoffs and costs. Do not oversell.
- Performant: dense with useful information. No filler, no corporate padding.
- Inclusive: accessible to people who are not already Livepeer insiders.
- Second person ("you") for instructions. Third person for system descriptions. Never first person plural ("we believe", "our network") — exception: Community tab only.

**Audience-specific register**: Load `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` and apply the section for AUDIENCE. Audience-specific rules extend the base voice; they do not replace it.

Flag register mismatches. Quote the specific text and write the corrected version.

---

## Phase 3 — Purpose Check

Does the page deliver on its stated PURPOSE?

| Purpose | Reader can do this after reading |
|---|---|
| `orient` | Navigate to the correct next destination |
| `explain` | Describe how the mechanism works |
| `learn` | Apply the terminology or concept correctly in context |
| `choose` | Make a specific named decision between options |
| `evaluate` | Assess fit of this option against their situation |
| `start` | Complete a first successful run |
| `build` | Create or implement a named thing |
| `configure` | Apply specific parameters or settings correctly |
| `operate` | Run and manage the system in practice |
| `troubleshoot` | Identify and resolve a named failure mode |
| `verify` | Confirm correct state or expected output |
| `integrate` | Connect this system with a named external system |
| `optimise` | Improve a named metric by a concrete method |
| `reference` | Look up a specific fact, value, or specification |
| `update` | Know what changed and what action is required |

**Check**: Does the section sequence lead the reader to that outcome? Is the outcome reachable before the end of the page?

**REVIEW**: What specifically blocks the reader from achieving the purpose? Name the section or gap.
**WRITE**: Confirm the planned structure delivers the purpose before writing.

---

## Phase 4 — Information Type Audit

For each section, identify the information type and check it is permitted for the PAGE_TYPE.

| Section heading | Information type | Permitted for PAGE_TYPE? | Veracity standard |
|---|---|---|---|

**Information types and veracity standards:**

| Type | What it is | Veracity |
|---|---|---|
| `factual` | Stated facts, numbers, specs, on-chain values | Very high — every claim must be citable |
| `technical` | Code, commands, API calls, config syntax | Very high |
| `procedural` | Sequential steps the reader follows | Very high |
| `change` | Changelog entries, release notes | Very high |
| `evaluative` | Comparisons, assessments, trade-offs | High — evidence must be real and sourced |
| `structural` | Site navigation, section maps, routing | High |
| `analytical` | Reasoning, trade-off analysis, implications | Medium — reasoning must be internally consistent |
| `conceptual` | How a mechanism works (model, not code) | Medium |
| `narrative` | Framing, context, voice, transitions | Lower — embedded factual claims inherit factual standard |

**Permitted primary types by PAGE_TYPE:**

| PAGE_TYPE | Primary | Secondary |
|---|---|---|
| `concept` | conceptual, narrative, analytical | factual |
| `instruction` | procedural, technical | factual, structural |
| `guide` | analytical, evaluative, conceptual, narrative | factual |
| `tutorial` | procedural, technical, narrative | — |
| `reference` | factual, technical, structural, change | — |
| `resource` | structural, evaluative, narrative | — |
| `navigation` | structural, narrative | — |

Flag: any section whose information type doesn't fit the PAGE_TYPE. These are structural mismatches — not content issues.

---

## Phase 4b — Information Type → Component Suggestions

**Reference only. This section does not make layout decisions.** It maps each information type to components from `docs-guide/config/component-registry.json` (117 components, 6 categories) that are typically useful when that information type is the dominant type in a section. Component selection is Pass B work. Use this table in WRITE mode to anticipate structure; use it in REVIEW mode to flag component mismatches.

> **Annotation**: `tools/config/component-layout-profile.json` uses deprecated pageType names (`landing`, `how_to`, `overview`, etc.) that do not align with the canonical 7-type schema (`navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`). Do not treat `component-layout-profile.json` as authoritative for component selection until it is updated to use canonical type names. Cross-reference with the canonical schema before using any component mapping from that file.

| Information Type | Typical Components | When to Consider | Notes |
|---|---|---|---|
| `factual` | `StyledTable`, `DynamicTable`, `SearchTable`, `TableComponent`, `ValueResponseField`, `CustomResponseField`, `ResponseFieldGroup`, `LatestVersion` | Dense parameter tables, spec comparisons, version numbers, on-chain values | Tables preferred over prose lists; code blocks for exact syntax |
| `technical` | `CodeComponent`, `CustomCodeBlock`, `ComplexCodeBlock`, `CodeSection`, `ResponseFieldAccordion`, `ResponseFieldExpandable`, `ValueResponseField`, `CustomResponseField` | Code samples, API contracts, config schemas, CLI commands | Language-tagged code blocks are mandatory; use expandable variants for long blocks |
| `procedural` | `StyledSteps`, `StyledStep`, `ListSteps`, `StepList`, `StepLinkList` | Numbered installation steps, setup procedures, operational runbooks | Sequential steps require `Steps` component family; do not use bullet lists for procedures |
| `conceptual` | `ScrollableDiagram`, `DisplayCard`, `BorderedBox`, `AccordionLayout`, `AccordionGroupList` | Mental model diagrams, mechanism explanations, concept hierarchies | Diagrams and prose together; avoid code blocks in purely conceptual sections |
| `analytical` | `StyledTable`, `DynamicTable`, `SearchTable`, `AccordionGroupList`, `AccordionLayout` | Trade-off comparisons, decision frameworks, diagnostic reasoning | Structured comparison tables; accordion for branching decision paths |
| `evaluative` | `StyledTable`, `DynamicTable`, `SearchTable`, `DisplayCard`, `BorderedBox` | Benchmarks, cost breakdowns, criteria frameworks, scenario analysis | Evidence must be real and sourced; do not use `Quote` or `FrameQuote` for data |
| `structural` | `GotoCard`, `GotoLink`, `InteractiveCard`, `InteractiveCards`, `ShowcaseCards`, `RefCardContainer`, `QuadGrid`, `GridContainer` | Navigation hubs, section overviews, taxonomy maps, routing surfaces | Card grids for spatial navigation; minimal prose; no instructional content |
| `change` | `UpdateList`, `UpdateLinkList`, `StyledTable`, `AccordionGroupList` | Changelogs, release notes, deprecation notices, migration guides | Version/date anchoring is mandatory; severity labels (breaking/non-breaking) in the structure |
| `narrative` | `HeroOverviewContent`, `PortalHeroContent`, `FrameQuote`, `Quote`, `BorderedBox`, `CustomCallout` | Value propositions, ecosystem framing, motivational context, benefit-forward openers | Narrative sections precede factual/procedural content on the same page; embedded factual claims still require very-high veracity standard |

---

## Phase 5 — Voice Check

### 5.1 Universal blocking rules

Check every sentence. These are hard blocks regardless of audience — zero tolerance.

**Banned words** (remove; do not soften):
`effectively, essentially, basically, meaningful, significant` (as intensifier), `real` (as intensifier), `various, several, obviously, clearly`

**Banned phrases:**
- "This section covers" / "This page covers / explains / walks you through"
- "Understanding X is essential"
- "It is important to note" / "it should be noted"
- "As mentioned above"
- "among other factors" / "and so on" / "etc."
- "rather than" (state the positive directly)
- "what it takes" (state the requirements directly)
- "can generate" / "may produce" in value claims (assert directly or delete)

**Banned constructions:**
- `not [X]` in value statements → rewrite as a positive assertion
- `if [condition]` in body prose → resolve the condition or move to prerequisites (exception: code blocks, exact config conditions)
- `This page [verb]` → delete self-reference, open with content
- `can/may [verb]` in value claims → assert directly or delete

**Language:** UK English throughout.
Common corrections: optimize→optimise, organize→organise, behavior→behaviour, color→colour, analyze→analyse, labeled→labelled, canceled→cancelled

### 5.2 Opening order

- [ ] Opens with the value or outcome — not the mechanism, not a caveat
- [ ] First sentence states the most useful fact for this audience at this lifecycle stage
- [ ] No conditional in sentence 1 (`if you have`, `depending on your setup`, `whether you`)
- [ ] No question as opener

### 5.3 Paragraph discipline

- [ ] One paragraph, one job (label the job in three words; if you can't, split the paragraph)
- [ ] Lead sentence states the fact; remaining sentences extend or evidence it
- [ ] Final sentence ends on a fact, number, or next step — never a hedge or restatement
- [ ] Tables stand alone — no prose restating a table row
- [ ] High-value commands and URLs visible in body copy, not buried in accordions or notes

### 5.4 Audience-specific voice

Apply the AUDIENCE section from `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`.

`voice-rules.md` (Status: Locked) covers all 7 audiences: `gateway`, `orchestrator`, `developer`, `builder`, `delegator`, `community`, `founder`. Load the section matching AUDIENCE and apply it. There are no audiences without defined voice rules.

**Output**: Per-rule verdict: PASS / FAIL / PARTIAL.
For every FAIL or PARTIAL: quote the exact failing text and write the corrected version.

---

## Phase 6 — Veracity Check

For every section with information type `factual`, `technical`, `procedural`, or `change`:

1. List the specific claims requiring verification
2. For each claim: name the authoritative source to check against (go-livepeer GitHub, API spec, on-chain contract, named doc page)
3. For claims that cannot be verified in this pass: flag with `{/* REVIEW: [specific claim] — verify with: [named source] */}`

Pipeline rule: content with unverified or stale claims at very-high or high standard is flagged but not removed. Human must verify before publication. Do not remove claims on the basis of uncertainty alone.

---

## Phase 7 — Structure Check

### 7.1 Opening orientation (all PAGE_TYPEs)

Every page opens with an orientation statement answering:
1. What does this page deliver? (not "this page covers...")
2. Who is it for?
3. What does the reader leave with? (one concrete outcome)

Check the opening paragraph. Flag anything missing or vague.

**The opening paragraph is written last** (WRITE mode) — draft the body first, then write the opening to reflect what the page actually delivers.

Exception: `navigation` pages — orientation is implicit in card value propositions, not a prose paragraph.

### 7.2 Section sequence and handoffs

- [ ] Section sequence follows the reader's journey toward PURPOSE (not editor convenience or system chronology)
- [ ] Every section has a clear handoff — what does the reader do or know after this section?
- [ ] No orphan sections (can be removed without breaking the path to PURPOSE)
- [ ] No section pre-empts content from NEXT_PAGE
- [ ] No section repeats content from PREV_PAGE
- [ ] Final CTA / next step is named specifically (not "see related pages")

---

## Page Brief Template

A page brief is what a human approves before WRITE mode runs. **WRITE mode cannot start without an approved brief.** Fill every field. A vague brief produces a vague page — brief quality is the single largest predictor of output quality.

```
PAGE BRIEF

Reader definition
  Audience:            [gateway / orchestrator / developer / builder / delegator / community / founder]
  Persona:             [persona name from Phase 1 output — or "none"]
  Arriving knowledge:  [what the reader already knows when they arrive at this page]
  Arriving question:   [the specific question the reader is trying to answer]

One-sentence page outcome
  [Complete this: "After reading this page, the reader can _____."]
  [Must be a concrete action or decision — not "understand X" or "learn about Y"]

Journey position
  Previous page:  [page title + one sentence: what it covers, what reader leaves able to do]
  Next page:      [page title + one sentence: what it covers, what reader is expected to arrive knowing]

Single job this page does
  [One job only. If you cannot state this in one sentence without "and", the page needs splitting.]
  [Use the purpose enum: orient / explain / learn / choose / evaluate / start / build / configure /
   operate / troubleshoot / verify / integrate / optimise / reference / update]

Out-of-scope statement
  [What this page explicitly does NOT cover — at least two items]
  [Example: "Does not cover reward-cut strategy. Does not cover multi-GPU setup."]

Human approval
  Approved by:   [name]
  Date:          [YYYY-MM-DD]
  Notes:         [any constraints, open questions, or scope adjustments flagged at approval]
```

---

## Output

### REVIEW mode

```
PAGE: [path]
MODE: REVIEW
VERDICT: PASS / NEEDS WORK / REWRITE REQUIRED

ASSESSED FRONTMATTER:
  pageType:        [assessed value — agree or flag disagreement with current value]
  audience:        [assessed value]
  purpose:         [assessed value]
  veracityStatus:  [verified / unverified / stale — assessed]

ISSUES (priority order, most blocking first):
  1. Phase [N] — [Issue] — [Impact on reader] — [Fix]
  2. ...

VERACITY FLAGS:
  - [Specific claim] — verify with: [named source]

APPROVED SECTIONS (NEEDS WORK only):
  [Sections that pass all checks. List by heading.]

If REWRITE REQUIRED: state the one structural problem that makes patching insufficient.
```

### WRITE / REWRITE mode

```
[Page title]

[Page description — one sentence, outcome-focused, ≤ 160 chars, no "This page"]

---

[Page content — plain markdown only. ## and ### for section structure. No MDX components — Pass B applies those.]

{/* REVIEW: [claim requiring verification] — verify with: [source] */}
```

Write the full page. Do not truncate sections. Do not apply MDX components.

---

## Quality Gates

Before delivering any output:

- [ ] Pre-flight passed — purpose stated, adjacency coherent, scope is single
- [ ] Audience fit checked — all mismatches flagged with specific quoted text
- [ ] Every section has an identified information type
- [ ] Information types match permitted types for PAGE_TYPE
- [ ] All universal blocking violations corrected (WRITE) or flagged with quoted text and fix (REVIEW)
- [ ] Audience-specific voice rules applied (voice-rules.md covers all 7 audiences — no coverage gaps)
- [ ] Every very-high veracity claim has a REVIEW flag or a named source
- [ ] Structure check complete — no orphan sections, no pre-emptions, no PREV_PAGE repetition
- [ ] WRITE mode: all taxonomy fields identified (PAGE_TYPE, PAGE_VARIANT, AUDIENCE, PERSONA, PURPOSE, LIFECYCLE_STAGE, COMPLEXITY) — to be applied in Pass B
- [ ] UK English throughout

---

## AUDIT Mode

AUDIT mode reviews every existing page in a section group and produces a reconsolidation plan. It runs **before** WRITE, REVIEW, or REWRITE. A section group is a folder in `v2/[tab]/` — for example `v2/gateways/guides/` — not a logical category or audience grouping.

AUDIT mode does not write or revise content. It produces decisions and rationale only.

### Pre-flight checks (AUDIT mode)

All three must be confirmed before AUDIT mode runs:

- [ ] Tab map exists at `v2/[tab]/_workspace/tab-map.md`
- [ ] Phase 1 canonical audience design approved for this tab
- [ ] Section group path exists in `v2/[tab]/`

### Decision framework

For each page in the section group, assign exactly one decision:

| Decision | Condition | Required in output |
|---|---|---|
| `KEEP` | Content is in the right location, aligned with the stated audience and purpose, and the content itself is sound | — |
| `MOVE` | Content is good but belongs in a different section or tab | Target path |
| `MERGE` | Content is substantially redundant with another named page | Merge target page path |
| `SPLIT` | Page serves two or more distinct reader jobs | Names and purposes of the proposed new pages |
| `REWRITE` | Scope is correct but content is wrong, stale, or structurally broken — not patchable | Reason rewrite is needed (not patch) |
| `DROP` | Content is deprecated, orphaned, or fully superseded | What supersedes it — required before DROP is valid |

**Decision tree:**

1. Is the content in the right location for this audience and tab? If no → `MOVE`.
2. Does a different page already cover this substantially? If yes → `MERGE`.
3. Does this page serve more than one distinct reader job? If yes → `SPLIT`.
4. Is the content scope correct but the content itself wrong, stale, or structurally broken? If yes → `REWRITE`.
5. Is the content deprecated, orphaned, or fully superseded? If yes → `DROP` (with what supersedes it).
6. None of the above → `KEEP`.

### Edge cases — handle explicitly

**Wrong-audience pages**: Do not `DROP` a page simply because it appears to serve a different audience than the tab's primary audience. Flag it with `FLAG: cross-tab review needed — [audience] content may belong in [tab]` and record it as a `MOVE` candidate. A human must confirm before the page moves or drops.

**Multi-job pages**: Flag for `SPLIT`. In the rationale, name the two or more distinct jobs the page is performing and propose specific page names and purposes for each. Do not split implicitly — name the new pages.

**Old schema frontmatter**: If a page carries deprecated `pageType` values (`landing`, `how_to`, `overview`, `quickstart`, `faq`, `troubleshooting`, `glossary`, `changelog`) in its frontmatter, flag it with `FLAG: schema migration needed (Phase 9)`. Do not `DROP` on the basis of stale frontmatter alone. Do not update frontmatter in AUDIT mode.

**Cross-tab duplicates**: If a page substantially duplicates content that should live in a different tab, flag it with `FLAG: cross-tab duplicate — also appears in [tab]/[path]` and recommend `MOVE` or `MERGE` with the canonical version. Record the other tab explicitly. Do not resolve cross-tab duplicates unilaterally.

### Output format

Produce a per-page decision table followed by a reconsolidation plan summary.

```
AUDIT: [section group path]
TAB: [tab name]
DATE: [YYYY-MM-DD]

PER-PAGE DECISIONS:

| PAGE | DECISION | RATIONALE | TARGET |
|---|---|---|---|
| [page path] | KEEP / MOVE / MERGE / SPLIT / REWRITE / DROP | [one sentence] | [path, page names, or "—"] |

FLAGS:
  - [page path] — FLAG: [flag type] — [detail]

RECONSOLIDATION PLAN:
  Pages to keep (no action): [count]
  Pages to move: [list with source → target paths]
  Pages to merge: [list with source into target]
  Pages to split: [list with original → [new page 1 name (purpose), new page 2 name (purpose)]]
  Pages queued for REWRITE (Phase 6): [list with reason]
  Pages to drop: [list with what supersedes each]
  Pages flagged for human review: [list with flag type]

  Estimated net page count after reconsolidation: [before count] → [after count]
```

Write the audit output to: `context-packs/[tab]/[group]-audit.md`

Do not create stub files, do not move files, do not edit content. AUDIT mode produces the plan only. Execution of moves, merges, and drops is a separate human-approved step.
