# **Page Purpose & Structure**

## **ACTION MATRIX**

| **Action** | **Owner** | **Depends On** | **Status** |
| --- | --- | --- | --- |
| Confirm 6-type taxonomy is complete (no missing types, no overlaps) | Alison | SOT-00, this document | TO DO |
| Validate per-tab purpose skeletons against live nav | Alison | 02 (IA Matrix), live repo | TO DO |
| Assign purpose to every page in SOT-01 inventory | Alison | SOT-01, this document | TO DO |

## **How This Document Works**

**01** defines persona journeys — stages with questions. **02** maps journey stages to tabs and page paths. **This document** defines what each page type IS, what it looks like when done, and how to assess it. When audit-02 looks at a page, it checks: "what purpose type is this?" → looks up the criteria here → records the verdict.

## **The Structural Pattern**

Every persona tab follows the same structural order. Not every tab needs all 6 positions — but the ORDER is fixed. A tab never puts `reference` before `quickstart`.

| **Position** | **Purpose Type** | **Journey Phase** | **Reader State** | **Reader's Question** |
| --- | --- | --- | --- | --- |
| 1 | landing | Entry | Just arrived at a tab | "Where do I go?" |
| 2 | concepts | Discovery (stages 1–2) | Orienting, evaluating | "What is this, how does it work, and should I care?" |
| 3 | Get started/ quickstart | Activation (stages 3–4) | Ready to try | "Get me to first success." |
| 4 | operational/how-to | Operational (stages 5+) | Active, needs a specific task done | "How do I do this one thing?" |
| 5 | guides/tools/advanced | Operational / deepening | Active, needs to understand a system or tool | "How does this work in practice?" |
| 6 | reference | Any (on-demand lookup) | Looking something up | "What's the exact detail / answer / spec?" |

**Positions 1–3 are LINEAR** — the reader progresses through them in order on first visit. **Positions 4–6 are ON-DEMAND** — the reader jumps to them from anywhere when they need something specific.

## **Purpose Type Definitions**

### **1. **`landing`

**Job:** Route the reader to the right place within a tab.

**Journey function:** Entry point. Every persona's first touch with a tab. Also serves Newcomer stages 1 and 3 (Mission Control, Get Started, self-identification).

**What it contains:**

- Value proposition — one sentence: who this is for, what they'll get
- Navigation cards routing to key subsections
- Optional: "Already know what you need?" shortcuts for returning users

**What it does NOT contain:** Prose explanation, code blocks, steps, prerequisites. It routes — it doesn't teach.

**Mintlify components:**

- `CardGroup` with `Card` for persona routing or section navigation
- `GotoCard` for external destinations
- Optional: `Columns` for layout

**Assessment checklist (for audit-02):**

- [ ] First sentence identifies the audience and value
- [ ] At least 2 internal navigation links
- [ ] Zero dead-end links (every link resolves to a page with real content)
- [ ] No instructional content

**Examples in repo:** `v2/home/portal.mdx`, `v2/about/portal.mdx`, `v2/developers/portal.mdx`, `v2/gateways/gateways-portal.mdx`, `v2/orchestrators/orchestrators-portal.mdx`, `v2/lpt/token-portal.mdx`, `v2/community/community-portal.mdx`

### **2. **`overview`

**Job:** Orient the reader. Explain what something IS, how it works at a conceptual level, and route them into their journey. This type covers both section-level orientation AND core concepts — architecture, economics, protocol mechanics, marketplace models — because the reader needs orientation and understanding in the same place.

**Journey function:** Serves Discovery and Evaluation stages (stages 1–2 for all personas).

**What it contains:**

1. What this is (plain language, no unexplained jargon)
1. Why it matters to the reader (their benefit, their opportunity, their risk)
1. Core concepts — how it works at the level needed to make decisions
1. Journey routing — what to do next based on where the reader is headed

**What it does NOT contain:** Step-by-step procedures, executable commands, configuration details. If it has steps, it's a quickstart or how_to. If it has a flag table, it's a reference.

**Mintlify components:**

- `Tip` or `Note` for key takeaways
- `CardGroup` for "what's next" navigation / journey routing
- `Columns` for comparisons (e.g., hosted vs self-hosted, AI vs transcoding)
- Diagrams (Mermaid or embedded images) for architecture and flow

**Assessment checklist (for audit-02):**

