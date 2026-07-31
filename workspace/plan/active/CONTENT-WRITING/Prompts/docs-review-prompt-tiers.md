# Prompt Variants: Single Section & Single Page Review
## Scaled-down versions of the full tab IA pipeline

---

## The core problem: context without over-weighting

The full pipeline (5 docs, full tab inventory, diamond thinking) is calibrated for designing a tab from scratch. Applying the same weight to a single page review produces analysis paralysis — you spend more time framing the page than writing it.

The solution is a **fixed-ratio context rule:**

> Context gathering should take no more than 20% of the total work. For a section review, that means one skim pass of adjacent tabs. For a page review, that means one search for what's already documented nearby.

The pipeline compresses — the quality gates do not.

---

## Tier 1: Full Tab (the pipeline you already have)

**Use when:** Designing or redesigning a complete tab from scratch, or auditing whether an existing tab is structurally sound.

**Context needed:** Full site skim, all tabs.  
**Outputs:** 5 documents (research, audience, IA+pages, context, final IA).  
**Time:** Full session.

→ Use the consolidated prompt you already have.

---

## Tier 2: Single Section Review

**Use when:** One grouping within a tab needs redesigning, adding, or auditing. The rest of the tab is stable.

**Context needed:**
- The tab's overall purpose (one search, read the portal page)
- What the adjacent sections in this tab own (so you don't duplicate within the same tab)
- What other tabs own that might overlap with this section's scope

**Context-to-work ratio:** One pass of 3–4 targeted searches. No full tab inventory.

---

### Tier 2 Prompt: Single Section Review

```
CONTEXT BLOCK
─────────────────────────────────────────
TAB:              [e.g. Community]
SECTION:          [e.g. Governance Participation]
LIVE DOCS ACCESS: [MCP tool name / not available]
REPO:             [github.com/org/docs, branch]
VOICE REFERENCE:  [e.g. peer-technical, UK English]
EXISTING PAGES:   [list any pages already in this section, or "none"]
─────────────────────────────────────────

STEP 1 — LIGHTWEIGHT CONTEXT SCAN (do this first, before anything else)

Run these three searches in sequence. Do not write anything until all three are complete.

1a. Search the tab portal page for this tab. In 3 sentences: what does this tab own overall?

1b. Search for the 2–3 sections immediately adjacent to the target section in this tab.
    In one sentence each: what does each adjacent section cover?
    What does the target section need to hand off to or receive from each?

1c. Search for content in other tabs that might overlap with this section's scope.
    In a table: [Overlapping content] → [Tab that owns it] → [How the section should handle it: link / omit / reference]

Record the output of Steps 1a–1c as a single CONTEXT SUMMARY block before proceeding.
Do not write any section content until the context summary exists.

STEP 2 — SCOPE VERIFICATION

Given the context summary, answer:

- What does this section uniquely own that no other section or tab covers?
- What content might seem to belong here but should be handed off?
- What is the primary audience process this section serves? (One sentence.)
- What does the reader arrive knowing? What do they leave able to do?

If the scope cannot be stated in 2–3 sentences, the section is over-scoped. Reduce before continuing.

STEP 3 — SECTION OUTPUT

Produce a single .md file containing:

1. SECTION BRIEF
   - Purpose tag (one word)
   - Primary audience (one persona, named specifically)
   - Reader arrives knowing: [state]
   - Reader leaves able to: [concrete action — not "understand X"]
   - Scope boundary: what this section covers / what it hands off and where

2. NAVIGATION STRUCTURE for this section only
   [Page name]    pageType · voice
   (list all pages in this section)

3. PAGE DEFINITIONS for each page:
   - Name [1–3 words]
   - Description [one sentence, voice-appropriate, subject-first]
   - Introduction [1–2 sentences: value-proposition-forward, outcome-focused,
     no qualifiers / conditionals / questions / "this page is" / superlatives]
   - Required sections [named 1–3 words each]:
     For each: 1–3 sentences — what it delivers, why here, where it routes next
   - Review flags [{/* REVIEW: claim — owner: name */} for any unverifiable claims]

4. CROSS-LINK MAP
   Table: [Page in this section] → [Links to] → [Reason]
   Include both inbound (what routes to this section) and outbound (where this section sends readers).

5. STALENESS REGISTER
   Table: [Page] → [Volatile content] → [Mitigation]
   Any content that changes faster than quarterly must point to a live source, not document current state.
```

---

## Tier 3: Single Page Review or Authoring

**Use when:** One specific page needs writing, rewriting, or auditing. The section structure is already decided.

**Context needed:**
- What the previous page in the section covers (so this page doesn't repeat it)
- What the next page covers (so this page hands off correctly)
- Whether any other tab already documents this content

**Context-to-work ratio:** 2 targeted searches maximum. One context check. Then write.

---

### Tier 3 Prompt: Single Page (Write or Rewrite)

```
CONTEXT BLOCK
─────────────────────────────────────────
TAB:              [e.g. Community]
SECTION:          [e.g. Shape the Network]
PAGE:             [e.g. Workstreams]
PREVIOUS PAGE:    [name + one-line summary of what it covers]
NEXT PAGE:        [name + one-line summary of what it covers]
LIVE DOCS ACCESS: [MCP tool name / not available]
MODE:             [write from scratch / rewrite existing / audit only]
VOICE:            [e.g. factual, scannable, UK English, peer-technical]
PRIMARY SOURCE:   [link or file — the authoritative source for facts on this page]
─────────────────────────────────────────

STEP 1 — ADJACENCY CHECK (2 searches max, 5 minutes max)

1a. Search the live docs for content on [PAGE TOPIC].
    Answer: Does substantive content on this topic already exist in another tab or section?
    If yes: name the location. The new page should reference it, not duplicate it.

1b. Search for [closest related concept in another tab].
    Confirm the handoff is clean: what does that tab cover that this page should not repeat?

Record findings in 3 sentences. If no overlap found, state that explicitly and proceed.

STEP 2 — PAGE BRIEF (complete before writing a single sentence of content)

Fill every field. A vague or placeholder answer means the brief is incomplete — redo it.

pageType:        [landing / concept / how-to / guide / reference / faq]
audience:        [one named persona — not "general" or "any participant"]
reader arrives:  [what they already know and what decision they are in the middle of]
reader leaves:   [one concrete action or understanding — not "understand X"]
scope:           [what this page covers]
out of scope:    [what this page does NOT cover, and where that content lives]
primary source:  [minimum one verifiable source per factual claim group]
next action:     [the page the reader goes to after this one — named specifically]

STEP 3 — WRITE THE PAGE

Produce MDX-ready content (or .md if MDX not specified) with:

NAME [1–3 words, concept-derived]

DESCRIPTION
One sentence. States the subject directly. Does not describe the document.
❌ "This page explains how workstreams work and how to join them."
✅ "The nine Livepeer Foundation workstreams — strategic execution areas open to community contributors."

INTRODUCTION [1–2 sentences]
Value proposition first. Outcome-focused. No qualifiers, conditionals, questions.
No: "This page is", "Three options for", "Whether you want to...", "Depending on your situation"
No: enthusiasm without information ("Livepeer has a thriving ecosystem")
No: barrier-first ("Workstreams can be complex to navigate")

SECTIONS [each named 1–3 words]
Each section:
- Delivers one thing (content focus)
- Has a clear reason for existing at this position in the page (journey logic)
- Routes the reader forward (what comes next)

Sections run in the order that matches the reader's journey toward their goal.
No orphan sections. No sections that could be moved without loss.

REVIEW FLAGS
{/* REVIEW: [specific claim] — verify with: [named SME] */}
One flag per unverifiable claim. No blind assertions.

STEP 4 — SELF-CHECK BEFORE DELIVERING

Run these checks. Fix before delivering.

Introduction:
[ ] Opens with the subject, not a caveat
[ ] States what the page delivers, not what it is
[ ] No conditional ("if you are", "depending on", "may or may not")
[ ] No question
[ ] No "this page" self-reference

Sections:
[ ] Every section has a clear handoff (internal or external link at the end)
[ ] No section repeats content from the previous page
[ ] No section pre-empts content from the next page
[ ] Volatile content (governance parameters, programme names, personnel) has a REVIEW flag

Scope:
[ ] Nothing on this page is better documented in another tab
[ ] The page answers one question (matches the purpose tag)
```

---

### Tier 3 Prompt: Single Page Audit (existing page, no rewrite)

```
CONTEXT BLOCK
─────────────────────────────────────────
TAB:              [e.g. Community]
SECTION:          [e.g. Shape the Network]
PAGE URL:         [live page URL or file path]
LIVE DOCS ACCESS: [MCP tool name / not available]
─────────────────────────────────────────

STEP 1 — READ THE PAGE
Fetch or read the current page in full. Do not summarise yet.

STEP 2 — ADJACENCY CHECK
Search for the 2 most likely locations where this content might be duplicated in the docs.
In one sentence each: does overlap exist? If yes, where?

STEP 3 — AUDIT AGAINST THESE CRITERIA

Score each criterion: PASS / FAIL / PARTIAL. For each FAIL or PARTIAL, quote the specific text that fails and write the corrected version.

INTRODUCTION
[ ] Opens with subject, not caveat or description
[ ] Value proposition in sentence 1
[ ] No "this page", no conditionals, no questions
[ ] Reader knows what they'll leave with after 2 sentences

SCOPE
[ ] Page answers one question
[ ] No content that is better maintained in another tab
[ ] Out-of-scope content is linked to, not duplicated

SECTIONS
[ ] Each section has a named handoff
[ ] Sequence matches reader journey (not editor convenience)
[ ] No orphan sections

VOLATILE CONTENT
[ ] Any claim that can change within 6 months is flagged or points to a live source
[ ] No governance parameters, programme names, or personnel stated as permanent facts

VOICE
[ ] Matches the stated voice for this section
[ ] No prohibited patterns (list them from the voice reference)

STEP 4 — AUDIT VERDICT

Three outputs:
1. PASS / NEEDS WORK / REWRITE REQUIRED
2. Top 3 issues in priority order, each with: issue → impact → fix
3. If REWRITE REQUIRED: state the one structural problem that makes a patch insufficient
```

---

## The pipeline in one diagram

```
Tier 1 (full tab)
  Tab skim, all tabs → Research doc → Audience doc → IA doc → Context check → Final IA
  5 documents, full session

Tier 2 (section)
  3 targeted searches → Context summary → Scope verification → Section brief + pages
  1 document, ~1 hour

Tier 3 (page — write)
  2 targeted searches → Page brief → Write → Self-check
  1 document, 20–40 minutes

Tier 3 (page — audit)
  1 read + 2 searches → Criteria audit → Verdict + fixes
  1 document, 15–20 minutes
```

---

## How context is controlled at each tier

The risk at Tiers 2 and 3 is different from the Tier 1 risk:

**Tier 1 risk:** Missing a tab that already owns your content → duplication.  
**Mitigation:** Full site skim before any writing.

**Tier 2 risk:** Getting distracted by adjacent sections → over-expanding scope.  
**Mitigation:** The scope verification step (Step 2) requires stating scope in 2–3 sentences. If you can't, the section is over-scoped.

**Tier 3 risk:** Writing in a vacuum → page that doesn't fit the section flow.  
**Mitigation:** Previous page / next page are mandatory inputs. The page brief's "next action" field forces the handoff to be named before a word is written.

**Common failure at Tier 3:** Skipping the brief and writing directly. The brief is the quality gate. A page written without a complete brief will fail the self-check and require a rewrite. The brief takes 5 minutes. The rewrite takes 30.

---

## Which tier to use

| Situation | Tier |
|---|---|
| Designing a tab from scratch | 1 |
| Tab exists but feels structurally wrong | 1 |
| One section is empty or misaligned | 2 |
| Section has too many pages or wrong scope | 2 |
| Writing one new page in an established section | 3 (write) |
| Existing page needs improvement | 3 (audit) |
| Existing page needs a specific fix (wrong intro, missing handoff) | 3 (audit — targeted) |
| Quick check: does this page duplicate something else? | 3 (audit — just Step 2) |
