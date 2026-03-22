**Status**: ⛔ DEPRECATED — pre-framework draft, does not reflect locked taxonomy, 4 modes, or reference file set. Build from spec: `v2/_workspace/references/content-pipeline/10-prompt-input-spec.md` at Step 17.

---

# Prompt: Level 2 Pass A — Content Review / Write

## Livepeer Docs Content Pipeline

---

## When to use this prompt

Use for every page after the tab map stage. This prompt handles the **content layer only** — audience fit, purpose, information types, voice, and veracity.

Layout, MDX structure, component selection, and frontmatter are handled in **Pass B**. Do not apply MDX formatting in this pass.

**Two modes:**

- `REVIEW` — page exists; audit and produce a report with verdict and specific fixes. Use when content is mostly right but needs refinement.
- `WRITE` — page does not exist, or REVIEW verdict was REWRITE REQUIRED. Write or rewrite the full content layer.

---

## Context block

_Fill all fields before running. Vague answers here produce vague output._

```
TAB:              [gateways / orchestrators]
SECTION:          [e.g. guides/payments-and-pricing]
PAGE_PATH:        [e.g. v2/gateways/guides/payments-and-pricing/clearinghouse.mdx]
MODE:             [REVIEW / WRITE / REWRITE]

PAGE_TYPE:        [concept / tutorial / guide / instruction / navigation / reference / resource]
PAGE_VARIANT:     [overview / specification / compendium / changelog / quickstart / setup / knowledge-hub / none]
AUDIENCE:         [gateway / orchestrator / developer / builder / delegator / community / founder]
PERSONA:          [e.g. provider / operator / commercial — or "none" if not applicable]
PURPOSE:          [orient / explain / learn / choose / evaluate / start / build / configure / operate /
                   troubleshoot / verify / integrate / optimise / reference / update]
LIFECYCLE_STAGE:  [discover / evaluate / setup / build / operate / troubleshoot / optimise]
COMPLEXITY:       [beginner / intermediate / advanced]

PREV_PAGE:        [page name + one line: what it covers, what reader leaves able to do]
NEXT_PAGE:        [page name + one line: what it covers, what reader is expected to arrive knowing]

TAB_MAP:          [path to v2/[tab]/_workspace/tab-map.md — or paste the journey position summary]
PRIMARY_SOURCES:  [authoritative sources for factual claims on this page, e.g. go-livepeer GitHub, API spec]
```

---

## Pre-flight: confirm the brief is complete

Before running any phase, check:

**1. Can the purpose be stated in one sentence?**
`This page lets the [AUDIENCE] [concrete action].`
If not: PURPOSE field is wrong or the page scope is too broad. Fix the brief.

**2. Does the adjacency make sense?**
The reader should arrive from PREV_PAGE knowing enough to use this page. The reader should leave ready for NEXT_PAGE. If there's a gap, note it — the page may need an orientation sentence, or the section order is wrong.

**3. Is this page one scope?**
One purpose = one page. If the PURPOSE field requires two distinct reader outcomes, the page needs splitting. Stop and flag before proceeding.

Record answers. Proceed only when all three pass.

---

## Phase 1 — Read

**REVIEW / REWRITE:** Read the current page in full.

- Note what the page claims to do (description, intro)
- Note what the page actually does (content per section)
- Record existing frontmatter values

**WRITE:** Confirm the brief is actionable.

- Every context block field is filled and specific
- Primary sources are named for expected factual claims
- Reader journey is clear (prev → this → next)

Do not begin content analysis until Phase 1 is complete.

---

## Phase 2 — Audience fit

For the stated AUDIENCE + PERSONA + LIFECYCLE_STAGE:

### 2.1 Knowledge level

Does the page's language match COMPLEXITY?

- `beginner` — no assumed prior knowledge of the domain
- `intermediate` — familiar with the domain, not yet operational
- `advanced` — deep operational experience, reads for precision

Flag: sections that assume too much (above complexity) or over-explain (below complexity).

### 2.2 Persona fit

Load the persona definition from [framework.md](../../CONTENT-WRITING/framework.md).
Does every major section serve this persona's arriving question and motivation?

Persona arriving questions for pilot scope:

- `graduate` (gateway): migrating from hosted API to self-hosted — needs clear setup path, realistic economics
- `provider` (gateway): running public gateway-as-service — needs production-grade configuration, reliability
- `architect` (gateway): building SDK or alternative gateway — needs protocol-level technical detail
- `broadcaster` (gateway): video infrastructure migration — needs transcoding-specific paths
- `platform` (gateway): enterprise/multi-tenant — needs scale, cost, integration patterns
- `operator` (orchestrator): running a node solo/small — needs setup, earnings, standard config
- `hobbyist` (orchestrator): home GPU, exploring — needs path selection (solo vs pool), honest economics
- `commercial` (orchestrator): datacentre scale — needs multi-node, enterprise workload patterns
- `specialist` (orchestrator): ML background, AI compute — needs AI pipeline and model curation detail
- `delegate` (orchestrator): governance participant — needs staking mechanics, voting weight

