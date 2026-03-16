---
name: product-thinking
version: "1.0"
description: "Product thinking framework for documentation IA and content strategy. Treat docs as a product, apply product-management analysis methods, and use it when reviewing information architecture, journeys, gaps, or navigation priorities across docs."
invoke_when:
  - "review docs information architecture with product thinking"
  - "audit navigation or journeys as a docs product"
  - "apply product frameworks to documentation strategy"
---

# SKILL: Product Thinking for Documentation

Documentation is a product. The user's job is to accomplish a goal, not to read pages.
This skill applies product management frameworks to information architecture, content
strategy, and user journey design.

The skill has 9 steps. Steps 1-6 evaluate what exists. Steps 7-9 surface what's missing.
Run all 9 for a complete review. Run individual steps when the scope is narrower.

<CustomDivider />

## When to Use

- Reviewing a section, tab, or entire docs site IA
- Evaluating whether content serves real user needs vs organisational convenience
- Identifying gaps, redundancies, and journey friction
- Prioritising what to write, rewrite, or remove
- Designing navigation, entry points, and cross-references
- Auditing content completeness for a role or product area

## When NOT to Use

- Page-level style, copy, or component review
- Individual page accuracy checks
- Code or API reference generation

<CustomDivider />

## Step 1: Job Stories

Do NOT start with personas ("Power User", "Beginner", "Enterprise Admin"). Start with
**situations that trigger action**. The same person appears in multiple situations.

### Format

```
When [situation], I want to [motivation], so I can [outcome].
```

### Template

```markdown
**J[n]**: "When [situation], I want to [motivation], so I can [outcome]."
- Acceptance: [observable criterion 1]. [criterion 2]. [criterion 3].
- Pages serving this job: [list or "none"]
- Gap: [what's missing]
```

### Rules
- 6-10 job stories per review
- Each describes a **situation**, not a role or demographic
- 3-6 **acceptance criteria** per story (observable, measurable outcomes)
- Job stories sharing more than 50% of acceptance criteria should be merged
- Cover the full lifecycle: evaluation, setup, operation, scaling, troubleshooting

### Anti-patterns
- "As a [role], I want to..." - role-based user stories miss situational context
- Job stories with no acceptance criteria - untestable
- Job stories that map 1:1 to existing pages - you're describing the solution, not the problem
- All job stories from the same lifecycle phase - you'll miss operational and scaling gaps

<CustomDivider />

## Step 2: Opportunity Solution Tree

Connect a single measurable outcome to user pain points, then generate solutions.

### Structure

```
Desired Outcome (one measurable goal)
├── Opportunity 1 (user pain point)
│   ├── Solution A
│   ├── Solution B
│   └── Solution C
├── Opportunity 2
│   └── ...
└── Opportunity 3
    └── ...
```

### Scoring

Score = Importance (1-10) x (10 - Satisfaction)

Where Satisfaction = how well current content addresses the opportunity (1-10).
High score = high importance, low current satisfaction = biggest bang for effort.

### Rules
- ONE desired outcome per tree
- Opportunities come from evidence (community questions, support tickets, analytics,
  user interviews), not from assumptions about what users need
- 3+ solutions per opportunity before committing
- Solutions include: new page, restructured section, merged content, removed content,
  cross-reference, interactive element, navigation change, or "do nothing"

<CustomDivider />

## Step 3: Assumption Mapping

Surface beliefs embedded in the current IA. Every structural decision contains
assumptions. Making them explicit enables testing.

### Four Dimensions

| Dimension | Question |
|-----------|---------|
| **Value** | Will users find this content valuable? |
| **Usability** | Can users find and navigate this content? |
| **Viability** | Can this content be created, verified, and maintained? |
| **Feasibility** | Does the platform/tooling support this approach? |

### Template

```markdown
| # | Assumption | Dimension | Confidence | Risk | Test |
|---|-----------|-----------|-----------|------|------|
| 1 | [belief statement] | V/U/Vi/F | H/M/L | H/M/L | [how to validate] |
```

### Rules
- 10+ assumptions per review
- Confidence=Low + Risk=High = **blocker** (must validate before building)
- Actively hunt **blind spot assumptions** - beliefs so embedded they aren't stated
  (e.g. "users read sections in order", "all users need the same setup path")

<CustomDivider />

## Step 4: Customer Journey Map

Map the end-to-end experience for the primary job story.

### Stages

| Stage | User question |
|-------|-------------|
| **Awareness** | "How did I discover this exists?" |
| **Evaluation** | "Is this worth my time/money/effort?" |
| **Decision** | "Which path do I take?" |
| **Setup** | "How do I get it running?" |
| **First Value** | "Did it work? Am I getting what I expected?" |
| **Optimisation** | "How do I get more from this?" |
| **Scaling/Exit** | "What's next - grow, change, or leave?" |

### For Each Stage

