# SKILL: Page Review and Rewrite Process

Procedure for reviewing existing pages and producing rewrites that meet first-principle standards. Every step has a success output. Do not skip steps. Do not write content until Step 5.

---

## When to Use

- Reviewing an existing page during section-by-section human review
- Rewriting a page that fails review
- Writing a draft replacement for a page flagged for restructure

## When NOT to Use

- Creating a new page from scratch (use page-authoring skill)
- Fixing individual style issues (just fix them)

---

## Step 1: Read All Context

Before touching the page, read:

1. The page's PURPOSE comment (bottom of .mdx file)
2. The glossary (`v2/orchestrators/resources/glossary.mdx`) for canonical terminology
3. The execution plan (`_workspace/plans/execution-plan.md`) for the page's section assignment and flags
4. The human review log (`_workspace/reviews/guides/human-review.md`) for rules and patterns
5. The page-authoring skill (`ai-tools/ai-skills/page-authoring/SKILL.md`) for structural rules
6. Any research brief for the page (`_workspace/research/`)
7. The equivalent gateway page (if one exists) for layout and pattern reference

**Success output**: Can state from memory: the page's purpose, its reader's real question, the canonical terms it must use, and the structural rules it must follow. If you cannot state these, go back and read again.

---

## Step 2: Identify the Reader's Real Question (5 Whys)

Ask the main question, then ask WHY five more times.

Write it out. Do not skip this. The first attempt is always too generic.

**Template**:
```
1. [Surface question] → WHY? →
2. [Deeper] → WHY? →
3. [Deeper] → WHY? →
4. [Deeper] → WHY? →
5. [Deeper] → WHY? →
6. [Real question]
```

**Success output**: A single sentence starting with "The reader is on this page because..." that is specific to their journey position, not generic. If it could apply to any page, it's too vague - go deeper.

---

## Step 3: Build Tier Questions

From the real question (Step 2), ask 5 more tier questions. Each becomes a page section.

**Template**:
```
| Tier | Reader question | Value props (no prose, minimum 5 per option) |
|------|----------------|----------------------------------------------|
| 0 | [The real question from Step 2] | [The options] |
| 1 | [Why do these options exist?] | [5+ reasons per option, across: financial, operational, risk, time, complexity, flexibility] |
| 2 | [What's the risk/tradeoff?] | [Per option] |
| 3 | [What do I need?] | [Per option] |
| 4 | [Which fits my situation?] | [Situation → option mapping] |
| 5 | [What do I do after choosing?] | [Links to detail pages] |
```

**Rules**:
- Minimum 5 value props per option. If you can only think of one, you're anchoring. Step back and think across different dimensions.
- No explicit questions as prose. State situations and options directly.
- No "choose this when..." phrasing. State what the option IS and what it provides.

**Success output**: A completed tier table where every option has at least 5 distinct value props across different dimensions. If any option has fewer than 3, challenge your own thinking before proceeding.

---

## Step 4: Map Page Structure

The tier questions from Step 3 ARE the page structure.

- Tier 0 = the opening (answer the question immediately)
- Tiers 1-4 = the H2 sections
- Tier 5 = Related Pages / Next Steps

Check: does every H2 answer a tier question? If an H2 doesn't map to a tier, it doesn't belong.

Check: does the Tip/intro from the execution plan match what the page delivers? If the Tip promises 4 decisions, the page must have 4 sections delivering those decisions.

**Success output**: A bullet list of H2 headings, each mapped to a tier question. No H2 exists without a tier question. No tier question exists without an H2.

---

## Step 5: Write the Draft

Now write. Follow these rules (from human-review.md):

### Structure rules
- Answer the reader's question FIRST. No preamble, no definitions section, no context before the answer.
- Tables and cards carry the content. Prose is minimal - under 400 words for overview/routing pages.
- Reference tables go at the END, not the beginning. Lead with decision support.
- One paragraph per option MAXIMUM on routing pages. Depth lives on detail pages.
- No flowcharts/mermaid for "should I?" decisions. Flowcharts are for technical processes only.
- No decision-critical info hidden in tabs. Tabs are for reference variants.

### Content rules
- Explain WHY each option exists, not just WHAT it is.
- Explain architecture reasons (why the protocol is designed this way), not just hardware facts.
- Acknowledge all legitimate options (off-chain is valid for private deployments, not just testing).
- Scope to audience level. Advanced topics get a link, not a full section.
- No earnings figures. No depth. No setup instructions. Route to detail pages.

