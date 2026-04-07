# Phase 04: Page Briefs (from Content Design)

> Human role: None (automated)
> Automated: Brief generation from content design + research packs

---

## Inputs required

- Content design document from Phase 03 (persona journey mapped to pages)
- Research packs from Phase 02
- Relevant exemplar from `_MY_PROCESS/EXEMPLARS/`

## What a page brief IS

A page brief is the contract between the content design (what the reader needs) and the content pass (what gets written). It answers:

1. **Where is this page in the persona's journey?** (entry state, exit state, previous/next page)
2. **What specific thing does the reader learn here?** (not "about X" — the actual knowledge transfer)
3. **What product/tech concepts must be explained?** (from the domain architecture mapping)
4. **What sources back the content?** (from research packs)
5. **What does the exemplar for this page type look like?** (from EXEMPLARS/)

## Process

### Step 1: Create brief per page from content design

For every page in the content design, create a brief:

```markdown
## Page Brief: {page title}

**Path**: v2/{tab}/{section}/{page}.mdx
**Journey position**: Step {N} of {persona}'s journey through {section}

### Content design context
- **Domain layer**: {which part of the product/tech architecture this page teaches}
- **Previous page**: {path} — reader arrives knowing: {exit state of previous page}
- **This page teaches**: {THE SPECIFIC THING — not "about X" but "how X works, specifically Y and Z"}
- **Next page**: {path} — reader leaves knowing: {entry state for next page}

### Frontmatter contract (from Phase 03)
- **pageType**: {value}
- **audience**: {value}
- **purpose**: {value}
- **lifecycleStage**: {value}
- **complexity**: {value}

### What the reader needs to learn (in order)
1. {concept/fact/mechanism 1} — information type: {factual/procedural/conceptual/analytical}
2. {concept/fact/mechanism 2} — information type: {type}
3. ...

### Edge cases / secondary persona needs
- {edge case 1}: covered in this page OR "see guides/{page}" for depth
- {edge case 2}: ...

### Primary sources
- {source 1} (T1) — for {which claims}
- {source 2} (T2) — for {which claims}

### Exemplar to load
- `EXEMPLARS/{type}-exemplar.md` — load this before writing

### Voice register
- Audience: {audience token}
- Lead with: {value/outcome/fact}
- Assume reader knows: {what they learned on previous page}
- Do not explain: {what they already know}
```

### Step 2: Validate brief against content design

For each brief:
- [ ] Entry state matches previous page's exit state EXACTLY
- [ ] Exit state matches next page's entry state EXACTLY
- [ ] "What the reader needs to learn" maps to the domain architecture
- [ ] Every learning item has at least one source
- [ ] Edge cases are either handled or routed to guides/
- [ ] The exemplar matches the pageType

## Output

- Page brief per page (stored in `v2/{tab}/_workspace/briefs/`)
- Each brief traces back to a persona journey step AND a domain architecture layer

## Gate condition

- [ ] Every page has a complete brief
- [ ] Entry/exit state chain is unbroken across the section
- [ ] Every learning item has sources
- [ ] Briefs validated against content design