- **Touchpoint**: Which page/section/tool does the user interact with?
- **Doing**: What action are they taking?
- **Thinking**: What question is in their head?
- **Feeling**: Confident, confused, anxious, frustrated, excited?
- **Friction**: What slows them down or blocks them?
- **Opportunity**: How could the docs serve them better here?

### Critical Moments

Design explicitly for these:
- **Aha moment**: When does the user first understand the value?
- **Churn trigger**: What causes the user to give up?
- **Advocacy trigger**: What makes the user recommend this to others?

<CustomDivider />

## Step 5: Value Proposition

Articulate what the documentation section promises for each primary job story.

### Template

```
For [job story situation],
[section name] shows you [primary benefit],
so you can [desired outcome].
Unlike [current alternative], it [key differentiator].
```

### Rules
- One value prop per primary job story (not per page)
- The value prop should be visible on the section's entry/landing page
- If you can't write a clear value prop, the section has a purpose problem
- Value props that sound identical across sections indicate redundancy

<CustomDivider />

## Step 6: Section Review

With Steps 1-5 complete, evaluate the existing IA against them.

### Checklist

- [ ] Every page serves at least one job story
- [ ] Every job story has at least one page
- [ ] No two pages serve the same job story with the same content
- [ ] Section order matches the primary journey (not alphabetical or organisational)
- [ ] Entry points route by situation, not by section structure
- [ ] Skip-ahead paths exist for returning users
- [ ] Cross-references connect related content across sections
- [ ] The glossary defines every term before its first unexplained use
- [ ] Critical moments (aha, churn, advocacy) have designed touchpoints

### Output

```markdown
## [Section Name]

**Job stories served**: J1, J3, J5
**Opportunities addressed**: O1, O3

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| page-name | J1, J3 | OK / Gap / Redundant / Wrong section | [detail] |

### Recommendations
1. [action] - [rationale]
```

<CustomDivider />

## Step 7: Absence Detection

Steps 1-6 evaluate what exists. Step 7 surfaces what's missing. Absent content is
invisible by definition - you need structured methods to find it.

### Method A: Walk the Week

Simulate a full week of the user's life. For every action, ask "what page answers
this?" No page = confirmed gap.

```markdown
| When | Action | Question | Page | Gap? |
|------|--------|---------|------|------|
| Day 1 morning | Routine health check | "Is everything OK?" | | |
| Day 1 morning | Review overnight activity | "Did anything fail?" | | |
| Day 2 | Encounter an error | "What does this mean?" | | |
| Day 3 | Software update available | "How do I upgrade safely?" | | |
| Day 4 | Performance degrades | "What changed? How do I fix it?" | | |
| Day 5 | Config change needed | "How without downtime?" | | |
| Weekly | Review metrics/costs | "Am I on track?" | | |
| Monthly | Evaluate strategy | "Should I change my approach?" | | |
```

**Rules:**
- Cover at least: routine operation, an incident, a config change, an upgrade, and
  a business/strategy decision
- Include time-based tasks (daily, weekly, monthly, quarterly)
- Include reactive tasks (something breaks, demand shifts, costs change)
- Every empty "Page" cell is a confirmed gap

### Method B: Interface Audit

Every tool, CLI, dashboard, config file, and API the user touches implies documentation
needs. Audit each:

| Category | What to list | Gap test |
|----------|-------------|----------|
| **CLI flags/commands** | Every flag the user sets or command they run | Is there a page explaining WHEN to use it (not just WHAT it does)? |
| **API/endpoints** | Every endpoint the user calls | Is the operational context documented (not just the spec)? |
| **Dashboard fields** | Every metric, status, or chart the user sees | Is "what does this mean and what do I do about it?" answered? |
| **Config files** | Every config format (JSON, YAML, env, etc.) | Is there a complete field reference with allowed values? |
| **Log patterns** | Key messages the user will encounter | Are they explained with causes and actions? |
| **Error messages** | Errors the system produces | Is each mapped to a troubleshooting entry? |

### Method C: Question Harvest

Mine real user questions. Recurring questions without docs answers = gaps.

**Sources:** Community channels, forums, support tickets, GitHub issues, FAQ pages,
search analytics, onboarding feedback.

**Process:**
1. Collect 50+ questions (minimum 3 months of history)
2. Cluster by theme (aim for 5-15 clusters)
3. Map each cluster to the page that should answer it
4. Clusters with 3+ questions and no page = confirmed gap
5. Single questions revealing a missing concept = potential gap

<CustomDivider />

## Step 8: Cross-Role Analysis

Users rarely exist in a single-role silo. They interact with other roles, sometimes
perform multiple roles, and need to understand adjacent perspectives.

### Role Overlap Map

```markdown
| Primary role | Adjacent role | Overlap type | Bridge needed? |
|-------------|--------------|-------------|---------------|
| [Role A] | [Role B] | Same tool / same system / economic relationship / governance | Yes/No/Partial |
```

