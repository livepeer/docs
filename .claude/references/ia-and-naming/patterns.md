# IA & Naming — Patterns

> Extracted rules linked to repo context. Apply these when designing IA or naming anything.
> Naming rules for all surfaces are in `exemplars.md` — this file covers IA design patterns.

---

## Pattern 1: Ownership-first IA design

Before designing any tab's IA, map what every OTHER tab owns. Content duplication across tabs is a structural failure.

```
Step 1: For each other tab, answer: "What does [Tab X] own that this tab should never duplicate?"
Step 2: Record as a content boundary map
Step 3: Design this tab's IA within those boundaries
```

**Linked to:** `prompts/exemplars.md` → Page Content / IA Research Prompt

---

## Pattern 2: Reader journey progression

Sections flow from orientation to mastery: orient → learn → do → optimise → extend.

| Stage | Section type | Reader state |
|---|---|---|
| Orient | Start Here, Portal | "Where am I? What can I do?" |
| Learn | Concepts | "How does this work?" |
| Do | Quickstart, Setup | "Let me try / install it" |
| Optimise | Config, Tuning | "Make it better" |
| Extend | Advanced, Tutorials | "Do more complex things" |

**Linked to:** `ia-and-naming/best-practice.md` → IA Section Flow

---

## Pattern 3: Data-driven IA

IA is a data file consumed by a search table — not just a markdown list.

```
ia-data.json → SearchTable in IA.mdx → filterable by section group
```

Every page entry has: filename, sidebarTitle, sectionGroup, description, status, notes.

**Linked to:** `v2/orchestrators/_workspace/canonical/IA.mdx`

---

## Pattern 4: Three naming fields per page

| Field | Rules | Purpose |
|---|---|---|
| filename | kebab-case, matches sidebarTitle concept | URL path |
| sidebarTitle | 1-3 words, Title Case, governing-concept | Navigation |
| title | Full descriptive, Title Case, SEO-aware | Page heading + search |

All three must be consistent. If the sidebarTitle is "Pool Mechanics", the filename is `pool-mechanics.mdx`, and the title might be "Pool Mechanics: How Orchestrator Pools Distribute Work".

**Linked to:** `ia-and-naming/best-practice.md` → sidebarTitle vs title

---

## Pattern 5: Section group naming

Section groups in docs.json follow the same naming rules as headings: governing-concept, 1-3 words, no questions, no numbers.

Good section group names from orchestrators tab:
- "Start Here" (not "Getting Started" or "Introduction")
- "Deployment Details" (not "How to Deploy" or "Setup Options")
- "Config and Optimisation" (not "Settings" or "Tuning Your Node")
- "Staking and Earning" (not "Economics" or "How to Earn")

**Linked to:** `v2/orchestrators/_workspace/canonical/IA.mdx`

---

## Pattern 6: Naming diagnosis before generation

Never name something without first diagnosing what it IS:
1. What is the reader's question?
2. What is the primary distinction this section makes?
3. What conceptual layer is it? (concept / process / decision / reference / etc.)
4. What surface labels should be avoided?

Only then generate candidates.

**Linked to:** `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

---

## Quick checklist (apply to every IA or naming decision)

- [ ] Ownership map done (what do other tabs own?)
- [ ] Section flow follows reader journey progression
- [ ] filename / sidebarTitle / title are consistent
- [ ] sidebarTitle is 1-3 words, governing-concept
- [ ] No questions, numbers, comparators, or generic labels
- [ ] Correct conceptual layer chosen (process ≠ concept ≠ reference)
- [ ] Section groups use same naming rules as headings