# IA & Naming — Collated Best Practice

> Collated from repo research sources. Verified against canonical files.
> Sources: `section-naming.md`, `naming-research.md`, `content-naming.md`, `page-composition-framework.mdx`, orchestrators IA

---

## Label Class Taxonomy (Ranked Worst → Best)

**Source:** `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

| Rank | Class | Definition | Example |
|---|---|---|---|
| 6 (worst) | **Literal label** | Names the visible examples directly | "Batch vs Live Video" |
| 5 | **Comparator label** | Names the relationship/comparison, not the content | "Operational Workload Differences" |
| 4 | **Generic descriptor** | Valid umbrella, too weak or broad | "AI Workload Modes" |
| 3 | **Taxonomy mismatch** | Uses the wrong conceptual category | "AI Job Architectures" (when it's about runtime) |
| 2 | **Content descriptor** | Names what the section is actually about | "AI Runtime Profiles" |
| 1 (best) | **Governing-concept label** | Names the underlying concept behind the examples | "Execution Workflows" |

**Core rule:** Do not name the examples; name the concept those examples instantiate.

---

## Section Naming Methodology

**Source:** `section-naming.md` (6-step process)

1. **Diagnose** — reader question, primary distinction, correct conceptual layer, surface labels to avoid
2. **Generate** — 12 candidate titles, 1-4 words, docs-navigation friendly
3. **Score** — 5 axes: Precision, Depth, Stability, Clarity, Brevity (/5 each, total /25)
4. **Rank** — apply penalties for literal labels, comparators, generics, taxonomy mismatches, brittle numbering
5. **Filter** — 10 explicit tests before choosing winner
6. **Output** — structured format with winner + rationale

---

## Conceptual Layers (Choose the Right One)

**Source:** `section-naming.md`

| Layer | Use when the section is about... |
|---|---|
| subject | A thing or entity |
| concept | An idea or principle |
| process | A sequence of steps |
| decision | A choice between options |
| framework | A structured model or approach |
| policy | A rule or requirement |
| audience | Who the section serves |
| lifecycle | A progression over time |
| reference | Lookup information |

**Conditional precision rule:** If the section is about a process, use process-language. If about a decision, use decision-language. Don't default to one style.

---

## Semantic Validation Rules

**Source:** `section-naming.md` + `naming-research.md`

- Use terms at their correct meaning — "architecture" is system structure, not runtime behaviour
- Do not use "modality" unless classifying text/image/audio/video media types
- Do not use "inference" if the section describes broader real-time processing
- Penalise "workload" when it's just a vague umbrella
- Domain-anchor rule: title must retain the subject domain when needed for clarity
- If a title could apply to unrelated domains, include the domain noun

---

## Weak-Label Penalties

**Source:** `section-naming.md`

Penalise these unless genuinely accurate:
- **types** — unless classifying categories
- **profiles** — unless describing stable groupings
- **modes** — unless describing distinct operational states
- **models** — unless describing frameworks or formal approaches
- **overview** — unless no stronger descriptor exists
- **guide** — unless the section is actually guidance
- **basics** / **essentials** / **foundations** — unless explicitly introductory

---

## IA Section Flow (Orchestrators Tab — Gold Standard)

**Source:** `v2/orchestrators/_workspace/canonical/IA.mdx`

| Position | Section Group | Reader State |
|---|---|---|
| 1 | Start Here | Arriving — needs orientation |
| 2 | Concepts | Learning — building mental model |
| 3 | Quickstart | Trying — wants to verify hardware |
| 4 | Setup | Doing — installing and configuring |
| 5 | Deployment Details | Specialising — choosing operational model |
| 6 | Workloads and AI | Expanding — adding capabilities |
| 7 | Staking and Earning | Monetising — understanding economics |
| 8 | Config and Optimisation | Tuning — improving performance |
| 9 | Monitoring and Tools | Operating — day-to-day management |
| 10 | Advanced Operations | Scaling — complex configurations |
| 11 | Roadmap and Funding | Planning — future and funding |
| 12 | Tutorials | Learning — guided walkthroughs |

**Pattern:** orient → learn → do → optimise → extend. Apply this progression to other tabs.

---

## sidebarTitle vs title

**Source:** `orchestrators IA` + `page-composition-framework.mdx`

| Field | Length | Purpose | Example |
|---|---|---|---|
| **sidebarTitle** | 1-3 words | Navigation scanning | "Join a Pool" |
| **title** | Full descriptive | SEO + page heading | "Join a Pool: Contribute GPU Capacity to an Existing Orchestrator" |
| **filename** | kebab-case | URL path | `join-a-pool.mdx` |

Rule: sidebarTitle follows the heading naming rules (no questions, under 3 words, governing-concept). title can be longer and more descriptive.