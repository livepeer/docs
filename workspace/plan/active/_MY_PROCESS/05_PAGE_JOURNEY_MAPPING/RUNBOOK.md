# Phase 05: Journey Validation

> Human role: None (automated)
> Automated: Persona path tracing, dead-end detection

---

## Inputs required

- Page briefs from Phase 04
- Persona definitions from Phase 00
- IA mapping from Phase 03

## Process

### Step 1: Trace each persona's journey

For each persona defined in Phase 00, trace their path through the tab:

1. Where do they enter? (portal, navigator, direct URL)
2. What do they read first? (entry state → concepts or quickstart)
3. How do they progress? (each page's exit state = next page's entry state)
4. Where do they exit? (outbound to another tab, or task complete)

### Step 2: Identify dead ends and blockers

- **Dead end**: A page with no clear next step (exit state has no matching entry state on another page)
- **Knowledge gap**: A page that assumes knowledge the previous page didn't provide
- **Blocker**: A prerequisite that hasn't been resolved by an earlier page (e.g., LPT stake required but not explained)

### Step 3: Document journey validation

For each persona:

| Step | Page | Entry state | Exit state | Block? |
|---|---|---|---|---|
| 1 | portal.mdx | Just arrived | Identified path | None |
| 2 | concepts/role.mdx | Identified path | Mental model formed | None |
| ... | ... | ... | ... | ... |

## Output

- Journey validation report per persona
- Dead ends identified and documented
- Knowledge gaps identified and documented

## Gate condition

- [ ] All personas have unblocked paths from entry to exit
- [ ] No dead-end pages (every page has a clear next step)
- [ ] No knowledge gaps (every page's entry state is satisfied by a previous page's exit state)
