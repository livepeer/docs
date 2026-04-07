**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Format specification (following orchestrators/02-personas.md template)

### Each content page must include:

#### 1. Frontmatter

```yaml
---
title: "[Page Title]"
description: "[One sentence: what question does this page answer?]"
breadcrumb: "[LPT] > [Delegation | Governance | Treasury] > [This Page]"
sidebarPosition: [n]
docTag: "delegator-[lifecycle-stage]"
lastUpdated: "[YYYY-MM-DD]"
reviewedBy: "[Name, SME, Date]"
reviewFlag: "[VERIFY-LIVE] or [REVIEW-LIP-107] or [STALE] if applicable"
---
```

#### 2. Header hero (explain-type pages only)

```markdown
# Page Title

**Your question:** What does this page answer?

**Time to read:** X minutes

**What you'll learn:**
- [Bullet 1]
- [Bullet 2]
- [Bullet 3]
```

#### 3. Content structure (by page type)

**Concept pages (delegation-economics, about delegation, etc.):**
```markdown
# Title

## What is [concept]?
[Explain clearly for new user]

## Why does this matter?
[Connect to delegator's goals]

## How does it work?
[Mechanics, step-by-step if applicable]

## Examples
[Concrete, realistic examples with numbers]

## Common questions
- Q1?
- A1.
- Q2?
- A2.

## Related concepts
- [Link to pre-requisite]
- [Link to next concept]
```

**Tutorial pages (bridge-lpt, getting-started, how-to-vote, etc.):**
```markdown
# Title

## What you'll accomplish
[Clear success criterion]

## Prerequisites
- [Requirement 1]
- [Requirement 2]

## Step 1: [Do this]
[Instructions + screenshot/UI walkthrough]

## Step 2: [Do this next]
[Instructions + screenshot]

[... continue ...]

## Verify it worked
[How to confirm success]

## If something goes wrong
- [Error 1: Recovery path]
- [Error 2: Recovery path]

## Next steps
[What to do after completing this tutorial]
```

**Reference pages (glossary, exchanges, parameters, etc.):**
```markdown
# Title

## [Subsection 1]
| Column A | Column B |
|---|---|
| ... | ... |

## [Subsection 2]
[Content organized by topic]
```

#### 4. Footer elements (all pages)

**Review questions** (for editorial review):
```markdown
---

## Review checklist

- [ ] Are all live data points current (last verified [DATE])?
- [ ] Are all links tested and working?
- [ ] Does this page answer the canonical question for its stage?
- [ ] Is terminology consistent with glossary?
- [ ] Are examples realistic and representative?
- [ ] Are error messages or failure modes addressed?
```

**Related pages** (for navigation):
```markdown
---

## Next in your journey

[Page type] → [Next logical page] → [Page after that]

**If you're [persona type]:**
- [Alternate path A]
- [Alternate path B]
```

---

## Review criteria (editorial checklist)

### Content accuracy

- [ ] All protocol parameters (round duration, inflation rate, active set size) match live values
- [ ] All fees/rewards numbers are current (verified date noted)
- [ ] Examples are realistic and representative
- [ ] Links to external resources (Explorer, contracts) resolve correctly
- [ ] LIP references are correct (include vote results or status)

### Completeness

- [ ] Does the page answer the canonical question for its stage?
- [ ] Are all sub-questions from the journey map addressed?
- [ ] Are prerequisites clearly listed?
- [ ] Are error modes/failure cases addressed?
- [ ] Are next steps or related content clearly signposted?

### Clarity (for delegation audience, moderate crypto literacy)

- [ ] Is the page accessible to someone with no Livepeer experience?
- [ ] Are technical terms defined on first use or linked to glossary?
- [ ] Are examples concrete and relatable?
- [ ] Is the page scannable (short paragraphs, clear headings)?
- [ ] Would a new crypto user understand this without prior knowledge?

### Consistency

