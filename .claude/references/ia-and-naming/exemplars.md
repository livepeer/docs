# Exemplary IA and Naming

> Pointer + analysis. Do not copy files — emulate the patterns.
> IA (Information Architecture) defines what pages exist, how they're grouped, and how they're named.
> **Naming is a recurring problem.** Apply these rules to ALL naming surfaces: section headings, tab names, accordion titles, step titles, sidebar titles, card titles, table headers.

---

### Section Naming Prompt (Gold Standard — Naming Methodology)

**File:** `workspace/plan/active/CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

**Why it's good:** The most rigorous naming methodology in the repo. A 6-step process: diagnose the section → generate 12 candidates → score on 5 axes (precision, depth, stability, clarity, brevity) → apply ranking rules with explicit penalties → winner filter → structured output. The core rule: "Do not name the examples; name the concept those examples instantiate." This prevents the most common Claude naming failure — literal labels instead of governing-concept descriptors.

**Key patterns:**
- **Core rule:** Prefer a governing-concept content descriptor over a literal contrast label
- 6 label types ranked worst→best: literal label → comparator label → generic descriptor → taxonomy mismatch → content descriptor → governing-concept label
- Hard rejects: "X vs Y" framing, comparison-as-title, wrong conceptual layer, stitched-together phrases, brittle numbering ("Three X")
- Scoring axes: Precision, Depth, Stability, Clarity, Brevity — each /5
- Winner filter: 10 explicit tests before choosing final title
- Semantic validation: "Is this term being used at its correct meaning?"
- Weak-label penalties: types, profiles, modes, models, overview, guide, basics — all penalised unless genuinely accurate
- Domain-anchor rule: title must retain the subject domain when needed for clarity
- Conditional precision: process → process-language, decision → decision-language, etc.
- Metadata as constraints: pageType, audience, purpose shape the title but are never the title

**Watch out:** This is a prompt for Claude, not a human reference. The methodology is excellent but verbose. The rules below extract the actionable parts.

---

## Naming Rules — Quick Reference (apply to ALL surfaces)

These rules apply everywhere a name appears: section headings, tab names, accordion titles, step titles, sidebar titles, card titles, table headers, page filenames.

### Length and format by surface

| Surface | Length | Capitalise | Format |
|---|---|---|---|
| **Section heading** (H1/H2) | 1-3 words | Title Case | Governing-concept descriptor |
| **sidebarTitle** | 1-3 words | Title Case | Short, scannable |
| **Tab name** (docs.json) | 1-2 words | Title Case | Domain noun |
| **Accordion title** | 2-5 words | Title Case | Content descriptor, not question |
| **Step title** | 2-4 words | Title Case | Action or outcome |
| **Card title** | 1-3 words | Title Case | Noun or noun phrase |
| **Table header** | 1-2 words | Title Case | Field descriptor |
| **frontmatter title** | Full descriptive | Title Case | Can be longer, SEO-aware |
| **filename** | kebab-case | lowercase | Match sidebarTitle concept |

### Hard rules (every surface)

1. **No questions** — never "How X Works" or "What Is Y"
2. **No question-frame words** — What, How, When, Why, Where
3. **No numbers** — never "Three Options" or "5 Steps"
4. **No comparators** — never "X vs Y", "Differences", "Comparison"
5. **No sentences** — a title is not a statement
6. **No generic descriptors** — "Overview", "Introduction", "Basics" only as last resort
7. **No negation** — never "What You Don't Need"
8. **No first person** — never "What You Earn"
9. **Name the concept, not the examples** — "Deployment Types" not "Three Setup Paths"

### Good vs bad — Section headings

| ✘ Bad | Why | ✔ Good |
|---|---|---|
| How Pools Work | Question framing | Pool Mechanics |
| What You Earn | First person + question | Reward Model |
| Before You Start | Temporal framing | Prerequisites |
| Three Setup Paths | Number + literal | Deployment Types |
| The Two Workload Types | Number + literal | AI Runtime Pipelines |
| What Changes | Vague + question | Node Modes |
| When to Use This | Temporal + question | Use Cases |
| Setup Overview | Generic | Setup Options |
| Batch vs Live AI | Comparator | Execution Workflows |

### Good vs bad — Step titles (StyledStep)

Steps name the ACTION the reader takes. Short verb + noun. Not a sentence. Not an instruction paragraph.

| ✘ Bad | Why | ✔ Good (from repo) |
|---|---|---|
| Look up a contract by name | Sentence, too long, lowercase | Contract Lookup |
| Go to the Livepeer Explorer | Instruction sentence | Open Explorer |
| Unbond (When You Want to Withdraw) | Sentence + parenthetical | Unbond LPT |
| Identify the orchestrator wallet address | Verbose instruction | Wallet Address |
| Monitor Your Position | First person | Position Monitoring |

**Best step titles in the repo** (from solutions pages, human-written):
- "Try the app" — direct, 3 words
- "Use the SDK" — direct, 3 words
- "Self-host the stack" — action + concept
- "Set pricing" — clean verb + noun
- "Bridge to Arbitrum" — action + destination
- "Activate on-chain" — action + context

**Step title rules:**
- 2-4 words maximum
- Verb + noun (imperative mood)
- Title Case
- No "Go to" or "Navigate to" — just name the destination or action
- No parenthetical asides
- No "your" (first person possessive)

### Good vs bad — Accordion titles

Accordions name the CONTENT inside. Not a question. Not "Click here to learn about X".

| ✘ Bad | Why | ✔ Good (from repo) |
|---|---|---|
| What are pools? | Question | Pool Mechanics |
| How does pricing work? | Question | Pricing Strategy |
| Click to learn more | Generic CTA | More on Crypto-Primitive Advantages |
| Details | Vague | Pool Due Diligence Checklist |

**Best accordion titles in the repo:**
- "From a Cloud Background?" — audience disambiguation (exception: question OK for audience entry)
- "Finding a Pool" — gerund + noun, names the content
- "Pool Due Diligence Checklist" — specific, names the deliverable
- "More on Crypto-Primitive Advantages" — depth indicator + specific topic

---

### Orchestrators Tab IA (Gold Standard)

**File:** `v2/orchestrators/_workspace/canonical/IA.mdx`
**Data:** `v2/orchestrators/_workspace/canonical/ia-data.json`

**Why it's good:** The most complete tab-level IA in the repo. Every page is listed with filename, sidebarTitle, sectionGroup, description, status, and notes. The section groups follow the approved naming rubric: "Start Here", "Concepts", "Quickstart", "Setup", "Deployment Details", "Workloads and AI", "Staking and Earning", "Config and Optimisation", "Monitoring and Tools", "Advanced Operations", "Roadmap and Funding", "Tutorials". The IA data file is consumed by a SearchTable for interactive browsing.

**Key patterns:**
- Complete page inventory: every page has filename, sidebarTitle, sectionGroup
- Section groups use approved naming rubric — professional, technical, under 3 words
- SearchTable rendering of IA data — filterable by section group
- Descriptions that answer "what question does this page address"
- sidebarTitle vs title distinction: sidebar is short (1-3 words), title is full
- Section flow follows the reader journey: orient → learn → do → optimise → extend
- Data-driven: ia-data.json is the structured source, IA.mdx renders it

**Watch out:** Some description fields are empty — the IA is not fully populated. The section group structure and naming convention are the primary reference. When designing IA for other tabs, follow this grouping model and naming standard.

---

### Naming Rubric Reference (from page-composition-framework)

**File:** `snippets/templates/pages/page-composition-framework.mdx` (heading rules section)

**Why it's good:** The heading examples table is the most actionable naming reference in the repo. Each example shows what's wrong, why, and the correct alternative with increasing quality levels.

**Key patterns (heading naming):**
- Use governing-concept content descriptors, not questions
- Technical, professional, under 3 words
- First match in specificity wins:
  - ✘ "How Pools Work" → ✔ "Pool Mechanics"
  - ✘ "What You Earn" → ✔ "Reward Model"
  - ✘ "Before You Start" → ✔ "Prerequisites"
  - ✘ "Three Setup Paths" → ~ "Setup Options" → ✔ "Deployment Types"
  - ✘ "The Two Workload Types" → ✔ "AI Runtime Pipelines"
- Never use: questions, question-frame words (What/How/When/Why), sentences, numbers, comparators, generic descriptors, taxonomy mismatches
- A good heading names what the section contains AND provides terminology definition

**Watch out:** These rules apply to page headings and section titles, not to frontmatter titles (which can be longer and more descriptive). sidebarTitle should follow these rules closely.