- [ ] Explains what the thing IS in first 2 paragraphs
- [ ] Reader benefit or opportunity stated (not just Livepeer's perspective)
- [ ] Core concepts explained with at least one illustration method (diagram, analogy, example, comparison)
- [ ] Journey routing present (links to quickstart, how-tos, or deeper content)
- [ ] Minimum 150 words of substantive explanation
- [ ] No unexplained jargon (terms defined on first use or linked)

**Examples in repo:** `v2/about/livepeer-overview.mdx`, `v2/about/livepeer-network/overview.mdx`, gateway overview, gateway architecture, orchestrator overview, protocol overview pages

### **3. **`quickstart`

**Job:** Activate the reader. Get them from zero to first success for this persona's strategic objective. This is the single most important page type — persona activation tests (P1–P6 in 00) pass or fail here.

**Journey function:** Serves Setup and First Success stages (stages 3–4). The quickstart IS the main strategic/audience/actor objective for the tab:

- **Developers:** Send your first AI inference request / Stream your first video
- **Gateways:** Route your first job through your gateway
- **GPU Nodes:** Process your first job on your node
- **LP Token:** Complete your first delegation
- **Community:** Submit your first contribution

**What it contains:**

1. Goal statement — what the reader will achieve by the end
1. Prerequisites — what they need before starting
1. Steps — numbered, each with an action AND expected result
1. Verification — how to confirm it worked ("you should see...")
1. Next steps — where to go after activation

**What it does NOT contain:** Architecture explanation (link to the overview), exhaustive configuration (link to reference), troubleshooting beyond the 2–3 most common failures (link to reference).

**Mintlify components:**

- `Steps` (required — numbered step structure)
- `Warning` for critical prerequisites or destructive actions
- `Tip` for shortcuts or common variations
- `CodeBlock` with copy button for executable commands
- `Accordion` for optional detail that would break the flow

**Assessment checklist (for audit-02):**

- [ ] Goal stated in first line ("By the end of this guide, you will...")
- [ ] Prerequisites listed before any steps
- [ ] Steps numbered with `<Steps>` component
- [ ] Every step has an action AND expected result
- [ ] Verification step confirms success
- [ ] Testable: a new user can follow this and succeed without external help
- [ ] Not "Coming Soon" — this page MUST have real content

### **4. **`how_to`

**Job:** Get a specific task done. "How do I do X?" Assumes the reader already has context and has completed the quickstart.

**Journey function:** Serves operational stages (5+). Day-to-day tasks after activation: change pricing, update configuration, switch orchestrators, add a pipeline, fund your account, unstake.

**What it contains:**

1. Goal statement — what specific task this covers
1. Prerequisites — what must already be true
1. Steps — numbered, action + result per step
1. Optional: variations or alternatives
1. Related pages

**Difference from **`quickstart`**:** Quickstarts go zero → activation. How-tos do one specific task for someone already active.

**Difference from **`guide`**:** How-tos are procedural — step 1, step 2, step 3, done. Guides are exploratory — here's a system, here's how it works, here's how to use it well.

**Mintlify components:**

- `Steps` for procedures
- `CodeBlock` for commands
- `Accordion` for variations/alternatives
- `Warning` for destructive operations
- `Tabs` for OS/environment variations (Linux/Mac/Docker)

**Assessment checklist (for audit-02):**

- [ ] Goal stated clearly ("This guide shows you how to...")
- [ ] Prerequisites listed
- [ ] Steps are numbered
- [ ] Action + expected result per step
- [ ] Minimum 200 words of substantive content

### **5. **`guide`

**Job:** Help the reader understand and use a system, tool, or feature in practice. Not step-by-step — more "here's this thing, here's how it works, here's how to use it effectively."

**Journey function:** Serves operational and deepening stages. These pages make the difference between "I can follow instructions" and "I actually understand what I'm doing."

**Examples of guide content:**

- **Monitoring guide** — what to watch, what metrics mean, what to do when something looks off
- **Marketplace guide** — how pricing works, how to be competitive, how clients find you
- **Economics guide** — payment flows, clearinghouses, optimisation strategies
- **Explorer walkthrough** — how to evaluate orchestrators, what the data means
- **Model curation guide** — how to choose what to run, model ecosystem
- **Production patterns guide** — error handling, rate limits, scaling

**What it contains:**

1. What this system/tool/feature is and what it's for
1. How it works in practice (practical mechanics, not abstract theory)
1. How to use it effectively (tips, patterns, common approaches)
1. What to watch out for (common mistakes, gotchas)
1. Links to related how-tos (for specific tasks) and reference (for specs)

**What it does NOT contain:** Step-by-step numbered procedures (that's `how_to`), section-level orientation (that's `overview`), raw parameter lists (that's `reference`).

**Difference from **`overview`**:** Overviews orient and explain concepts to help readers EVALUATE and DECIDE. Guides explain systems to help readers USE and OPTIMISE. Overview: "here's what the marketplace is and why it matters." Guide: "here's how the marketplace works in practice and how to use it well."

**Mintlify components:**

- `Note` / `Tip` / `Warning` for practical advice
- `Accordion` for deep-dive sections
- `Columns` for comparisons
- Diagrams for system flows
- `CodeBlock` for diagnostic commands or example queries (illustrative, not procedural)
- `BorderedBox` for callouts

**Assessment checklist (for audit-02):**

- [ ] Clear statement of what system/tool/feature this covers
- [ ] Practical mechanics explained (not just theory)
- [ ] At least one of: tips, patterns, common approaches, things to watch out for
- [ ] Links to related how-tos and reference pages
- [ ] Minimum 300 words of substantive content

### **6. **`reference`

**Job:** Provide lookup content. Everything the reader needs to look up on demand: specs, parameters, FAQs, glossary, troubleshooting, contracts, API shapes, changelog.

**Journey function:** Serves ANY stage, on demand. Reader arrives with a specific question and needs a specific answer.

**Sub-types (all assessed as lookup content):**

| **Sub-type** | **Contains** | **Examples** |
| --- | --- | --- |
| Technical spec | Parameters, flags, endpoints, CLI commands | Config flags, API reference, CLI reference |
| Non-technical ref | Addresses, links, ecosystem data | Blockchain contracts, ecosystem tools |
| FAQ | Common questions with direct answers | Gateway FAQ, About FAQ |
| Glossary | Term definitions with links to deeper content | Livepeer glossary |
| Troubleshooting | Symptom → cause → fix entries | Gateway troubleshooting |
| Changelog | Dated entries of what changed | Release notes |

**What it contains:**

- Structured, scannable content (tables, accordions, definition lists — NOT prose paragraphs)
- Each entry is self-contained (reader gets the answer without reading another page)
- Links to how-tos or guides for deeper context

**What it does NOT contain:** Narrative explanation, tutorials, architectural context.

**Mintlify components:**

- Tables for parameter/flag/endpoint lists
- `Accordion` for FAQ and troubleshooting entries
- `CodeBlock` for API examples, diagnostic commands
- `Tabs` for different formats/languages
- `Warning` for breaking changes or destructive fixes

**Assessment checklist (for audit-02):**

- [ ] Content structured for lookup (tables, accordions, lists — not prose)
- [ ] Searchable (parameter names, error messages, terms are findable)
- [ ] Each entry self-contained
- [ ] Links to related how-to or guide for context
- [ ] For FAQ: at least 5 real questions (from actual user queries, not padding)
- [ ] For troubleshooting: organised by symptom (what user SEES), not system cause
- [ ] For glossary: Livepeer-specific definitions, not generic
- [ ] For technical spec: accurate (flag for SME if unsure)

## **Per-Tab Purpose Skeleton**

Minimum purpose types per tab. Tabs may have more pages, but shouldn't have fewer types.

| **Tab** | **Required Types** | **Notes** |
| --- | --- | --- |
| Home | landing, overview | Landing = Mission Control. Overview = Primer. Get Started sub-pages are landing (routing by goal). |
| About | overview, reference | Primarily overview (architecture, protocol, economics are all conceptual orientation). Reference = contracts, glossary, FAQ. |
| Platforms | landing, overview | Signpost section. Routes to external platform docs. Minimal depth. |
| Developers | landing, overview, quickstart, how_to, guide, reference | Full stack. Quickstarts = activation-critical (AI + Video). Guides = SDK usage, production patterns. |
| Gateways | landing, overview, quickstart, how_to, guide, reference | Full stack. Quickstart = install → configure → route first job. Guides = monitoring, marketplace, economics. Reference = config flags, troubleshooting, FAQ. |
| GPU Nodes | landing, overview, quickstart, how_to, guide, reference | Full stack. Same pattern as Gateways. Guides = AI setup, model curation. |
| LP Token | landing, overview, quickstart, how_to, reference | Quickstart = delegation walkthrough. Overview covers staking concepts. Reference = FAQ. May need guide for Explorer walkthrough / orchestrator evaluation. |
| Community | landing, overview, how_to, reference | Lighter stack. How-to = contribution workflow. Reference = channels, governance FAQ, ecosystem tools. |
| Resource HUB | reference | Pure reference. Glossary, tools, external links. No tutorials or conceptual content. |

## **Purpose × Journey Stage Matrix**

### **Developer (AI)**

| **Stage** | **Purpose Type** | **Why** |
| --- | --- | --- |
| 1. Discovery | overview | Understand what's possible |
| 2. Decision | overview | Compare integration paths, evaluate hosted vs BYOC |
| 3. Setup | quickstart | Get credentials, install tools |
| 4. First Success | quickstart | ACTIVATION — send first request, get result |
| 5. Exploration | how_to | Try different pipelines |
| 6. Integration | how_to + guide | Error handling, production patterns |
| 7. Going deeper | guide + cross-tab | BYOC, gateway options, custom pipelines |
| 8. Troubleshooting | reference | Symptom → fix lookup |

### **Gateway Operator**

| **Stage** | **Purpose Type** | **Why** |
| --- | --- | --- |
| 1. Discovery | overview | Understand the opportunity and economics |
| 2. Evaluation | overview | Assess requirements, costs, revenue potential |
| 3. Installation | quickstart | Install go-livepeer |
| 4. Configuration | quickstart | Configure for AI/transcoding/both |
| 5. On-chain setup | quickstart / how_to | Register, fund, set service URI |
| 6. First success | quickstart (verification) | ACTIVATION — route first job |
| 7. Marketplace | guide | Understand and use the marketplace effectively |
| 8. Operations | guide + how_to | Monitoring, health checks, scaling |
| 9. Economics | guide | Payment flows, clearinghouses, optimisation |
| 10. Troubleshooting | reference | Symptom → fix lookup |

### **Orchestrator**

| **Stage** | **Purpose Type** | **Why** |
| --- | --- | --- |
| 1. Discovery | overview | Understand the opportunity |
| 2. Evaluation | overview | Assess hardware, costs, earnings |
| 3. Installation | quickstart | Install go-livepeer |
| 4. On-chain registration | quickstart | Stake and register |
| 5. AI setup | how_to | Configure GPU pipelines |
| 6. First success | quickstart (verification) | ACTIVATION — process first job |
| 7. Model curation | guide | Choose what to run, understand model ecosystem |
| 8. Economics | guide + reference | Optimise earnings, lookup payment specs |
| 9. Governance | guide (cross-tab to LP Token) | Vote, participate |
| 10. Troubleshooting | reference | Symptom → fix lookup |

### **Delegator**

| **Stage** | **Purpose Type** | **Why** |
| --- | --- | --- |
| 1. Discovery | overview | Understand delegation |
| 2. Getting LPT | how_to | Acquire tokens, bridge to Arbitrum |
| 3. Choosing orchestrator | guide | Evaluate using Explorer, understand metrics |
| 4. Delegating | quickstart | ACTIVATION — stake LPT |
| 5. Monitoring | how_to | Check rewards |
| 6. Managing | how_to | Adjust delegation, unstake |
| 7. Governance | guide | Understand and participate in governance |
| 8. Troubleshooting | reference | Common issues lookup |

## **What Happened to the Diátaxis Categories**

For transparency — why this taxonomy differs from the 10-type SOT-00:

| **SOT-00 Type** | **What happened** | **Now lives in** |
| --- | --- | --- |
| landing | Kept | landing |
| overview | Expanded — includes conceptual orientation AND journey routing | overview |
| concept | Kept. Section-level concepts. Practical system explanations → guide. | overview or guide |
| tutorial | Renamed get-started — clearer about what it does (persona activation) | quickstart |
| how_to | Kept | how_to |
| reference | Expanded — FAQ, glossary, troubleshooting, changelog are sub-types | reference |
| faq | Folded into reference — lookup content | reference (sub-type) |
| glossary | Folded into reference — lookup content | reference (sub-type) |
| troubleshooting | Folded into reference — lookup by symptom | reference (sub-type) |
| changelog | Folded into reference — lookup by date | reference (sub-type) |
| (new) guide | Added. Fills gap between how_to (procedural) and overview (conceptual). Practical system/tool guides/explanations beyond concepts | guide |

**Why:** The 10-type taxonomy created categories that didn't match the actual page structure. Pages like "gateway monitoring," "marketplace mechanics," or "economics" weren't overviews (not orienting), weren't how-tos (not step-by-step), and weren't reference (not lookup). They're practical guides. The `guide` type gives them a home.

## **Decision Rules**

1. **Every page gets exactly one purpose.** If it's trying to be two things, split it or decide.
1. **Purpose is assigned by function, not location.** A page in About can be `overview` or `reference`. What it DOES determines its type.
1. **Assessment follows purpose.** A `landing` is assessed against `landing` criteria only. A `guide` is not penalised for lacking numbered steps.
1. **"Done" is binary per criterion.** Each checklist item is yes/no.
1. **Purpose drives content decisions.** A `quickstart` without steps is INCOMPLETE, not "low quality." The action is "write the steps."

## **DEFINITION OF DONE**

- [ ] 6-type taxonomy confirmed complete (no missing types, no overlaps)
- [ ] Per-tab purpose skeletons validated against live navigation
- [ ] Purpose × journey stage matrices validated for all personas
- [ ] Assessment checklists confirmed usable by audit-02
- [ ] Every purpose type has component guidance matching Mintlify/custom component library
- [ ] SOT-00 updated to reference this taxonomy (or flagged as superseded)