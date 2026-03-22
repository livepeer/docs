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
MODE:             [REVIEW / WRITE / REWRITE]

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

⚠️ Note: voice-rules.md currently covers operator audiences (gateway, orchestrator). If AUDIENCE is developer, delegator, or community, apply the base voice rules from Phase 2.3 only and flag that audience-specific rules are not yet defined.

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
- [ ] Audience-specific voice rules applied — or gap flagged if audience not yet covered
- [ ] Every very-high veracity claim has a REVIEW flag or a named source
- [ ] Structure check complete — no orphan sections, no pre-emptions, no PREV_PAGE repetition
- [ ] WRITE mode: all taxonomy fields identified (PAGE_TYPE, PAGE_VARIANT, AUDIENCE, PERSONA, PURPOSE, LIFECYCLE_STAGE, COMPLEXITY) — to be applied in Pass B
- [ ] UK English throughout