Flag: sections that serve a different persona, or that omit the stated persona's primary concern.

### 2.3 Register

Does the page's writing register match the audience?
Load audience register rules from `Prompts/voice-rules.md` for the stated AUDIENCE.

Flag register mismatches. Quote the specific text and state what register it should use instead.

**Output:** Audience fit verdict per check. Proceed to Phase 3 regardless — log flags and fix in output.

---

## Phase 3 — Purpose check

Does the page deliver on its stated PURPOSE?

| Purpose        | Reader can do this after reading                      |
| -------------- | ----------------------------------------------------- |
| `orient`       | Navigate to the correct next destination              |
| `explain`      | Describe how the mechanism or concept works           |
| `learn`        | Apply the terminology or concept correctly in context |
| `choose`       | Make a specific named decision between options        |
| `evaluate`     | Assess fit of this option against their situation     |
| `start`        | Complete a first successful run                       |
| `build`        | Create or implement a named thing                     |
| `configure`    | Apply specific parameters or settings correctly       |
| `operate`      | Run and manage the system in practice                 |
| `troubleshoot` | Identify and resolve a named failure mode             |
| `verify`       | Confirm correct state or expected output              |
| `integrate`    | Connect this system with a named external system      |
| `optimise`     | Improve a named metric by a concrete method           |
| `reference`    | Look up a specific fact, value, or specification      |
| `update`       | Know what changed and what action is required         |

**Check:** Does the page's section sequence lead the reader to that outcome? Is the outcome reachable before reaching the end?

**For REVIEW:** What blocks the reader from achieving the purpose? Name the specific section or gap.
**For WRITE:** Confirm the planned structure delivers the purpose before writing.

---

## Phase 4 — Information type audit

For each section in the page, identify the information type and check it is permitted for the pageType.

| Section heading | Information type | Permitted for pageType? | Veracity standard |
| --------------- | ---------------- | ----------------------- | ----------------- |

**Information types:**

- `factual` — stated facts, numbers, specs, on-chain values → **very high** veracity required
- `technical` — code, commands, API calls, config syntax → **very high** veracity required
- `procedural` — sequential steps the reader follows → **very high** veracity required
- `change` — changelog entries, release notes → **very high** veracity required
- `evaluative` — comparisons, assessments, trade-offs → **high** veracity required
- `structural` — site navigation, section maps, routing → **high** veracity required
- `analytical` — reasoning, trade-off analysis, implications → **medium** veracity
- `conceptual` — how a mechanism works (model, not code) → **medium** veracity
- `narrative` — framing, context, voice, transitions → **lower** veracity (embedded factual claims inherit factual standard)

**Permitted primary types by pageType:**

- `concept`: conceptual, narrative, analytical — secondary: factual
- `instruction`: procedural, technical — secondary: factual, structural
- `guide`: analytical, evaluative, conceptual, narrative — secondary: factual
- `tutorial`: procedural, technical, narrative
- `reference`: factual, technical, structural, change
- `resource`: structural, evaluative, narrative
- `navigation`: structural, narrative

**Flag:** Any section whose information type doesn't fit the pageType. These are structural mismatches — not just content issues.

---

## Phase 5 — Voice check

### 5.1 Universal blocking rules

Check every sentence. These are hard blockers regardless of audience.

**Banned words** — remove, do not soften or work around:
`effectively, essentially, basically, meaningful, significant, real` (as intensifier), `various, several, obviously, clearly`

**Banned phrases:**

- "This section covers"
- "This page covers / explains / walks you through"
- "Understanding X is essential"
- "It is important to note"
- "As mentioned above"
- "among other factors" / "and so on" / "etc."
- "rather than" (state the positive directly)
- "what it takes" (state the requirements directly)
- "it should be noted"
- "can generate" / "may produce" in value claims (assert directly or delete)

**Banned constructions:**

- `not [X]` in value statements → rewrite as a positive assertion
- `if [condition]` in body prose → resolve the condition or move to prerequisites; exception: code blocks, exact config conditions
- `This page [verb]` → delete self-reference, open with content
- `can/may [verb]` in value claims → assert directly or delete

**Language:** UK English throughout.
Common corrections: optimize→optimise, organize→organise, behavior→behaviour, color→colour, analyze→analyse, labeled→labelled, canceled→cancelled

### 5.2 Opening order