### Voice rules
- No explicit questions as prose framing ("Do you want full control?"). State directly.
- No banned words: simply, just, easily, leverage, utilise, seamless.
- Entity-led voice for system descriptions. Second person for instructions.
- British English. Oxford comma.

### Style rules (from page-authoring skill)
- ONE opening CustomDivider after imports. No second divider before first H2.
- CustomDivider between H2 sections (optional).
- CustomDivider before Related Pages (always).
- StyledTable for all data tables. No markdown tables.
- All code blocks: `icon="terminal"` for bash, `icon="code"` for config.
- All accordions and tabs have icons.
- Use glossary terms. Do not invent terminology.

### Draft location
- ALWAYS write to `_workspace/drafts/` as `draft-[pagename].mdx` or `draft1-[pagename].mdx`.
- NEVER overwrite the live page until human approves.
- NEVER delete any existing file.

**Success output**: A draft .mdx file in `_workspace/drafts/` that:
- Opens by answering the reader's real question (from Step 2)
- Has H2 headings mapping to tier questions (from Step 4)
- Has tables carrying the content, not prose
- Has under 400 words of prose (for overview pages)
- Uses only glossary terminology
- Follows all CustomDivider rules
- Links to detail pages, never explains depth inline

---

## Step 6: Self-Check

Before presenting to human, verify:

| Check | Pass? |
|-------|-------|
| Does the opening answer the reader's real question within the first 3 lines? | |
| Does every H2 map to a tier question? | |
| Does any H2 NOT map to a tier question? (if yes, remove it) | |
| Does the Tip/intro promise match what the page delivers? | |
| Are there minimum 5 value props per option? | |
| Is prose under 400 words? (for overview pages) | |
| Are reference tables at the end, not the beginning? | |
| Is decision-critical info visible without clicking tabs/accordions? | |
| Are all terms from the glossary? (no invented terms) | |
| Is there a CustomDivider after imports and NONE before the first H2? | |
| Does the page use entity-led voice? | |
| Are there zero explicit questions as prose framing? | |
| Does the page route to detail pages instead of explaining depth? | |

**Success output**: All checks pass. If any fail, fix before presenting.

---

## Step 7: Present to Human

State:
1. What the reader's real question is (from Step 2)
2. The tier questions the page structure is built on (from Step 3)
3. Where the draft is saved
4. Any decisions you flagged vs made

Do NOT present the draft content inline. The human opens it in IDE.

**Success output**: Human opens the draft and reviews it.

---

## Step 8: Log Feedback

After human review, log ALL feedback to `_workspace/reviews/guides/human-review.md`:
- Page name
- Issue
- Context
- Human decision
- Issue type (structure, content, style, terminology, voice)

Add any new patterns to the Patterns table.

**Success output**: Every piece of feedback logged. Patterns identified.

---

## Anti-Patterns (from human review log)

These are the mistakes this process exists to prevent:

| Anti-pattern | What happens | The fix |
|-------------|-------------|---------|
| Reference before reasoning | Page leads with a wall-of-text table | Tables at end. Decision support first. |
| Single value prop anchoring | Same reason given for an option every time | Minimum 5 value props across different dimensions. |
| Preamble before answer | Definitions, context, framing before the actual options | Answer the question in the first 3 lines. |
| Explicit questions as prose | "Do you want full control?" | State the option directly. No questions. |
| Lazy question framing | "What are my options?" (generic) | 5 Whys to find the real, specific question. |
| Hidden info in tabs | Decision-critical content buried in clickable UI | Decision info visible without clicking. Tabs for reference only. |
| Flowcharts as decision aids | Mermaid trees that diagram page structure | Prose for "should I?" decisions. Flowcharts for technical processes. |
| Hardware instead of architecture | "Uses NVENC" without explaining why the protocol separates workloads | Explain the architecture reason first. Hardware is secondary. |
| Invented terminology | New terms without checking glossary/v1/community | Glossary is source of truth. Check before using any term. |
| Dismissing legitimate options | "Off-chain is testing only" | Acknowledge all production-viable configurations. |
| Overwriting live pages | Writing directly to the live file | ALWAYS draft in `_workspace/drafts/`. NEVER touch the live file. |