- [ ] Terminology matches glossary and other pages (e.g., "orchestrator" not "operator", "delegation" not "staking" or "bonding")
- [ ] Tone matches rest of tab (explanatory, not promotional)
- [ ] Cross-references use exact page titles
- [ ] Abbreviations (LPT, LIP, SPE) are defined on first use or assumed known

### Safety & risk disclosure

- [ ] Does the page disclose risks? (e.g., orchestrator may not call rewards, unbonding period lock-up)
- [ ] Are trust-building reassurances included where needed? (e.g., bridging is safe, you control your funds)
- [ ] Are recovery paths documented for common errors?
- [ ] Are limitations of Livepeer clearly stated (e.g., "no insurance", "your yield depends on orchestrator performance")?

### Testability

- [ ] Can a reader following the instructions successfully complete the task?
- [ ] Are UI elements/screenshots current?
- [ ] Are on-chain transaction paths clear and verifiable?
- [ ] Is there a "verify it worked" section for tutorials?

---

## Review questions checklist (for canonical review)

### Strategic

1. **Does this page serve the primary persona (Yield-Seeking Delegator)?**
   - For Sub-type A: Does it answer their question sequence?
   - For Sub-type B: Is there parallel governance content?

2. **Is this page in the right position in the journey?**
   - Does it assume prerequisites are understood?
   - Does it lead logically to the next stage?

3. **Will this page reduce support burden?**
   - Will it prevent common mistakes?
   - Will it answer top FAQ questions?

### Tactical

4. **Are all live data points refreshable?**
   - Is there a process to update when parameters change?
   - Are "current" numbers clearly marked [VERIFY-LIVE]?

5. **Are dependencies on other tabs documented?**
   - If this page references About or Governance tab content, is the link clear?
   - Could this page stand alone or does it require prior reading?

6. **Does this page follow the canonical format?**
   - Does it match orchestrators/02-personas.md structure?
   - Are Verdict and Review questions sections included?

---

## Verdict & approval workflow

### Pending > Draft > Ready > Approved > Live

**State 1 (Pending):**
- Content outline exists
- Assigned to writer
- Blocking dependencies identified

**State 2 (Draft):**
- First draft written
- SME review scheduled
- [REVIEW] flags marked

**State 3 (Ready):**
- SME feedback integrated
- Links tested
- Format spec checklist passed
- Awaiting final approval

**State 4 (Approved):**
- Editorial sign-off
- Nav.json updated
- No further changes without amendment

**State 5 (Live):**
- Published in v2/lpt/
- Monitored for 14 days post-launch
- Feedback collected

---

## Template: Review block for each page

```markdown
---

## Verdict

**Status**: [ PENDING / DRAFT / READY / APPROVED / LIVE ]

**Reviewer**: [Name]

**Review date**: [YYYY-MM-DD]

**Issues found**:
- [ ] Issue 1: [Description] → [Resolution needed]
- [ ] Issue 2: [Description] → [Resolution needed]

**Questions for author**:
- Q1?
- Q2?

**Approved with conditions**:
- Condition 1: [Must do X before publish]
- Condition 2: [Must do Y before publish]

**Next: → [State] on [Date]**
```

---

## Review questions

1. **Is the frontmatter spec complete?** Should we add author name, first-draft date, edit count, or other metadata?

2. **Should each page include "time to read" estimate?** Adds maintenance burden (changes if content expands). Recommendation: yes, helpful for UX.

3. **Are the review criteria too strict?** Recommendation: no. These are minimum for trustworthiness. Stale data or broken links destroy credibility.

4. **Should review checklist be automated?** Link-checking can be. Data verification would require integration with live sources. Recommendation: start with manual, automate links.

5. **How often should "live data" pages be refreshed?** Recommendation:
   - Monthly: inflation schedule, current yields, active set size
   - Quarterly: allocations, historical data
   - Ad-hoc: breaking changes (LIP passed, protocol upgrade)

---