### Overlap Types
- **Same software**: Both roles use the same tool differently
- **Economic relationship**: One role pays/earns from the other
- **Shared governance**: Both participate in the same decision processes
- **Combined operation**: Significant % of users perform both roles simultaneously

### Bridge Content Types (lightest → heaviest)

1. **Cross-reference callout**: "For the [other role] perspective, see [link]"
2. **"Both sides" section**: A section within a page showing the other perspective
3. **Shared glossary entries**: Same term, role-specific definitions
4. **Combined operations guide**: Dedicated page for users performing both roles

### Rules
- Combined operations guides only when more than 20% of users perform both roles
- Every cross-reference is bidirectional
- Shared terms must be defined consistently (or explicitly differentiated) across
  role-specific glossaries
- Don't force symmetry between roles - document real asymmetries

<CustomDivider />

## Step 9: Quickstart / Setup / Operations Separation

Three distinct phases that documentation frequently conflates. Separating them
prevents false expectations and structural confusion.

### Three Phases

| Phase | Question | Scope | Commitment |
|-------|---------|-------|-----------|
| **Quickstart** | "Does this work for me?" | Verify the technology functions on your hardware/environment. Local, reversible, no financial commitment. | Time only (under 1 hour) |
| **Setup** | "How do I run this properly?" | Configure for production operation. May require accounts, credentials, financial commitment. | Time + technical commitment (hours to days) |
| **Operations** | "How do I get value?" | Business outcomes: revenue, efficiency, scaling, optimisation. Ongoing decisions. | Ongoing (weeks to months) |

### Evaluation Checklist

- [ ] Quickstart requires no financial commitment (no tokens, subscriptions, deposits)
- [ ] Quickstart verifies core technology (not just "install succeeded")
- [ ] Setup is honest about time, prerequisites, and costs
- [ ] Setup ends at "technically operational" not "producing business value"
- [ ] Operations content (pricing, demand, strategy) lives in guides, not setup
- [ ] Phase boundaries are explicit in the documentation
- [ ] Each phase links forward to the next ("quickstart done? → setup guide")

### Anti-patterns

| Anti-pattern | Problem | Fix |
|-------------|---------|-----|
| Quickstart requires payment/tokens | Barrier too high for evaluation | Find a local/free test path |
| Setup promises business outcomes | Creates false expectations | Separate "running" from "earning/delivering value" |
| Operations buried in setup | Users configure business strategy during technical setup | Move to guides |
| No quickstart exists | Only path is full setup; evaluation barrier too high | Create minimum viable verification |
| Quickstart IS the setup | One monolithic page tries to do both | Split into separate paths with different goals |

### Asymmetry Check

Different roles may have fundamentally different profiles across these phases. Document
the asymmetry rather than forcing them into the same structure:

```markdown
| Dimension | [Role A] | [Role B] | Structural implication |
|-----------|---------|---------|----------------------|
| Fastest verification | [time, cost] | [time, cost] | |
| Production setup | [time, cost] | [time, cost] | |
| Financial prerequisite | [what, how much] | [what, how much] | |
| Local/offline testing viable? | Yes/No | Yes/No | |
| Phase that differs most | [which phase] | [which phase] | [why this matters for docs structure] |
```

<CustomDivider />

## Deliverable Format

A markdown report with:

1. **Job Stories** (6-10 with acceptance criteria)
2. **Opportunity Solution Tree** (1 outcome, 5-8 opportunities scored, solutions each)
3. **Assumption Map** (10+ across 4 dimensions, blind spots flagged)
4. **Journey Map** (primary job story through 7 stages, critical moments identified)
5. **Value Propositions** (one per primary job story)
6. **Section Review** (every section evaluated against job stories)
7. **Absence Detection** (walk the week + interface audit + question harvest)
8. **Cross-Role Analysis** (overlap map + bridge content needs)
9. **Quickstart/Setup/Operations Separation** (three phases evaluated + asymmetry)
10. **Priority Actions** (P0/P1/P2/P3 with rationale and effort estimate)

<CustomDivider />

## Reference

Frameworks adapted from [github.com/phuryn/pm-skills](https://github.com/phuryn/pm-skills):
- Job Stories: `pm-execution/skills/job-stories`
- Opportunity Solution Tree: `pm-product-discovery/skills/opportunity-solution-tree`
- Assumption Mapping: `pm-product-discovery/skills/identify-assumptions-existing`
- Customer Journey Map: `pm-market-research/skills/customer-journey-map`
- Value Propositions: `pm-marketing-growth/skills/value-prop-statements`

Steps 7-9 (Absence Detection, Cross-Role Analysis, Quickstart/Setup Separation) are
original additions developed from documentation-specific failure modes not covered by
the pm-skills frameworks.