- [ ] Introduction opens with the value or outcome — not the mechanism, not a caveat
- [ ] First sentence states the most useful fact for this page's audience at this lifecycle stage
- [ ] No conditional in sentence 1 (`if you have`, `depending on your setup`, `whether you`)
- [ ] No question as opener

### 5.3 Paragraph discipline

- [ ] One paragraph, one job (label the job in three words; if you can't, split the paragraph)
- [ ] Lead sentence states the fact; remaining sentences extend or evidence it
- [ ] Final sentence ends on a fact, number, or next step — never a hedge or restatement
- [ ] Tables stand alone — no prose restating a table row
- [ ] High-value commands and URLs visible in body copy, not only inside accordions or notes

### 5.4 Audience-specific voice

Load and apply the relevant section from `Prompts/voice-rules.md` for the stated AUDIENCE.

**Output:** Per-rule verdict: PASS / FAIL / PARTIAL.
For every FAIL or PARTIAL: quote the exact failing text and write the corrected version.

---

## Phase 6 — Veracity check

For every section with information type `factual`, `technical`, `procedural`, or `change`:

1. List the specific claims that require verification
2. For each claim: name the authoritative source it should be checked against
3. For claims that cannot be verified in this pass: flag with `{/* REVIEW: [specific claim] — verify with: [named source] */}`

**Veracity standards reference:**

- `factual` / `technical` / `procedural` / `change` → very high: every claim must be citable
- `evaluative` / `structural` → high: evidence must be real and sourced
- `analytical` / `conceptual` → medium: reasoning must be internally consistent
- `narrative` → lower: no citation required, but embedded factual claims inherit factual standard

**Pipeline rule:** Content with `unverified` or `stale` status at very-high or high standard is flagged but not removed. Human must verify before publication.

---

## Phase 7 — Structure check

### 7.1 Opening orientation (universal rule — all pageTypes)

Every page must open with an orientation statement that answers three questions:
1. What does this page deliver? (not "this page covers...")
2. Who is it for? (audience/persona at this journey position)
3. What does the reader leave with? (one concrete outcome or action)

Check the opening paragraph against these three. If any are missing or vague, flag it.

**The opening paragraph is written last** — after sections are finalised. For WRITE mode: draft the body first, then write the opening to reflect what the page actually delivers.

Exception: `navigation` pages — orientation is implicit in the card grid value propositions, not a separate prose paragraph.

### 7.2 Section sequence and handoffs

- [ ] Section sequence follows the reader's journey toward the stated PURPOSE (not editor convenience or chronological order of the system)
- [ ] Every section has a clear handoff — what does the reader do or know after this section? Where do they go next?
- [ ] No orphan sections (can be removed without breaking the reader's path to the purpose)
- [ ] No section pre-empts content from NEXT_PAGE
- [ ] No section repeats content already covered by PREV_PAGE
- [ ] Final CTA / next step is named specifically (not "see related pages")

---

## Output

### REVIEW mode — produce a review report

```
PAGE: [path]
MODE: REVIEW
VERDICT: PASS / NEEDS WORK / REWRITE REQUIRED

ASSESSED FRONTMATTER:
  pageType:        [assessed value — agree or flag disagreement with current]
  audience:        [assessed value]
  purpose:         [assessed value]
  veracityStatus:  [verified / unverified / stale — assessed]

ISSUES (priority order, most blocking first):
  1. Phase [N] — [Issue] — [Impact on reader] — [Fix]
  2. ...

VERACITY FLAGS:
  - [Specific claim] — verify with: [named source]
  - ...

APPROVED SECTIONS (NEEDS WORK only):
  [Sections that pass all checks — no changes needed. List by heading.]

If REWRITE REQUIRED: state the one structural problem that makes patching insufficient.
```

### WRITE / REWRITE mode — produce content

```
[Page title]

[Page description — one sentence, outcome-focused, <= 160 chars]

---

[Page content as plain markdown, no MDX components — Pass B applies the MDX layer]

{/* REVIEW: [claim requiring verification] — verify with: [source] */}
```

Write the full page. Do not apply MDX components — Pass B handles that. Do use heading levels (## and ###) to indicate section structure.

---

## Quality gates

Before delivering any output:

- [ ] Pre-flight passed (purpose stated, adjacency coherent, scope is single)
- [ ] Audience fit checked — all mismatches flagged with specific quotes
- [ ] Every section has an identified information type
- [ ] All universal blocking violations corrected or flagged
- [ ] Audience-specific voice rules applied (voice-rules.md loaded)
- [ ] Every very-high veracity claim has a REVIEW flag or a named source
- [ ] Structure check complete — no orphan sections, no pre-emptions
- [ ] WRITE mode: all 9 taxonomy fields identified (to be applied in Pass B)
- [ ] UK English throughout
