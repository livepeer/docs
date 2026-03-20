# Copywriting Framework

# 1\. Framework

# 2\. Research & Sources

# **Research Sources & Primary Takeaways**

**Livepeer Docs Copy Framework — Supporting Evidence** **Version 1.0 — March 2026**

<CustomDivider />

## **Purpose**

This document records the external frameworks and standards that informed the Livepeer Docs Copy Framework. For each source, the primary takeaway — the specific principle extracted and applied — is noted. References back to framework layers are included.

<CustomDivider />

## **Primary Frameworks**

<CustomDivider />

### **1\. Diátaxis — Information Architecture and Page Type Discipline**

**Source:** diataxis.fr — Daniele Procida **Type:** Information architecture framework

#### **What it is**

Diátaxis separates documentation into four types, each with a distinct purpose and writing mode:

* **Tutorials** — learning-oriented. The reader acquires a skill.  
* **How-to guides** — task-oriented. The reader achieves a goal.  
* **Reference** — information-oriented. The reader consults facts.  
* **Explanation** — understanding-oriented. The reader builds a mental model.

#### **Primary takeaways applied to this framework**

**Every page has one job.** Diátaxis's core discipline is that mixing page types produces pages that serve no reader well. An explanation embedded in a how-to guide interrupts the task. A tutorial buried in a reference page obscures the fact. → *Applied in L2 (content sequence rules) and L3 (one paragraph, one job).*

**Know what question each page is answering.** Before writing, state the question the page answers. If it cannot be stated in one sentence, the page scope is wrong. → *Applied in L1 (persona path mapping) — every row in the mapping table must answer a stated question.*

**Every page must have a clear onward path.** Diátaxis pages are not islands. Each has an explicit next step appropriate to the reader's current position in the documentation system. → *Applied in L2 (step 7: next page) and L5 (gate item: no introduced path without routing).*

**If the content may be stale, update it — do not apologise for it inline.** Inline disclaimers about accuracy undermine the reader's trust at the point they most need it. Temporal metadata belongs in version fields. → *Applied in L4 (banned: inline disclaimers) and L5 (gate item: no hedge at end of section).*

<CustomDivider />

### **2\. Google Technical Writing Courses**

**Source:** developers.google.com/tech-writing **Type:** Sentence-level clarity standard

#### **What it is**

Google's official technical writing courses teach clear documentation through: active voice, short sentences, precise word choice, and self-editing discipline. Designed for engineers writing documentation for engineers.

#### **Primary takeaways applied**

**Active voice, direct assertion.** Passive constructions obscure agency and weaken claims. "The node earns ETH" is stronger than "ETH is earned by the node." → *Applied throughout L4 (banned list includes all weakened value constructions).*

**Remove filler before publishing.** Google's self-editing pass targets: throat-clearing openers, redundant pairs (basic and fundamental), and announcements of what the page will do. → *Applied in L4: `This page covers`, `The reason is straightforward`, `Understanding X is essential`.*

**Be precise with numbers.** Vague qualifiers ("low", "significant", "consistently") are always replaceable with numbers. If the number is unknown, flag it as unknown — do not substitute a vague qualifier. → *Applied in L4 (banned: `meaningful`, `real`, `significant`, `consistently` without a number) and L5 (gate: unresolved REVIEW flags in decision-critical positions).*

**Short sentences over compound sentences.** Every conjunction is a potential split. Compound sentences that contain both a value claim and a condition should be split. → *Applied in L4: `[value] — if [condition]` is banned. Split into two sentences.*

<CustomDivider />

### **3\. Microsoft Writing Style Guide**

**Source:** docs.microsoft.com/style-guide **Type:** Product-facing tone, terminology, and procedure standard

#### **What it is**

Microsoft's style guide governs product documentation tone, UI language, procedure writing, and terminology consistency. Particularly strong for step-by-step instructions and interface language.

#### **Primary takeaways applied**

**Procedures are written in imperative, second person.** "Select the GPU tier" not "The operator should select the GPU tier." Instructions are commands, not descriptions. → *Applied in L3 (paragraph rules: staged action paths are imperative) and L4 (banned: third-person generalisations on action-oriented pages).*

**Describe the goal before the procedure.** Every how-to section opens with what the reader will achieve, then how. Mechanism before outcome is a structural inversion. → *Applied in L2 (mandatory sequence: operator outcome first).*

**Avoid unnecessary conditions in procedures.** "If you have an NVIDIA GPU, you can run transcoding" should be "To run transcoding, you need an NVIDIA GPU." Conditions become prerequisites stated once, not hedges repeated throughout. → *Applied in L4: `if [condition]` banned in body prose.*

**One idea per sentence in procedures.** Compound procedural sentences create ambiguity about what is required and what is optional. → *Applied in L3: one paragraph, one job.*

<CustomDivider />

### **4\. Red Hat Modular Documentation**

**Source:** redhat-documentation.github.io/modular-docs **Type:** Reusable product documentation structure

#### **What it is**

Red Hat's modular documentation standard defines three module types — concept, procedure, and reference — each self-contained and reusable. Built on user-story-based documentation: every module is written to answer a specific user question.

#### **Primary takeaways applied**

**Write to a specific user story, not a general audience.** Every module begins with a defined user (role \+ goal). Writing to "operators" in general produces copy that serves no operator specifically. → *Applied in L1 (persona path mapping table) and L7 (pattern observer: hedges clustering in one section indicate undefined reader).*

**Single-source, don't repeat.** Content that exists on a linked page should not be reproduced on the current page. Reproduction creates maintenance debt and dilutes the clarity of each page's purpose. → *Applied in L3: tables and diagrams stand alone; prose restating a table row is deleted. L4: pages that re-explain content from linked prerequisite pages fail the gate.*

**Prerequisites are stated explicitly at module opening.** A module that assumes knowledge must declare that assumption. A module that re-explains that knowledge instead is structurally wrong. → *Applied in L2 (prerequisites stated, not restated) and L4 (banned: re-delivery of content from a linked page).*

<CustomDivider />

### **5\. DITA (Darwin Information Typing Architecture)**

**Source:** docs.oasis-open.org/dita **Type:** Enterprise documentation taxonomy and reuse system

#### **What it is**

DITA is a structured content standard for large-scale technical documentation. Its information typing discipline (topic, task, concept, reference) enforces separation of content concerns. Most relevant for systems with hundreds of pages and multiple content types.

#### **Primary takeaways applied**

**Information typing prevents scope creep.** When a page type is undefined, writers fill it with whatever they know. Typing a page as concept, task, or reference constrains what belongs there. → *Applied in L2 (content sequence rules per page type) and L5 (gate: page must have a defined type that matches its content).*

**Taxonomy built around real use cases, not product structure.** DITA's task topics are defined by what the user does, not by how the product is organised. Documentation that mirrors the product's internal architecture instead of the user's workflow fails the user. → *Applied in L7 (pattern observer: if majority path is buried, the IA was built around edge cases or product structure, not operator reality).*

<CustomDivider />

### **6\. Public SKILL.md Standards**

**Sources:**

* `github/awesome-copilot` — documentation-writer skill (Diátaxis Documentation Expert)  
* `metabase/metabase` — docs-review skill against writing style guide  
* `getsentry/skills` — blog-writing-guide for technical voice  
* `zocomputer/skills` — copywriting SKILL.md for conversion copy  
* OpenAI `openai/skills` — agent skills as folders of instructions, scripts, and resources  
* Anthropic `anthropics/skills` — basic skill as SKILL.md with YAML frontmatter and instructions

#### **Primary takeaways applied**

**Skills are executable constraints, not suggestions.** A SKILL.md is read by an agent before it acts. It must be written as executable rules, not guidelines. Vague guidance ("write clearly") produces inconsistent output. Specific rules ("banned words: not, rather than, if") produce consistent output. → *Applied in L4 design: the banned list is formatted as a machine-readable ruleset, not a style preference.*

**Frontmatter as machine-readable metadata.** YAML frontmatter (`pageType`, `audience`, `purpose`) allows automated tooling to classify pages and enforce type-appropriate rules without human review of every page. → *Applied in L5 (gate) and Document 4 (script enforcement design).*

**Separate skill files for separate concerns.** A single monolithic SKILL.md that attempts to govern everything produces agent confusion. Separate skills for copy rules, structural rules, and audit rules are independently invokable and composable. → *Applied in Document 4 (implementation design: separate skill files per layer).*

<CustomDivider />

## **Applied Rules Traceability**

| Rule in framework | Source framework | Specific principle |
| :---- | :---- | :---- |
| One page, one job | Diátaxis | Page type discipline |
| Operator outcome before mechanism | Microsoft Style Guide | Goal before procedure |
| No inline disclaimers | Diátaxis | Stale content is updated, not apologised for |
| Banned: This page covers | Google Technical Writing | No throat-clearing openers |
| Banned: if \[condition\] in body prose | Microsoft Style Guide | Conditions become stated prerequisites |
| Banned: not \[X\] | Google Technical Writing | Direct assertion; no contrast-by-diminishment |
| Banned: vague intensifiers | Google Technical Writing | Replace with numbers |
| Single-source; no prose restating tables | Red Hat Modular Docs | Single-source principle |
| User story at module opening | Red Hat Modular Docs | Write to specific user, not general audience |
| Page type defines content scope | DITA | Information typing |
| IA built around user workflows | DITA | Task topics by user action, not product structure |
| Banned list as machine-readable rules | SKILL.md standards | Executable constraints over guidelines |
| Separate skill files per concern | SKILL.md standards | Composable, independently invokable skills |

# 3\. Issue Audit & Examples

# **Concrete Issue Map & Banned Pattern Audit**

**Livepeer Docs Copy Framework — Document 3** **Version 1.0 — March 2026**

<CustomDivider />

## **Part A — Concrete Issue Examples**

Each issue is named, located, mapped to a framework layer, and referenced to the research source that identifies it as a failure mode.

<CustomDivider />

### **CATEGORY 1: THROAT-CLEARING & META-COMMENTARY**

**Issue 1.1 — Page Announcement**

* **Location:** `business-case.mdx`, opening paragraph  
* **Example:** `This page covers what professional-grade Orchestrator operation looks like in practice.`  
* **Error name:** Throat-clearing opener  
* **Framework layer:** L4 (banned: `This page [verb]`)  
* **Research ref:** Google Technical Writing — "no announcements of what the page will do"  
* **Rule:** Delete. Start with the content.

<CustomDivider />

**Issue 1.2 — Instructive Preamble**

* **Location:** `operator-rationale.mdx`, What Orchestrators Earn section  
* **Example:** `Understanding both is essential before modelling any return on investment.`  
* **Error name:** Bridge-announcement  
* **Framework layer:** L4 (banned: `Understanding X is essential`)  
* **Research ref:** Google Technical Writing — throat-clearing self-editing rule  
* **Rule:** Delete. The bridge IS the content. State the asymmetry directly.

<CustomDivider />

**Issue 1.3 — Filler Transition**

* **Location:** `business-case.mdx`, Why Service Fees Scale  
* **Example:** `The reason is straightforward:`  
* **Error name:** Filler transition  
* **Framework layer:** L4 (banned construction class: announcements before facts)  
* **Research ref:** Google Technical Writing  
* **Rule:** Delete the clause. Begin with the fact.

<CustomDivider />

**Issue 1.4 — Empty Qualifier After Number**

* **Location:** `operator-rationale.mdx`, ETH for Gas accordion  
* **Example:** `Gas on Arbitrum L2 is low but not zero.`  
* **Error name:** Restated number  
* **Framework layer:** L4 (banned: `low but not zero`)  
* **Research ref:** Google Technical Writing — replace vague qualifiers with numbers  
* **Rule:** Delete. The dollar range already carries the meaning.

<CustomDivider />

### **CATEGORY 2: CONTENT DUPLICATION WITHOUT VALUE**

**Issue 2.1 — Visual Duplication**

* **Location:** `business-case.mdx`, Hobbyist vs Commercial section  
* **Example:** Mermaid diagram with seven nodes, followed by table with identical seven rows  
* **Error name:** Same-information redundancy  
* **Framework layer:** L3 (each representation must show something the other cannot)  
* **Research ref:** Red Hat Modular Docs — single-source principle  
* **Rule:** Diagram becomes a decision-path flowchart. Table retains the comparison data.

<CustomDivider />

**Issue 2.2 — Sub-Minimal Diagram**

* **Location:** `business-case.mdx`, Why Service Fees Scale  
* **Example:** Two-box diagram: `Jobs × price → ETH` / `Stake × rate → LPT`  
* **Error name:** Prose-restating diagram  
* **Framework layer:** L3 (tables and diagrams stand alone; prose restating either is deleted)  
* **Research ref:** Red Hat Modular Docs — single-source principle  
* **Rule:** Delete diagram. Replace with a concrete numerical example in prose.

<CustomDivider />

**Issue 2.3 — Prerequisite Re-delivery**

* **Location:** `business-case.mdx`, Why Service Fees Scale  
* **Example:** Re-explanation of how inflation rewards work, already covered on a linked page  
* **Error name:** Single-source violation  
* **Framework layer:** L2 (prerequisites stated, not restated)  
* **Research ref:** Red Hat Modular Docs — modules assume declared prerequisites  
* **Rule:** Delete. Open at the next layer of knowledge. Trust the linked page to do its job.

<CustomDivider />

### **CATEGORY 3: FAILS TO ANSWER THE READER'S ACTUAL QUESTION**

**Issue 3.1 — Named Threshold, Value Omitted**

* **Location:** `operator-rationale.mdx`, LPT Stake accordion  
* **Example:** `Acquiring enough LPT to compete in the active set is the primary entry barrier...` \[REVIEW: confirm threshold\]  
* **Error name:** Named-but-empty critical variable  
* **Framework layer:** L5 (gate: unresolved REVIEW flag in decision-critical position)  
* **Research ref:** Google Technical Writing — precision; if unknown, declare it unknown explicitly  
* **Rule:** Verify and publish the number, or block the section from merge.

<CustomDivider />

**Issue 3.2 — Dangling Claim**

* **Location:** `business-case.mdx`, Infrastructure investment accordion  
* **Example:** `The break-even analysis is different.` (no analysis follows)  
* **Error name:** Asserted-but-unsupported claim  
* **Framework layer:** L3 (every "this is different" must show the difference)  
* **Research ref:** Google Technical Writing — precision; Microsoft Style Guide — goal before procedure  
* **Rule:** Show the analysis. If not on this page, link to the page that does.

<CustomDivider />

**Issue 3.3 — Link Dump Without Decision Support**

* **Location:** `operator-rationale.mdx`, Research Tools section  
* **Example:** Four links with short labels, no guidance on what conclusion to draw at each  
* **Error name:** Unactionable resource list  
* **Framework layer:** L2 (high-value actions include guidance, not just the resource)  
* **Research ref:** Diátaxis — every page has an onward path; Microsoft Style Guide — goal before procedure  
* **Rule:** For each link, state the decision it enables and the threshold that makes it meaningful.

<CustomDivider />

**Issue 3.4 — Strawman Rebuttal**

* **Location:** `operator-rationale.mdx`, Video vs AI section  
* **Example:** `AI inference is not a guaranteed shortcut to earnings.`  
* **Error name:** Arguing against an unstated claim  
* **Framework layer:** L4 (banned: `not [X]`)  
* **Research ref:** Google Technical Writing — direct assertion; no contrast-by-diminishment  
* **Rule:** Delete. The table's "Variable — demand-dependent" cell already handles this.

<CustomDivider />

### **CATEGORY 4: NOT PERSONA-FIRST / AUDIENCE MISMATCH**

**Issue 4.1 — Third-Person Generalisation**

* **Location:** `business-case.mdx`, opening  
* **Example:** `Most Orchestrator operators start by thinking about LPT inflation rewards.`  
* **Error name:** External address; reader excluded from sentence  
* **Framework layer:** L1 (persona path mapping defines the reader; writing addresses them directly)  
* **Research ref:** Red Hat Modular Docs — write to specific user story; Microsoft Style Guide — second person  
* **Rule:** Address the reader. State what they are here for. Trust them to self-locate.

<CustomDivider />

**Issue 4.2 — Excludes Part of Target Audience**

* **Location:** `operator-rationale.mdx`, opening  
* **Example:** `Owning a GPU is not enough to make an Orchestrator profitable.`  
* **Error name:** Partial audience exclusion from sentence one  
* **Framework layer:** L1 (every row in the persona mapping table must be served)  
* **Research ref:** Red Hat Modular Docs — user story at module opening  
* **Rule:** Rewrite so both hardware-owning operators and hardware-evaluating operators are addressed.

<CustomDivider />

**Issue 4.3 — Third-Person Section Header on Operator-Facing Page**

* **Location:** `business-case.mdx`, section header  
* **Example:** `## The Commercial Operator Landscape`  
* **Error name:** External framing; reader is described, not addressed  
* **Framework layer:** L1 (operator profiles; reader self-locates by functional criteria)  
* **Research ref:** Microsoft Style Guide — second-person headers in procedure sections  
* **Rule:** Reframe header as the reader's question or as a direct routing prompt.

<CustomDivider />

**Issue 4.4 — UK Currency for International Audience**

* **Location:** `operator-rationale.mdx`, Hardware accordion  
* **Example:** `at £800 for an RTX 4090 and £30/month earnings`  
* **Error name:** Region-scoped currency for unscoped audience  
* **Framework layer:** L4 (Currency Rule: USD default for international content)  
* **Research ref:** Microsoft Style Guide — localisation standards  
* **Rule:** USD throughout. If region-specific pricing is needed, state the scope once.

<CustomDivider />

**Issue 4.5 — Diplomatic Non-Statement**

* **Location:** `business-case.mdx`, after comparison table  
* **Example:** `Neither model is superior - they reflect different operator goals and capabilities.`  
* **Error name:** Defensive editorial padding  
* **Framework layer:** L3 (final sentence must be a fact, number, or next step — never a restatement)  
* **Research ref:** Google Technical Writing — every sentence must carry information  
* **Rule:** Delete. The table makes the comparison. Add a routing sentence if needed.

<CustomDivider />

### **CATEGORY 5: NO CLEAR USER JOURNEY / MISSING NEXT STEP**

**Issue 5.1 — Consequence Without Prevention**

* **Location:** `operator-rationale.mdx`, ETH for Gas accordion  
* **Example:** `A depleted ETH wallet causes missed reward rounds (LPT permanently foregone)...` \[no next step\]  
* **Error name:** Warning without remediation  
* **Framework layer:** L2 (every introduced path must be routed; L3: final sentence is a next step)  
* **Research ref:** Diátaxis — every page has an onward path; Microsoft Style Guide — goal before procedure  
* **Rule:** Follow every consequence statement with the specific prevention action and a link.

<CustomDivider />

**Issue 5.2 — Leverage Claim Without Operationalisation**

* **Location:** `business-case.mdx`, Building Gateway relationships  
* **Example:** `An Orchestrator running a pipeline that a Gateway cannot source has real negotiating leverage.`  
* **Error name:** Asserted value with no action path  
* **Framework layer:** L3 (every introduced path developed or linked)  
* **Research ref:** Diátaxis — onward path; Microsoft Style Guide — goal then procedure  
* **Rule:** Follow with: where to make contact, what to offer, what to reference.

<CustomDivider />

**Issue 5.3 — Third Path Introduced, Not Routed**

* **Location:** `business-case.mdx`, after comparison table  
* **Example:** `Many operators run a hybrid: inflation rewards provide a base, service fees from AI and video workloads provide the upside.`  
* **Error name:** Abandoned path — majority model treated as footnote  
* **Framework layer:** L2 (majority path is featured; L0 Q2 must describe the majority real-world model)  
* **Research ref:** DITA — IA built around real use cases; Diátaxis — onward path  
* **Rule:** The hybrid model is the featured path. It requires its own page. A footnote is not sufficient.

<CustomDivider />

### **CATEGORY 6: VALUE PROPOSITION NOT FIRST**

**Issue 6.1 — Mechanism-First Frontmatter**

* **Location:** `business-case.mdx`, description field  
* **Example:** `How commercial Orchestrators operate - earning from service fees rather than inflation...`  
* **Error name:** Mechanism-first description; `rather than` construction  
* **Framework layer:** L2 (operator outcome first); L4 (banned: `rather than`)  
* **Research ref:** Microsoft Style Guide — goal before procedure  
* **Rule:** Lead with the outcome. Delete `rather than`.

<CustomDivider />

**Issue 6.2 — Cost Before Value on Evaluation Page**

* **Location:** `operator-rationale.mdx`, opening  
* **Example:** Profit formula as opening element, framed as a viability test  
* **Error name:** Inverted value sequence  
* **Framework layer:** L2 (mandatory sequence: operator outcome first, economics fourth)  
* **Research ref:** Microsoft Style Guide — goal before procedure; Diátaxis — page type discipline  
* **Rule:** Establish the opportunity before the cost structure.

<CustomDivider />

### **CATEGORY 7: VAGUE / IMPRECISE LANGUAGE**

**Issue 7.1 — Undefined Performance Terms**

* **Location:** `business-case.mdx`, Latency targets  
* **Example:** `Consistently slow responses — even within acceptable job completion time — affect long-term selection probability.`  
* **Error name:** Two undefined thresholds in a performance-critical sentence  
* **Framework layer:** L4 (banned: `consistently` without number; vague operational standards)  
* **Research ref:** Google Technical Writing — precision; replace qualifiers with numbers  
* **Rule:** Define "acceptable", define the latency target as a number, define "long-term" as a timeframe.

<CustomDivider />

**Issue 7.2 — Incomplete Factor List**

* **Location:** `business-case.mdx`, Latency targets  
* **Example:** `Gateways rank Orchestrators by response latency among other factors.`  
* **Error name:** `among other factors` — incomplete claim  
* **Framework layer:** L4 (banned: `among other factors`)  
* **Research ref:** Google Technical Writing — precision  
* **Rule:** Name all ranking factors, or delete the clause.

<CustomDivider />

**Issue 7.3 — Unquantified Standard**

* **Location:** `operator-rationale.mdx`, near Decision Matrix  
* **Example:** `Not necessarily production-grade infrastructure, but consistently online and monitored.`  
* **Error name:** Two unquantified standards  
* **Framework layer:** L4 (banned: `consistently` without number; `not [X]` construction)  
* **Research ref:** Google Technical Writing — precision  
* **Rule:** State the uptime percentage. Delete `not necessarily production-grade`.

<CustomDivider />

**Issue 7.4 — Category Description as Analogy**

* **Location:** `business-case.mdx`, Commercial Operator Landscape  
* **Example:** `Pool operators are effectively GPU infrastructure businesses.`  
* **Error name:** Analogy in place of definition  
* **Framework layer:** L4 (banned: `effectively`)  
* **Research ref:** Google Technical Writing — direct assertion  
* **Rule:** Define the role in Livepeer-specific operational terms.

<CustomDivider />

### **CATEGORY 8: AUTHOR-PROTECTIVE HEDGING**

**Issue 8.1 — CYA Note as User Guidance**

* **Location:** `business-case.mdx`, Commercial Operator Landscape  
* **Example:** `Note: The commercial orchestrator landscape is evolving...`  
* **Error name:** Inline disclaimer; defensive note disguised as guidance  
* **Framework layer:** L5 (gate: no section ending on hedge or disclaimer)  
* **Research ref:** Diátaxis — stale content is updated, not apologised for  
* **Rule:** Remove from rendered content. Update `lastVerified` in frontmatter. Add a clean forward-pointer to the Discord channel.

<CustomDivider />

**Issue 8.2 — Temporal Hedge on Decision Aid**

* **Location:** `operator-rationale.mdx`, Decision Matrix preamble  
* **Example:** `Current network conditions as of early 2026 inform this matrix - stake requirements and fee levels shift over time.`  
* **Error name:** Hedge undermining the decision tool it introduces  
* **Framework layer:** L5 (gate: no hedge ending a section)  
* **Research ref:** Diátaxis — temporal context belongs in metadata  
* **Rule:** Delete from body. Frontmatter `lastVerified` field carries temporal context.

<CustomDivider />

**Issue 8.3 — Unresolved Placeholder in Published Decision Aid**

* **Location:** `operator-rationale.mdx`, Solo video Orchestrator table row  
* **Example:** `Active set threshold {/* REVIEW: confirm threshold */}`  
* **Error name:** Empty decision-critical variable  
* **Framework layer:** L5 (gate: decision aids must be complete)  
* **Research ref:** Google Technical Writing — precision; if unknown, declare it  
* **Rule:** Block from merge. Resolve with Rick/Mehrdad. Publish only when verified.

<CustomDivider />

### **CATEGORY 9: STRUCTURAL / HIERARCHY FAILURES**

**Issue 9.1 — High-Value Action Hidden in Accordion**

* **Location:** `business-case.mdx`, Capability selection accordion  
* **Example:** `tools.livepeer.cloud/ai/network-capabilities` URL accessible only inside collapsed accordion  
* **Error name:** Primary action gated behind interaction  
* **Framework layer:** L5 (gate: primary actions in body copy)  
* **Research ref:** Microsoft Style Guide — most important information first  
* **Rule:** Surface URL in section body before accordion. Accordion contains strategic depth, not the URL itself.

<CustomDivider />

**Issue 9.2 — Formula Restatement**

* **Location:** `operator-rationale.mdx`, after profit formula  
* **Example:** `If that line does not remain positive... solo operation does not clear its cost base.`  
* **Error name:** Prose restating arithmetic already shown  
* **Framework layer:** L3 (tables and diagrams stand alone)  
* **Research ref:** Google Technical Writing — every sentence carries information  
* **Rule:** Delete. Replace with a concrete example using numbers if elaboration is needed.

<CustomDivider />

### **CATEGORY 10: MISSING PERSONA ROUTING**

**Issue 10.1 — No Self-Selection at Differentiation Point**

* **Location:** Both files  
* **Error name:** Absent routing mechanism for multi-profile page  
* **Framework layer:** L1 (persona path mapping); L2 (functional routing)  
* **Research ref:** Red Hat Modular Docs — user story at module opening; DITA — task topics by user  
* **Rule:** Add functional routing at the top of each page using hardware, LPT, and goal as identifiers.

<CustomDivider />

**Issue 10.2 — Hybrid Path Has No Page**

* **Location:** Both files  
* **Error name:** Majority operator path undocumented  
* **Framework layer:** L0 Q2 (featured path is the majority model); L2 (introduced paths are routed)  
* **Research ref:** DITA — IA built around real use cases, not edge cases  
* **Rule:** Hybrid model requires its own page with a staged action sequence. This is an L0 failure — it must be resolved before further operator-facing content is drafted.

<CustomDivider />

## **Part B — Complete Banned Pattern Audit**

For use in script enforcement (Document 4). Every item here is a machine-detectable pattern.

<CustomDivider />

### **B1 — Banned Words (unconditional)**

These words are banned in all body prose without exception:

| Word | Reason |
| :---- | :---- |
| effectively | False precision |
| essentially | False precision |
| basically | Condescension |
| meaningful | Unquantified intensifier |
| significant | Unquantified intensifier |
| real (as intensifier) | Unquantified intensifier |
| various | Vague placeholder |
| several | Vague quantity |
| simply | Condescension |
| just (as minimiser) | Condescension |
| obviously | Condescension |
| clearly | Condescension |

<CustomDivider />

### **B2 — Banned Phrases (exact match)**

| Phrase | Error class |
| :---- | :---- |
| This page covers | Page announcement |
| This page explains | Page announcement |
| This section covers | Section announcement |
| In this guide | Announcement |
| The reason is straightforward | Throat-clearing |
| Understanding X is essential | Instructive preamble |
| It is important to note | Throat-clearing |
| As mentioned above | Redundant callback |
| among other factors | Incomplete claim |
| and so on | Incomplete claim |
| etc. | Incomplete claim |
| low but not zero | Restated number |
| not just \[X\] | Contrast-by-diminishment |
| rather than | Contrast-by-diminishment |
| what it takes | Hurdle framing |
| not preference | Strawman defence |
| once \[X\] is stable | Unmeasurable condition |
| depends on various factors | Vague hedge |
| it should be noted | Throat-clearing |
| Note that (standalone) | Throat-clearing |

<CustomDivider />

### **B3 — Banned Patterns (regex-detectable)**

| Pattern | Error class | Regex sketch |
| :---- | :---- | :---- |
| not \[noun/verb\] in value statements | Contrast construction | \\bnot\\s+\\w+ in value-proposition context |
| if \[condition\] in body prose | Conditional gatekeeping | \\bif\\b outside code blocks |
| can \[verb\] / may \[verb\] in value claims | Weakened assertion | \\b(can|may)\\s+\\w+ in value-claim context |
| \[value\] — if | Self-undermining value | —\\s+if\\b |
| This page \[verb\] | Page announcement | ^This (page|section|guide)\\s+\\w+ |
| consistently without adjacent number | Unquantified standard | \\bconsistently\\b not followed by \\d within 10 words |
| Currency symbol other than $ in non-region-scoped content | Currency rule violation | \[£€¥\] outside regional scope declaration |
| `{/* REVIEW:` in rendered MDX | Unresolved flag in published content | ``{\/\*\s*REVIEW:`` |
| among other | Incomplete factor list | \\bamong other\\b |
| not just | Contrast-by-diminishment | \\bnot just\\b |

<CustomDivider />

### **B4 — Banned Structural Patterns (human-reviewed, not script-detectable)**

| Pattern | Error class | Detection method |
| :---- | :---- | :---- |
| Diagram and table carrying identical data | Same-information redundancy | Human review: do they show different things? |
| Decision table with empty cell | Incomplete decision aid | Script: empty \<TableCell\> in decision table |
| Decision table with REVIEW flag in cell | Unresolved critical variable | Script: REVIEW inside table cell |
| High-value URL only inside \<Accordion\> | Gated primary action | Human review: is this URL in body copy too? |
| Path introduced, not developed or linked | Abandoned journey | Human review: every path noun followed by development or \<LinkArrow\> |
| Section ending on \<Note\> with disclaimer | Hedge as final element | Human review: Note contents; does it apologise or forward-point? |
| Cost or warning before value prop | Inverted sequence | Human review: L2 sequence check |
| Page with no functional routing language | Missing self-selection | Human review: L1 mapping table present in brief? |

# 4\. Implementation Design Doc

# **Implementation Requirements & Design**

**Livepeer Docs Copy Framework — Document 4** **Version 1.0 — March 2026**

<CustomDivider />

## **Purpose**

This document defines how the framework (L0–L8) is implemented across a documentation system with hundreds of pages, mixed content types (business, technical, strategic), and multiple authors — human and AI agent.

The implementation has three enforcement layers that work in combination:

1. **SKILL.md files** — AI agent constraints, readable before any content task  
2. **Script enforcement** — automated lint passes run in CI  
3. **Human review gate** — L5 checklist applied before merge

<CustomDivider />

## **Design Principles for Implementation**

**Rules must be executable, not advisory.** Every rule in the framework must produce a binary pass/fail result — either at script level (detectable) or at human review level (checklist item). Vague guidelines produce inconsistent enforcement.

**Separate skills for separate concerns.** A single monolithic SKILL.md covering L0–L8 produces agent confusion. Each layer is independently invokable. An agent running a copy audit does not need the L0 VP definition questions. An agent drafting content does not need the L6 diagnostic tree.

**Scripts catch what patterns can catch; humans catch what patterns cannot.** Banned words and phrases are script territory. Structural sequence errors (cost before value, abandoned path) and diagram redundancy are human territory. The system must not ask scripts to do human work or humans to do script work.

**Framework layers map directly to implementation components.**

| Layer | Implementation component |
| :---- | :---- |
| L0 | Brief template (human-authored, required field) |
| L1 | Brief template (required table before drafting) |
| L2 | Content SKILL.md — structure rules |
| L3 | Content SKILL.md — paragraph rules |
| L4 | Lint script \+ Copy SKILL.md — banned list |
| L5 | PR checklist (automated where possible, human for structural items) |
| L6 | Review SKILL.md — diagnostic routing |
| L7 | Pattern Observer SKILL.md — cross-session analysis |
| L8 | Brief template — repair routing section |

<CustomDivider />

## **Component 1: SKILL.md Architecture**

### **Recommended File Structure**

```
ai-tools/ai-skills/docs-copy/
├── SKILL.md                          # Index and invocation guide
├── skills/
│   ├── copy-rules.md                 # L4 banned list; sentence-level enforcement
│   ├── structure-rules.md            # L2–L3 sequence and paragraph rules
│   ├── value-prop-check.md           # L0 questions; VP definition and validation
│   ├── persona-routing.md            # L1 persona mapping; functional routing rules
│   ├── review-gate.md                # L5 checklist; pass/fail criteria
│   ├── iteration-diagnostic.md       # L6 decision tree; escalation routing
│   ├── pattern-observer.md           # L7 cross-session pattern analysis
│   └── repair-routing.md             # L8 repair sequences
└── reference/
    ├── banned-words.txt              # Machine-readable banned word list
    ├── banned-phrases.txt            # Machine-readable banned phrase list
    └── banned-patterns.txt           # Regex patterns for script enforcement
```

<CustomDivider />

### **SKILL.md Index (root file)**

```
---
name: docs-copy-framework
version: 1.0
description: >
  Copy and content governance framework for Livepeer documentation.
  Enforces product-first, persona-first writing standards across all page types.
  Apply before drafting, during review, and during repair cycles.
invocation:
  - "review this page for copy quality"
  - "audit this content against the framework"
  - "draft [page type] for [operator profile]"
  - "diagnose why this section keeps failing review"
skills:
  - skills/value-prop-check.md       # Run before any brief
  - skills/persona-routing.md        # Run before any brief
  - skills/structure-rules.md        # Run before drafting
  - skills/copy-rules.md             # Run during drafting and review
  - skills/review-gate.md            # Run before merge
  - skills/iteration-diagnostic.md   # Run after first gate failure
  - skills/pattern-observer.md       # Run after second failure or pattern recurrence
  - skills/repair-routing.md         # Run after observer escalation
---
```

<CustomDivider />

### **copy-rules.md (L4 — Banned List)**

Format for machine-readable enforcement and agent reading:

```
# Copy Rules — Banned Patterns

## Unconditional banned words
Do not use these words in body prose under any circumstance.
effectively, essentially, basically, meaningful, significant, real (as intensifier),
various, several, simply, just (as minimiser), obviously, clearly

## Banned phrases (exact match)
Do not use any of the following:
- "This page covers"
- "This section covers"
- "The reason is straightforward"
- "Understanding X is essential"
- "among other factors"
- "not just [X]"
- "rather than"
- "what it takes"
- "low but not zero"
- "once [X] is stable"
- "it should be noted"
- "can generate" / "may produce" in value claims

## Banned constructions (pattern-level)
- `not [noun]` in value proposition sentences
- `if [condition]` in body prose outside of code blocks
- `[value statement] — if [condition]`
- `This page [verb]` at sentence start
- `consistently` without an adjacent number within 10 words
- Currency symbols other than $ in non-region-scoped content
- `{/* REVIEW:` appearing in any rendered MDX

## Currency rule
All monetary examples use USD by default.
Region-scoped content declares scope once at section opening.
Mixed currencies within one example are banned.

## The master sentence test
Before any sentence ships, ask:
Does this sentence give the operator something they can act on, believe, or
use to make a decision — stated directly, with no qualifications, contrasts,
or conditions?
If no: rewrite or delete.
```

<CustomDivider />

### **value-prop-check.md (L0 — Pre-Brief)**

```
# Value Proposition Check

Run this skill before writing any brief for an operator-facing page.
Answer all four questions. If any cannot be answered, do not proceed to drafting.

## Q1: Operator outcome
What does this product or feature do for the operator?
State as: a kept outcome, one sentence, no conditionals.

## Q2: Majority path
Who is already succeeding, and what does their operation look like?
The majority real-world model — not an edge case — is the featured path.

## Q3: Reader's real alternative
What would the reader do instead of this?
This defines the competitive context the page must address.

## Q4: Required belief
What does the reader need to believe to take the next step?
One sentence. This is the job of the page.

## Failure conditions
L0 is incomplete if:
- Q1 contains a conditional (if, depends on, can)
- Q2 describes an edge case as the primary model
- Q3 is blank
- Q4 is a mechanism statement, not a belief statement

If L0 cannot be completed: this is a product clarity problem.
Escalate to product owner. Do not draft.
```

<CustomDivider />

## **Component 2: Script Enforcement**

### **Recommended Script Architecture**

```
tools/scripts/
├── lint-copy.js              # Main copy linter — runs banned word/phrase/pattern checks
├── lint-structure.js         # Structural checks — REVIEW flags, empty table cells, currency
├── lint-frontmatter.js       # Metadata completeness — pageType, audience, lastVerified
└── lib/
    ├── banned-words.js       # Banned word list (from reference/banned-words.txt)
    ├── banned-phrases.js     # Banned phrase list
    └── banned-patterns.js    # Regex pattern list
```

<CustomDivider />

### **lint-copy.js — What it checks**

**Tier 1: Exact match (zero tolerance)**

```javascript
// Banned words — flag with line number and word
const BANNED_WORDS = require('./lib/banned-words');
// Output: [line 54] BANNED WORD: "effectively" — delete or restate directly

// Banned phrases — flag with line number and phrase
const BANNED_PHRASES = require('./lib/banned-phrases');
// Output: [line 12] BANNED PHRASE: "This page covers" — delete; start with content

// Currency — flag non-USD symbols outside region-scoped sections
// Output: [line 128] CURRENCY: £ found outside declared region scope — use USD
```

**Tier 2: Pattern match (flag for human review)**

```javascript
// Conditional in body prose
// Regex: /\bif\b(?![^`]*`)/g  (excludes code blocks)
// Output: [line 67] PATTERN: "if" in body prose — check for conditional gatekeeping

// Weakened value claim
// Regex: /\b(can|may)\s+\w+/g in sections tagged as value-proposition context
// Output: [line 34] PATTERN: "can generate" — assert directly or delete

// "not [noun]" in value sentences
// Regex: /\bnot\s+[a-z]/g in non-code, non-list context
// Output: [line 89] PATTERN: "not [X]" — restate as positive claim

// REVIEW flags in rendered content
// Regex: /\{\/\*\s*REVIEW:/g
// Output: [line 201] REVIEW FLAG: unresolved review flag in rendered content — block merge

// Consistently without number
// Regex: /\bconsistently\b(?![\w\s]{0,40}\d)/g
// Output: [line 145] PATTERN: "consistently" without adjacent number — add threshold
```

<CustomDivider />

### **lint-structure.js — What it checks**

```javascript
// Empty TableCell in decision context
// Flag any <TableCell> that contains only whitespace or an unresolved REVIEW flag
// inside a table that has "Decision" or "Matrix" or "Path" in a nearby heading

// Missing lastVerified in frontmatter
// Flag pages with lastVerified older than 90 days from current date

// Missing pageType in frontmatter
// Flag pages with no pageType field

// Missing audience in frontmatter  
// Flag pages with no audience field

// Accordion containing a URL without that URL also appearing in body copy
// Heuristic: if a URL appears only inside <Accordion> tags, flag for human review
```

<CustomDivider />

### **CI Integration**

```
# .github/workflows/lint-copy.yml
name: Copy lint
on:
  pull_request:
    paths:
      - 'v2/**/*.mdx'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: node tools/scripts/lint-copy.js --changed-files
      - run: node tools/scripts/lint-structure.js --changed-files
      - run: node tools/scripts/lint-frontmatter.js --changed-files
```

**Tier 1 failures (exact banned matches, unresolved REVIEW flags):** Block merge. **Tier 2 failures (pattern matches):** Warn; require human reviewer sign-off on each flagged item.

<CustomDivider />

## **Component 3: Brief Template Integration**

The L0 and L1 sections of the brief template enforce pre-draft framework compliance:

```
## BRIEF — [Page Name]

### L0: Value Proposition (required — complete before drafting)

Q1 Operator outcome:
[One sentence. No conditionals.]

Q2 Featured (majority) path:
[Describe the majority real-world operating model.]

Q3 Reader's real alternative:
[What would they do instead?]

Q4 Required belief:
[What must they believe to take the next step?]

---

### L1: Persona Path Mapping (required — complete before drafting)

| Operator profile | Primary question on arrival | What this page must give them |
|---|---|---|
| | | |
| | | |

---

### L2: Content Sequence Plan

[ ] Operator outcome (first sentence)
[ ] Featured path (fully described)
[ ] Variants (with entry requirements)
[ ] Economics (concrete figures)
[ ] Decision aid (complete — no placeholders)
[ ] Staged action path (numbered)
[ ] Next page link

---

### Pre-Merge Checklist (L5)

[ ] L0 questions answered
[ ] Majority path is featured
[ ] No banned constructions (lint-copy.js passes)
[ ] No empty cells in decision aids
[ ] No unresolved REVIEW flags in rendered content
[ ] All introduced paths developed or linked
[ ] Primary actions in body copy
[ ] USD currency throughout
[ ] Page opens with value, not cost or warning
[ ] No section ends on hedge or disclaimer
```

<CustomDivider />

## **Design Considerations for Scale**

**At 100+ pages, enforcement must be asymmetric.** Not every page requires the same depth of review. Page type determines review depth:

| Page type | L0 required | L5 gate | Script enforcement |
| :---- | :---- | :---- | :---- |
| Evaluation / guide | Full L0 | Full L5 | All tiers |
| Conceptual | Q1 \+ Q4 only | Structural items only | Tier 1 only |
| Reference | Not required | Tier 1 banned words | Tier 1 only |
| Procedural (how-to) | Q1 \+ staged path | Full L5 | All tiers |

**frontmatter `pageType` drives enforcement depth.** `pageType: guide` triggers full L0+L5. `pageType: reference` triggers Tier 1 lint only. This is enforced in CI by reading the frontmatter before applying rules.

**Pattern observer runs across the tab, not the page.** L7 is a cross-page analysis. It cannot be run per-PR. It runs on a scheduled basis (weekly or at tab completion) across all pages within a section tab. Output is a pattern report, not a PR comment.

# 5\. Testing Framework

# Testing Framework

**Livepeer Docs Copy Framework — Document 5** **Version 1.0 — March 2026**

<CustomDivider />

## Purpose

This document defines how the framework is validated — both as a system (does it work?) and against existing content (does existing content pass?). It also defines the human review cycle: who reviews, what they review, how many passes, and what constitutes done.

<CustomDivider />

## Test Categories

| Category | What it tests | Method |
| :---- | :---- | :---- |
| T1: Retrospective audit | Do existing pages pass L0 and L5? | Human review against framework |
| T2: Gap detection | Does the framework identify known structural gaps? | Controlled test against known failures |
| T3: Script enforcement | Do lint scripts catch all Tier 1/2 patterns? | Automated test suite |
| T4: Agent compliance | Does the SKILL.md produce compliant drafts? | Agent output audit |
| T5: Iteration loop | Does L6/L7 route correctly when fixes fail? | Scenario testing |

<CustomDivider />

## T1: Retrospective Audit — Existing Pages

### Purpose

Validate that L0 answers exist and are correct for pages already drafted. Confirm that framework identification of gaps matches ground truth.

### Test 1a — operator-rationale.mdx and business-case.mdx

**Procedure:**

1. Apply L0 questions to both files as if writing the brief now.  
2. Document whether Q1–Q4 can be answered from the content as written.  
3. Flag any question that cannot be answered — this indicates a product clarity gap, not a copy gap.  
4. Apply L5 gate checklist to both files.  
5. Record every failure with the specific layer and rule.

**Expected findings (hypothesis to test):**

- Q2 (featured majority path) cannot be answered correctly for either file — the hybrid operator model is not featured  
- L5 failures: REVIEW flag in decision table, cost before value sequence, at least 8 banned constructions per file  
- The hybrid path gap will be identified as a product clarity problem (L0 Q2), not a copy problem

**Pass criteria:** The framework identifies the hybrid path gap as a Q2 failure before any copy-level analysis. If the framework only surfaces it as a copy issue (buried footnote, missing link), the L7 pattern observer is not working correctly.

**This test answers:** Would our framework have caught the hybrid path problem before drafting began?

<CustomDivider />

### Test 1b — GPU Nodes tab (pre-brief)

**Procedure:**

1. Attempt to answer L0 Q1–Q4 for the GPU Nodes tab before any brief is written.  
2. Document which questions can be answered and which cannot.  
3. If Q2 (featured majority path) cannot be answered: this is the first output — a product clarity problem that blocks drafting.

**Pass criteria:** L0 cannot be completed without a defined majority operator path. This should produce a clear escalation to the product owner rather than a draft brief with gaps.

**This test answers:** Does L0 function as an actual gate, or does drafting proceed around it?

<CustomDivider />

## T2: Gap Detection — Controlled Failure Test

### Purpose

Verify that the framework identifies known structural problems — specifically the hybrid path gap — through the correct diagnostic route, not incidentally.

### Test 2a — Hybrid path as L7 trigger

**Setup:** Take the current `business-case.mdx`. Count occurrences of the hybrid model being introduced but not developed. Apply L7 pattern observer questions.

**Expected route:**

1. Pattern: introduced path not routed — appears once (Issue 5.3)  
2. L7 Q1 (frequency): appears in one section → structural problem  
3. L7 Q3 (what is the pattern protecting?): removing the footnote forces the claim that hybrid IS the primary model — this feels uncomfortable because L0 Q2 was never answered for this page  
4. L7 Q4 (reader loss): reader cannot evaluate the most common operating model → blocking conversion → escalate to product owner  
5. Output: product clarity problem → L8 repair → L0 re-answer with product owner

**Pass criteria:** The framework routes this as a product clarity problem (L0), not a copy problem (L4). If it routes to L4, the L7 interpreter needs adjustment.

<CustomDivider />

### Test 2b — Recurrence detection

**Setup:** Introduce a known banned construction (`not [X]`) into three separate pages. Run the pattern observer.

**Expected route:**

1. L5 gate: flags on all three pages  
2. L6: same error class, multiple sections → writer hasn't internalised rule  
3. L7 Q2 (author behaviour): falling back, not reaching → rule reinforcement, not architecture problem  
4. Output: copy problem → L4/L5

**Pass criteria:** Framework distinguishes between a writer internalisation problem and a value prop problem for the same construction.

<CustomDivider />

## T3: Script Enforcement Tests

### Test suite structure

```
tests/copy-lint/
├── fixtures/
│   ├── banned-words-pass.mdx       # Should produce zero lint errors
│   ├── banned-words-fail.mdx       # Should produce N specific errors
│   ├── review-flag-fail.mdx        # Should block merge
│   ├── currency-fail.mdx           # Should flag £ usage
│   ├── empty-table-cell-fail.mdx   # Should flag decision table gap
│   └── accordion-url-only-fail.mdx # Should flag gated primary action
└── run-copy-tests.js
```

### Test cases

| Test | Input | Expected output | Pass criteria |
| :---- | :---- | :---- | :---- |
| Banned word: effectively | Pool operators are effectively... | Line number \+ BANNED WORD flag | Exact match |
| Banned phrase: This page covers | This page covers what... | Line number \+ BANNED PHRASE flag | Exact match |
| Currency: £ | at £800 for an RTX | Line number \+ CURRENCY flag | Exact match |
| REVIEW flag in body | `{/\* REVIEW: confirm \*/} in TableCell` | REVIEW FLAG \+ block merge | Merge blocked |
| if in body prose | if the cost base is understood | PATTERN flag \+ line number | Flag produced |
| not \[X\] construction | not just earn staking rewards | PATTERN flag \+ line number | Flag produced |
| consistently without number | consistently online and monitored | PATTERN flag \+ line number | Flag produced |
| Clean file | All rules passing | Zero errors | Zero output |

<CustomDivider />

## T4: Agent Compliance Test

### Purpose

Verify that SKILL.md files produce compliant drafts when used with Codex.

### Test 4a — Draft with skills loaded

**Procedure:**

1. Load `value-prop-check.md` and `copy-rules.md`  
2. Request a draft of a 200-word evaluation section for a GPU operator evaluating the AI inference path  
3. Apply L4 banned list to the output  
4. Apply L5 checklist to the output

**Pass criteria:**

- Zero Tier 1 banned word/phrase violations  
- Value proposition in first sentence, no conditionals  
- No `not [X]` constructions  
- Operator outcome stated before mechanism

### Test 4b — Draft without skills loaded

**Procedure:** Same request, no skills loaded.

**Expected output:** At least 3 Tier 1/2 violations. Documents the delta between unaided and skill-guided output.

**This test answers:** What is the measurable value of the SKILL.md files?

<CustomDivider />

## T5: Iteration Loop Tests

### Test 5a — Two-pass escalation

**Procedure:**

1. Take a section with a known structural problem (cost before value)  
2. Apply only L4 sentence-level fixes (pass 1\)  
3. Re-apply L5 gate  
4. Confirm gate still fails (structural problem not fixed by sentence edits)  
5. Apply L6 decision tree  
6. Confirm routing to L2 (architecture problem), not L4 (copy problem)

**Pass criteria:** After two sentence-level passes, the loop routes to L2, not back to L4 for a third pass.

<CustomDivider />

## Human Review Cycles

### How many review passes per page type

| Page type | Review passes | Reviewers |
| :---- | :---- | :---- |
| Evaluation / guide | 2 passes: structural \+ copy | Brief author (L0/L1 check) \+ copy reviewer (L4/L5 gate) |
| Conceptual | 1 pass: copy \+ sequence | Copy reviewer |
| Reference | 1 pass: script lint \+ spot check | Automated \+ brief spot check |
| Procedural (how-to) | 2 passes: sequence \+ copy | Brief author \+ copy reviewer |

### Pass 1 — Structural review (human)

Reviewer checks against L2 content sequence:

- Does the page open with operator outcome?  
- Is the majority path featured?  
- Are all introduced paths routed?  
- Is the decision aid complete?  
- Is the staged action path numbered and zero-to-outcome?

**Output:** Structural pass or list of L2 failures. No sentence-level edits at this pass.

### Pass 2 — Copy review (human \+ script)

Reviewer runs lint-copy.js and lint-structure.js. Reviews all Tier 2 pattern flags. Applies L5 gate checklist.

**Output:** Gate pass (merge approved) or gate fail with specific layer/rule references.

### When to escalate to L6/L7

- Same structural problem survives Pass 2: L6 diagnostic  
- Same error class appears in 3+ pages: L7 pattern observer  
- L7 routes to product clarity: schedule product owner session before any further drafting on affected pages

<CustomDivider />

## Test Schedule

| Test | When to run | Frequency |
| :---- | :---- | :---- |
| T1a (retrospective audit) | Before next content brief for GPU Nodes | Once |
| T1b (GPU Nodes L0) | Before GPU Nodes brief is written | Once |
| T2a (hybrid path gap) | After T1a confirms hypothesis | Once |
| T2b (recurrence detection) | At Sprint 3 completion | Once |
| T3 (script tests) | Before CI integration of lint scripts | Ongoing in CI |
| T4 (agent compliance) | Before first SKILL.md-guided Codex run | Once; then per skill update |
| T5 (iteration loop) | After first real L6 escalation occurs | As needed |

<CustomDivider />

## Known Test Outcomes (Pre-Run Predictions)

Based on analysis already completed:

**T1a will find:**

- L0 Q2 unanswerable for both files (hybrid path gap)  
- Minimum 8 L4 violations in each file  
- At least one L5 gate failure in each file (REVIEW flag in decision table)

**T2a will confirm:**

- Hybrid path gap routes as product clarity problem (L0), not copy problem (L4)  
- This validates L7 pattern observer design

**T4b will establish:**

- Baseline violation rate for unaided drafts  
- Measurable SKILL.md improvement delta

If T2a routes the hybrid gap to L4 instead of L0, the L7 observer logic needs adjustment — specifically, Q3 (what is the pattern protecting?) needs stronger signal criteria for distinguishing structural from product clarity escalations.

# 6\. Implementation Details

# Tab 14

# Livepeer Docs Copy & Content Framework

**Version 1.0 — March 2026** **Classification: Internal working standard**

<CustomDivider />

## Purpose

This framework governs all prose, structure, and copy decisions across the Livepeer documentation system. It applies to every page type: conceptual, evaluative, procedural, and reference.

Its function is not stylistic. It is a quality gate — a structured set of constraints that prevent the most common failure modes in technical product documentation before they reach a reader.

The framework has eight layers. Layers 0–1 run before drafting. Layers 2–4 govern the writing itself. Layers 5–8 govern review, iteration, and repair.

<CustomDivider />

## Summary of Layers

| Layer | Name | When it runs |
| :---- | :---- | :---- |
| L0 | Value Proposition Definition | Before brief is written |
| L1 | Persona Path Mapping | Before brief is written |
| L2 | Content Sequence Rules | Before drafting |
| L3 | Paragraph Rules | During drafting |
| L4 | Sentence Banned List | During drafting and review |
| L5 | Publish Gate | Before merge |
| L6 | Iteration Diagnostic Loop | After first failed gate |
| L7 | Pattern Observer | After second failed gate or pattern recurrence |
| L8 | Repair Routing | Output of L7 |

<CustomDivider />

## Layer 0 — Value Proposition Definition

**Runs:** Once per section tab or major page cluster. Before any brief is written. **Owner:** Product owner or documentation lead.

Before a single word of copy is drafted, four questions must be answered in writing. These answers are not published. They constrain every layer below.

<CustomDivider />

### The Four Questions

**Q1. What does this product or feature actually do for the operator?** State the outcome the operator keeps, not the mechanism they operate. One sentence. No conditionals.

Example: `Livepeer lets GPU operators earn ETH from compute capacity that would otherwise sit idle, without centralised intermediaries extracting margin.`

**Q2. Who is already succeeding with this, and what does their operation look like?** Defines the aspirational model. The majority real-world path — not an edge case — is the default story.

Example: `The majority of active operators run hybrid workloads: video transcoding for stable baseline income, AI inference for higher per-job fees on capable hardware. This is the featured path.`

**Q3. What is the reader's real alternative?** Defines the competitive context. Shapes what the docs must prove.

Example: `Centralised GPU clouds (Vast.ai, RunPod) with margin extraction and no protocol upside; mining alternatives with declining yields; idle hardware earning nothing.`

**Q4. What does the reader need to believe to take the next step?** Every page moves the reader toward one belief. State it.

Example: `Their specific hardware can earn at a rate that clears their cost base, and the path to first earnings is achievable without expert-level knowledge.`

<CustomDivider />

### L0 Failure Conditions

L0 is incomplete if any of the following are true:

- Q1 contains a conditional (`if`, `depends on`, `can`)  
- Q2 describes an edge case operator as the primary model  
- Q3 is left blank or vague  
- Q4 is a mechanism statement, not a belief statement

If L0 cannot be completed, no drafting begins. The gap is a product clarity problem, not a writing problem.

<CustomDivider />

## Layer 1 — Persona Path Mapping

**Runs:** Once per page. Before drafting. **Owner:** Documentation lead or brief author.

Map the page to operator reality — hardware, stake position, goal — using functional identifiers, not named personas.

### Mapping Table Format

| Operator profile | Primary question on arrival | What this page must give them |
| :---- | :---- | :---- |
| Single GPU, limited LPT | Can I earn without a large stake? | Pool worker path and AI entry path, both concrete |
| Multi-GPU, existing node | How do I add AI workloads? | Hybrid path as featured model, staged |
| Fleet or data centre operator | What are the economics at scale? | Per-GPU unit economics, Gateway relationship model |
| AI-first, no prior Livepeer | What hardware and which pipelines? | Capability-first routing, no stake prerequisite |

### Rules

- Every row in the mapping table must be served by the page or routed to a linked page.  
- Operator profiles use hardware, LPT position, and goal as identifiers. Named personas (A, B, C) are planning tools only — they never appear in published copy or routing language.  
- If the page cannot serve all mapped profiles, the page scope is wrong. Split or restructure before drafting.

<CustomDivider />

## Layer 2 — Content Sequence Rules

**Runs:** Before drafting begins. Defines page structure.

### Mandatory Sequence for Evaluation and Guide Pages

1. **Operator outcome** — the value kept, stated directly, one sentence, no conditionals  
2. **Featured path** — the majority real-world operating model, described in full  
3. **Variants** — alternative paths with specific entry requirements  
4. **Economics** — cost and revenue, concrete figures, no hedging  
5. **Decision aid** — complete, no empty cells, no unresolved flags  
6. **Staged action path** — numbered, zero to first outcome  
7. **Next page** — one link, the correct next step for the primary reader

### Banned Sequences

- Cost structure before value proposition  
- Warning or caveat before opportunity  
- Variant paths before the primary path is fully described  
- Decision aid with missing data, placeholder text, or unresolved review flags  
- Any section that introduces a path without routing it

<CustomDivider />

## Layer 3 — Paragraph Rules

**Runs:** During drafting.

- One paragraph, one job. If you cannot label the paragraph's job in three words, split it.  
- Lead sentence states the fact. Remaining sentences extend or evidence it.  
- Final sentence must be a fact, a number, or a next step — never a hedge, a restatement, or a conditional.  
- Tables and diagrams stand alone. Any prose sentence that restates a table row or diagram node is deleted.  
- Every introduced path is either developed on the page or linked to a page that develops it.  
- High-value URLs and commands appear in body copy. Accordions contain depth, not primary actions.  
- Diagram and table combinations: each must show something the other cannot. If they carry identical information, remove one.

<CustomDivider />

## Layer 4 — Sentence Banned List

**Runs:** During drafting and at every review pass.

### Banned Constructions

| Construction | Why banned | Replacement |
| :---- | :---- | :---- |
| `not [X]` | Defines value by contrast. Forces reader to hold two things to understand one. | State what it is. Delete the contrast. |
| `not just [X]` | Dismisses a valid option to elevate another. Condescending. | Delete or restate as additive. |
| `rather than` | Contrast-by-diminishment. Same failure mode as `not`. | Delete the contrast clause. State the positive directly. |
| `if [condition]` | Conditional gatekeeping. Makes the reader responsible for a knowledge gap the docs should close. | State the condition as a fact, or remove it. |
| `depends on` | Hedges every claim into uselessness. | State the specific variable. |
| `This page [verb]` / `This section covers` | Announces content instead of delivering it. | Delete. Start with the content. |
| `what it takes` | Hurdle framing. Implies the reader may not qualify. | State the requirements directly. |
| `[value] — if [condition]` | Undercuts the value statement in the same breath. | Split into two sentences. Value first. Requirements second. No dash. |
| `effectively` / `essentially` | False precision. Signals the writer is not confident in the claim. | State the thing directly or delete. |
| `meaningful` / `real` / `significant` | Intensifiers with no information content. | Replace with a number or delete. |
| `consistently` without a number | Vague operational standard. | Add the number or rewrite. |
| `among other factors` | Incomplete claim. Generates reader questions. | Name the factors or delete the clause. |
| `low but not zero` | Restates information already conveyed by numbers. | Give the number. Delete the qualifier. |
| `The X path does not` | Negative comparative. | State what X does. Drop the negative. |
| `can generate` / `may produce` | Weakened value claim. | Assert or delete. |
| `[value] — not preference` | Defends against a criticism nobody made. | Delete. |
| `once [X] is stable` | Delays value on a condition the reader cannot measure. | State the prerequisite as a concrete step. |

### Currency Rule

All monetary examples use USD by default. If content is explicitly region-scoped, state the region once at the section opening and use local currency consistently within that scope. Mixed currencies within a single example are banned.

### Review Flags in Published Copy

`{/* REVIEW: */}` flags are internal signals. They must never appear in rendered content. A page with an unresolved REVIEW flag in a decision-critical position (table cell, decision matrix, numbered step) is blocked from publish until the flag is resolved.

<CustomDivider />

## Layer 5 — Publish Gate

**Runs:** Before any page merges to the branch. **Owner:** Human reviewer.

A page fails the gate if any of the following are true:

- [ ] L0 questions were not answered in the brief before drafting  
- [ ] The majority operator path is not the featured path on the page  
- [ ] Any sentence uses a banned construction from L4  
- [ ] Any decision aid contains an empty cell, placeholder text, or unresolved REVIEW flag  
- [ ] Any path introduced on the page has no development or outbound link  
- [ ] Any primary action, URL, or command is only accessible inside a collapsed accordion or Note component  
- [ ] Any monetary figure uses non-USD currency without explicit regional scope  
- [ ] The page opens with cost, warning, or conditional before value  
- [ ] Any diagram and table combination carry identical information  
- [ ] Any section ends on a hedge, disclaimer, or restatement

<CustomDivider />

## Layer 6 — Iteration Diagnostic Loop

**Triggers:** Any page fails L5.

### Decision Tree

```
L5 FAILURE
│
├── Is the same error class appearing in a different sentence?
│   │
│   ├── YES → PATTERN FAILURE
│   │   │
│   │   ├── Appearing in multiple sections?
│   │   │   ├── YES → Writer has not internalised the rule
│   │   │   │         ACTION: Rule reinforcement pass. Route to copy editor.
│   │   │   │
│   │   │   └── NO → Single section keeps failing
│   │   │             │
│   │   │             ├── Evaluation or decision section?
│   │   │             │   ├── YES → PERSONA FAILURE → L7 Persona Check
│   │   │             │   └── NO  → VALUE PROP FAILURE → L7 VP Check
│   │
│   └── NO → New error class appearing
│             │
│             ├── Section not covered by L0 question?
│             │   ├── YES → SCOPE FAILURE
│             │   │         ACTION: Return to brief. Section may not belong on this page.
│             │   │
│             │   └── NO → Covered by L0 but still failing
│             │             │
│             │             ├── Section describes majority operator path?
│             │             │   ├── NO → PATH PRIORITY FAILURE
│             │             │   │        ACTION: Restructure. Majority path must be featured.
│             │             │   │
│             │             │   └── YES → L7 VP Check
```

### Escalation Rule

Two failed fix passes on the same section triggers L7. The writer does not attempt a third sentence-level fix. The failure is diagnosed at the layer above.

<CustomDivider />

## Layer 7 — Pattern Observer

**Triggers:** Any pattern appears across 3+ pages, or any single error class survives 2 fix cycles.

The pattern observer does not fix. It reads across sessions, pages, and fix cycles to determine what recurrence means.

### The Four Observer Questions

**1\. Frequency** Is this pattern appearing in one section type or everywhere?

- One section type → structural or IA problem  
- Everywhere → value prop or persona definition problem

**2\. Author Behaviour** Is the writer reaching for this construction, or falling back to it?

- Reaching: they are solving a real communication problem the framework is not helping with. Escalate to architecture review.  
- Falling back: rule not internalised. Copy editing fix.

**3\. What is the pattern protecting?** What would the copy have to claim, without qualification, if this pattern were removed?

- Claim feels uncertain or uncomfortable → value prop is unresolved upstream  
- Claim is clear but avoided → voice or confidence problem

**4\. What does the reader lose if this is never fixed?**

- Nothing, they just read worse prose → sentence-level fix, low priority  
- They cannot evaluate whether to commit → blocking conversion. Escalate to product owner, not copy editor.

### Pattern Interpretation Table

| Recurring pattern | Linear diagnosis | Pattern observer reading |
| :---- | :---- | :---- |
| `not X` / contrast language persists | Writer hasn't internalised rule | Value prop is not strong enough to stand alone — writer reaches for contrast because there is no clear positive to lead with |
| Conditionals and hedges cluster in one section | Sentence-level fix needed | Section is serving an undefined reader — hedges are the writer covering multiple personas simultaneously |
| `This page covers` persists | Banned construction | Pages do not have a clear single job — writer announces because scope is uncertain |
| Cost or warning language before value persists | Sequence error | Writer does not believe the value prop they are being asked to write |
| Hybrid or majority path keeps being buried | Path priority error | The IA taxonomy was built around edge cases, not majority operator reality |

### Observer Output

The observer produces one of three escalation calls:

- **Copy problem** → route to L4/L5. Writer self-corrects with rule reinforcement.  
- **Architecture problem** → route to L1/L2. Page scope or IA needs restructuring.  
- **Product clarity problem** → route to L0. Value proposition must be redefined before any copy work continues.

<CustomDivider />

## Layer 8 — Repair Routing

**Triggered by:** L7 escalation output.

```
COPY PROBLEM
└── L4 rule reinforcement pass
    └── Re-enter at L5

ARCHITECTURE PROBLEM
└── L1 persona map review
    └── L2 sequence audit
        └── Redraft affected sections
            └── Re-enter at L3

PRODUCT CLARITY PROBLEM
└── L0 VP questions re-answered (with product owner, not writer)
    └── L1 persona map updated if VP shift changes audience
        └── Full page redraft
            └── Re-enter at L2
```

### The Master Sentence Test

Applied to every sentence before it ships:

Does this sentence give the operator something they can act on, believe, or use to make a decision — stated directly, with no qualifications, contrasts, or conditions?

If no: rewrite or delete.

# Research

# \_index\_ Gemini Summary

The **Copywriting Governance Framework** file details a comprehensive, multi-layered system designed to enforce high standards of quality, consistency, and a specific "operator-first" voice across all Livepeer documentation, particularly within the `docs-v2` repository.

The core premise is that repeated errors in writing are symptoms of deeper problems—such as issues with the product's value proposition or the content's structure—not just simple style errors. The framework uses a series of explicit layers to catch and resolve these issues at their root cause.Core Layers of the Copy Framework

The framework is divided into five sequential layers, from the initial concept through to the final publication review:

* **Layer 0 — Product Value Proposition (The Brief)**: This is a mandatory, pre-drafting stage where the author must answer four core questions in writing to define the page's constraint:  
  * What is the outcome the operator keeps (stated as a value, not a mechanism)?  
  * Who is already succeeding with this (to define the aspirational model)?  
  * What is the reader's alternative?  
  * What does the reader need to believe to take the next step?  
* **Layer 1 — Persona Path Mapping**: The content is mapped to the operator's reality—specifically their **hardware, stake position, and goal**—rather than abstract personas. The page must clearly state what it must give the operator based on their profile.  
* **Layer 2 — Content Sequence Rules**: This enforces a mandatory, value-first structure for all evaluation/guide pages. The sequence must be: **Outcome** $\\rightarrow$ **Featured Path** $\\rightarrow$ **Variants** $\\rightarrow$ **Economics** $\\rightarrow$ **Decision Aid** $\\rightarrow$ **Staged Action Path** $\\rightarrow$ **Next Page**. Crucially, it **bans** costs, warnings, or variant paths from appearing before the value proposition.  
* **Layer 3 — Paragraph Rules**: This enforces **atomic writing**, requiring that each paragraph has only "one job". The rule mandates that the **final sentence** of every paragraph must be a fact, a number, or a next step, explicitly banning hedges or restatements.  
* **Layer 4 — Sentence-Level Banned List**: A strict list of banned sentence constructions that signal weak or hedging prose. Examples include:  
  * `not [X]` or `rather than` (forcing the reader to hold two things to understand one).  
  * `if [condition]` or `depends on` (conditional gatekeeping that hedges the claim).  
  * `This page [verb]` (an unnecessary announcement of what the page does).  
  * `meaningful / real / significant` (empty intensifiers that should be replaced with numbers).  
* **Layer 5 — Publish Gate**: A final human reviewer checklist. A page fails this gate if, for example, a Layer 0 question was never answered, or a primary action is only accessible in an accordion.

Diagnostic and Escalation Loops (L6 & L7)

The framework includes advanced diagnostic systems for recurring failures:

* **Layer 6 — Iteration Diagnostic Loop**: This system is triggered when the same error class recurs after a fix. The premise is that a repeated sentence-level error is a symptom of an upstream problem (Architecture or Value Prop). It uses a **Decision Tree** to classify the failure type and route the reviewer upstream to the correct layer (L0, L1, or L2) for a root-cause fix.  
* **Layer 7 — Pattern Observer (CLAUDE Framework)**: This is a meta-governance layer that watches for patterns across multiple pages or multiple fix cycles. It asks three non-linear questions that a linear check would miss:  
  1. Is the pattern a symptom of a **value proposition definition** problem?  
  2. Is the pattern revealing a **persona** we haven't mapped?  
  3. Is the pattern showing a **structural gap** (content that shouldn't exist as written prose)?

The key function of the Pattern Observer is to ask **"What is the pattern protecting?"**. It assumes a writer unconsciously uses banned phrases when the underlying product claim or brief does not feel solid to them, making it an **escalation mechanism** to product owners, not a copyediting tool.

# Claude

## **CLAUDE FRAMEWORK v4? 8-layers**

## Layer 8 — Repair Routing

Each escalation call has a defined repair sequence and a re-entry point back into the gate:

```
COPY PROBLEM
└── L4 rule reinforcement pass → re-enter at L5

ARCHITECTURE PROBLEM  
└── L1 persona map review
    → L2 sequence audit
    → redraft affected sections
    → re-enter at L3

PRODUCT CLARITY PROBLEM
└── L0 VP questions re-answered (with product owner, not writer)
    → L1 persona map updated if VP shift changes audience
    → full page redraft
    → re-enter at L2
```

<CustomDivider />

—-

**Layer 7 \- Output of the observer is not a fix. It is one of three escalation calls:**

* **Copy problem** → route to L4/L5, writer self-corrects with rule reinforcement  
* **Architecture problem** → route to L1/L2, page scope or IA needs restructuring  
* **Product clarity problem** → route to L0, value proposition needs to be redefined before any copy work continues

—

The current L6 is a **routing tree** — it classifies failures and sends them upstream. That's reactive and linear. A pattern observer is fundamentally different: it watches *across* sessions, *across* pages, *across* fix cycles and asks what the recurrence *means*, not just where to send it.

<CustomDivider />

### **What a Pattern Observer Actually Does**

It holds three questions the routing tree never asks:

1. **Is this pattern telling us something is wrong with our value prop definition, not just the copy?**  
2. **Is this pattern revealing a persona we haven't mapped — someone who keeps being written around instead of for?**  
3. **Is this pattern showing us a structural gap — content that keeps being badly written because it shouldn't exist as written content at all?**

Examples of what lateral interpretation looks like in practice:

| Recurring pattern | Linear diagnosis | Pattern observer reading |
| :---- | :---- | :---- |
| not X / contrast language keeps returning | Writer hasn't internalised rule | The value prop isn't strong enough to stand alone — writer is unconsciously reaching for contrast because there's no clear positive to lead with |
| Conditionals and hedges cluster in one section | Sentence-level fix needed | The section is serving a reader we haven't defined — the hedges are the writer trying to cover multiple personas simultaneously |
| "This page covers" keeps appearing | Banned construction | Pages don't have a clear single job — writer is announcing because the page scope is uncertain |
| Cost/warning language keeps appearing before value | Sequence error | The product's own economics are ambiguous to the writer — they don't actually believe the value prop they're being asked to write |
| Hybrid path keeps being buried or treated as an aside | Path priority error | The IA itself is wrong — the taxonomy was built around edge cases, not the majority operator reality |

<CustomDivider />

### **The Additional Layer**

**Layer 7 — Pattern Observer**

Triggers after: any pattern appears in 3+ pages, or any single error class survives 2 fix cycles.

**The observer asks four questions in order:**

```
1. FREQUENCY
   Is this pattern appearing in one section type, or everywhere?
   → One section type: structural/IA problem
   → Everywhere: value prop or persona definition problem

2. AUTHOR BEHAVIOUR
   Is the writer reaching for this construction, 
   or falling back to it?
   → Reaching: they're trying to solve a real 
     communication problem the framework isn't helping with
   → Falling back: rule not internalised; copy editing fix

3. WHAT IS THE PATTERN PROTECTING?
   What would the copy have to claim, without 
   qualification, if this pattern were removed?
   → If that claim feels uncomfortable or uncertain: 
     value prop is unresolved upstream
   → If the claim is clear but the writer avoided it: 
     voice/confidence problem

4. WHAT DOES THE READER LOSE IF THIS NEVER GETS FIXED?
   → If the answer is "nothing, they just read worse prose": 
     sentence-level fix, low priority
   → If the answer is "they can't evaluate whether to commit": 
     this is blocking conversion; high priority, escalate to 
     product owner not copy editor
```

**Output of the observer is not a fix. It is one of three escalation calls:**

* **Copy problem** → route to L4/L5, writer self-corrects with rule reinforcement  
* **Architecture problem** → route to L1/L2, page scope or IA needs restructuring  
* **Product clarity problem** → route to L0, value proposition needs to be redefined before any copy work continues

<CustomDivider />

The key addition is question 3: **what is the pattern protecting?** Recurring banned constructions are almost always a writer unconsciously signalling that the thing they've been asked to assert doesn't feel solid to them. That's not a copyediting problem. That's a brief problem, or a product problem. The pattern observer is the mechanism that sees that distinction before it wastes another fix cycle.

## **Layer 6 — Iteration Diagnostic Loop**

The premise: if the same error class recurs after a fix, the fix was treating a symptom. The framework needs to route the reviewer upstream to find the cause.

<CustomDivider />

### **THE LOOP STRUCTURE**

```
FIX SUBMITTED
      ↓
REVIEW GATE (Layer 5 checklist)
      ↓
PASS? → Ship
FAIL? → Classify the failure type (Decision Tree below)
```

<CustomDivider />

### **DECISION TREE: CLASSIFY THE FAILURE**

```
LAYER 5 FAILURE
      ↓
Is the same error class appearing in a different sentence?
      ├── YES → PATTERN FAILURE
      │         ↓
      │    Is the banned construction appearing in multiple sections?
      │         ├── YES → Writer has not internalised the rule
      │         │         ACTION: Rule reinforcement pass. 
      │         │         Flag for copy editor, not author self-review.
      │         │
      │         └── NO → Single section keeps failing
      │                   ↓
      │              Is the failing section an evaluation/decision section?
      │                   ├── YES → PERSONA FAILURE (go to Persona Check)
      │                   └── NO → VALUE PROP FAILURE (go to VP Check)
      │
      └── NO → New error class appearing
                ↓
           Was this section not covered by a Layer 0 question?
                ├── YES → SCOPE FAILURE
                │         ACTION: Return to brief. 
                │         This section should not exist or belongs on another page.
                │
                └── NO → Covered by L0 but still failing
                          ↓
                     Does the section describe the majority operator path?
                          ├── NO → PATH PRIORITY FAILURE
                          │        ACTION: Restructure. 
                          │        Majority path must be featured.
                          │
                          └── YES → Go to VP Check
```

<CustomDivider />

### **PERSONA CHECK**

*Triggered when: evaluation/decision content keeps producing hedges, conditionals, or "depends on" after multiple fix passes.*

| *Question* | *If YES* | *If NO* |
| :---- | :---- | :---- |
| *Does the section address more than one operator profile simultaneously?* | *Split the section. One profile per block.* | *Continue* |
| *Is the section written from the product outward rather than the operator inward?* | *Rewrite from the operator's question.* | *Continue* |
| *Does the operator profile this section serves actually exist in the validated persona map?* | *—* | *Kill the section. It's serving an imagined reader.* |
| *Is the primary question this section answers written in the brief?* | *—* | *Stop. Write the question. Redraft the section as its answer.* |

<CustomDivider />

### **VALUE PROP CHECK**

*Triggered when: body copy keeps drifting into mechanism description, contrast language, or cost-before-value structure.*

| *Question* | *If YES* | *If NO* |
| :---- | :---- | :---- |
| *Can the Layer 0 outcome statement for this page be said in one sentence without a conditional?* | *—* | *The value prop is not defined. Return to Layer 0\. No drafting until answered.* |
| *Is the outcome the operator keeps stated before the mechanism that produces it?* | *Continue* | *Reorder. Outcome first.* |
| *Does the majority path in this section match the real-world majority operator?* | *Continue* | *The content is modelling the wrong default. Restructure around the actual majority.* |
| *Would an operator reading this section know what to do next without visiting Discord?* | *Continue* | *The section is incomplete. Add the staged action path.* |

<CustomDivider />

### **ESCALATION RULE**

**Two failed fix passes on the same section \= escalate, do not re-fix.**

If a section fails Layer 5 twice, the author should not attempt a third fix. Instead:

1. Pull the original Layer 0 answers for that page  
2. Answer: *what operator, with what hardware, asking what specific question, does this section serve?*  
3. If that question cannot be answered in one sentence: **delete the section and route the content need to a new brief**  
4. If it can be answered: **rewrite the section from that sentence as the opening line**, apply all layers fresh

<CustomDivider />

### **WHERE THIS LAYER SITS**

```
L0 — Value proposition definition (pre-draft)
L1 — Persona path mapping (pre-draft)
L2 — Content sequence rules (structural)
L3 — Paragraph rules
L4 — Sentence banned list
L5 — Publish gate
L6 — Iteration diagnostic loop ← NEW
      ├── Pattern failure → rule reinforcement
      ├── Persona failure → persona check
      ├── Value prop failure → VP check
      └── Scope failure → return to brief / delete
```

The loop means no section iterates more than twice at sentence level before being diagnosed at the layer above it. Repeated sentence errors are a signal, not a copyediting problem.

### **LIVEPEER DOCS COPY FRAMEWORK v2**

<CustomDivider />

#### **LAYER 0 — PRODUCT VALUE PROPOSITION (runs once per section/tab, gates all content below it)**

Before any page is drafted, answer these four questions in writing. The answers are not published — they constrain everything that is.

**1\. What does this product/feature actually do for the operator?** State it as an outcome the operator keeps, not a mechanism they operate.

`Livepeer lets GPU operators earn ETH from compute capacity that would otherwise sit idle — without centralised intermediaries taking margin.`

**2\. Who is already succeeding with this, and what does their operation look like?** This defines the aspirational model. The majority path — not the edge case — is the default story.

`The majority of active operators run hybrid workloads: video transcoding for stable baseline income, AI inference for higher per-job fees on capable hardware. This is the featured path.`

**3\. What is the reader's alternative to this?** Defines the real competitive context. Shapes what the docs need to prove.

`Alternatives: centralised GPU clouds (Vast.ai, RunPod) with margin extraction and no protocol upside; mining alternatives with declining yields; idle hardware earning nothing.`

**4\. What does the reader need to believe to take the next step?** Every page must move the reader toward one belief. State it explicitly.

`They need to believe: their specific hardware can earn at a rate that clears their cost base, and the path to first earnings is achievable without expert-level knowledge.`

These four answers are written in the brief before a single MDX line is drafted. Every section is tested against them.

<CustomDivider />

#### **LAYER 1 — PERSONA PATH MAPPING (runs once per page)**

Map the page to the operator reality — hardware, stake position, goal — not to named personas.

**Format:**

| Operator profile | Primary question on arrival | What this page must give them |
| :---- | :---- | :---- |
| Single GPU, limited LPT | Can I earn without a big stake? | Pool worker path \+ AI entry path, both concrete |
| Multi-GPU, existing node | How do I add AI workloads? | Hybrid path as featured model, staged |
| Fleet/data centre | What are the economics at scale? | Per-GPU unit economics, Gateway relationship model |
| AI-first, no prior Livepeer | What hardware and which pipelines? | Capability-first routing, no stake prereq |

This table is in the brief. If the page doesn't serve every row, either the page scope is wrong or a linked page covers the gap.

<CustomDivider />

#### **LAYER 2 — CONTENT SEQUENCE RULES (page structure)**

**Mandatory sequence for evaluation/guide pages:**

1. **Operator outcome** — what the operator gets, stated as a kept value (one sentence, no conditionals)  
2. **Featured path** — the majority real-world operating model, described fully  
3. **Variants** — alternative paths with their specific entry requirements  
4. **Economics** — cost and revenue, concrete figures, no hedging  
5. **Decision aid** — complete, no empty cells, no REVIEWs  
6. **Staged action path** — numbered, zero-to-first-outcome  
7. **Next page** — one link, the correct next step for the primary reader

**Banned sequences:**

* Cost structure before value proposition  
* Warning before opportunity  
* Variant paths before the primary path  
* Decision aid with missing data

<CustomDivider />

#### **LAYER 3 — PARAGRAPH RULES**

* One paragraph, one job. Test: can you write a three-word label for what this paragraph does? If not, split it.  
* Lead sentence states the fact. Remaining sentences extend or evidence it.  
* Final sentence of every paragraph must be a fact, a number, or a next step — never a hedge, never a restatement.  
* Tables and diagrams stand alone. Prose that restates a table row is deleted.  
* Every introduced path is either developed on the page or linked to a page that does. No abandoned paths.  
* High-value URLs and commands are in body copy. Accordions contain depth, not primary actions.

<CustomDivider />

#### **LAYER 4 — SENTENCE-LEVEL BANNED LIST**

| Banned | Replace with |
| :---- | :---- |
| not \[X\] | State what it is. Delete the contrast. |
| not just \[X\] | Delete entirely or restate as additive |
| rather than | Delete the contrast clause. State the positive directly. |
| if \[condition\] | Either state the condition as a fact or remove the conditional entirely |
| depends on | State the specific variable. "Revenue scales with job volume" not "revenue depends on various factors" |
| This page \[verb\] | Delete. The page does the thing. |
| what it takes | State the requirements directly |
| \[value\] — if \[condition\] | Split into two sentences. Value first, requirements second, no dash |
| effectively / essentially | Delete. State the thing directly. |
| meaningful / real / significant | Replace with a number or delete |
| consistently without a number | Add the number or rewrite |
| among other factors | Name the factors or delete the clause |
| low but not zero | Give the number. Delete the qualifier. |
| The X path does not | State what X does. Drop the comparative negative. |

<CustomDivider />

#### **LAYER 5 — PUBLISH GATE**

Page fails if:

* Layer 0 questions were not answered in the brief before drafting  
* The majority operator path is not the featured path  
* Any sentence uses a banned construction  
* Any decision aid has an empty or REVIEW-flagged cell  
* Any introduced path has no development or outbound link  
* Any primary action is only accessible in an accordion or collapsed state  
* Any monetary figure uses non-USD currency without explicit regional scope  
* The page opens with cost, warning, or conditional before value

<CustomDivider />

**The test for any sentence before it ships:**

Does this sentence give the operator something they can act on, believe, or use to make a decision — stated directly, with no qualifications, contrasts, or conditions?

If no: rewrite or delete.

##    **FRAMEWORK REVISIONS** 

**Banned constructions — add to framework:**

| Pattern | Why banned |
| :---- | :---- |
| not \[X\] / not just \[X\] | Defines value by what it isn't. Condescending to the option being dismissed. Forces reader to hold two things to understand one. |
| if \[condition\] | Conditional gatekeeping. Makes the reader responsible for a knowledge gap the docs should close. |
| depends on | Hedges every claim into uselessness. |
| rather than | Same as not — contrast-by-diminishment |
| This page \[verb\] / This page covers | Announces. Doesn't do. Page is already open. |
| what it takes | Hurdle framing. Implies the reader may not clear it. |
| The X path scales; the Y path does not | False precision. Incomplete claim presented as conclusion. |
| \[value\] — if \[condition\] | Undercuts its own value statement in the same breath |

## **Task 2: The Framework**

The problem is that fixes are being made in isolation. Without a standing set of rules applied *holistically* to every sentence, the same errors recur in different clothing. Here is a concrete prose and copy framework.

<CustomDivider />

### **LIVEPEER DOCS COPY FRAMEWORK**

#### **LAYER 1 — SENTENCE-LEVEL RULES (apply to every sentence before it ships)**

| Rule | Test | Kill phrase examples |
| :---- | :---- | :---- |
| No throat-clearing | Does this sentence contain information, or does it announce information that follows? | "This page covers...", "Understanding X is essential...", "The reason is straightforward:" |
| No empty intensifiers | Remove adjectives that assert without evidence | "real", "meaningful", "significant", "effectively", "essentially" |
| No restatement of the table/diagram | Does this sentence repeat something already shown visually? | Any prose that mirrors a table row or diagram node verbatim |
| No dangling claims | Every "this is different / better / higher" must be followed by the data that proves it | "The break-even is different", "The fee path scales" without a number |
| No hedged conclusions | Don't state the inference the reader can draw themselves | "Both models require different capital commitment decisions", "Low but not zero" |
| No conditional value statements | Value proposition sentences must not carry qualifying clauses | "can generate returns — if you understand costs" |
| No instruction-barks | Don't tell a peer-technical audience to act | "Use it:", "Check this before...", "Make sure..." |
| No parenthetical action notes | In-body action instructions belong as inline links or a dedicated step, not parentheses | "(depending on region)", "(verify at \[url\])" |
| Currency: USD default | All monetary examples use USD unless content is explicitly region-scoped | £, €, region-hedged ranges |
| No REVIEW flags in publishable prose | All REVIEW content is either resolved or the section is blocked from publish | `{/\* REVIEW: confirm \*/} inside table cells` |

<CustomDivider />

#### **LAYER 2 — PARAGRAPH-LEVEL RULES**

**Lead with value, not mechanism.** Every section opening must state the outcome before the process. Mechanism belongs in the body.

✅ `Service fees scale with job volume. The more work your node processes, the more ETH it earns — uncapped by stake position.` ❌ `Service fees are paid per transcoding segment or AI inference job via probabilistic micropayment tickets redeemed on Arbitrum.`

**One paragraph, one job.** Each paragraph answers exactly one reader question. If you find yourself connecting two thoughts with "and" or "also", split them.

**No paragraph should end on a hedge.** The last sentence of a paragraph sets the register for the next one. Hedges signal uncertainty; operators calibrate trust against them.

<CustomDivider />

#### **LAYER 3 — PAGE-LEVEL RULES**

**Every page must pass the "so what" test at every section break.** After each H2, ask: what does the reader now know that they didn't before, and what can they do with it? If the answer is "nothing yet", the section hasn't earned its place.

**Functional routing, not persona labels.** Self-selection copy uses hardware, LPT position, and operational capacity as identifiers — not named personas.

✅ `If you have a single GPU and limited LPT, start here.` ❌ `Persona A operators should...`

**Decision aids must be complete or blocked.** Any table, matrix, or flowchart used for decision-making must have no empty cells, no unresolved REVIEWs, and no cells that name a variable without giving its value. Incomplete decision aids are worse than no decision aid.

**Journey paths must have exits.** Every path introduced (hybrid model, pool worker, AI-only) must either be developed on the page or link to a page that develops it. Introducing a path and not routing it is an abandoned user.

**High-value actions must be in body copy.** Any URL, command, or step that answers a reader's primary question must be visible without interaction (not collapsed in an accordion, not in a Note, not in a Related Pages card).

<CustomDivider />

#### **LAYER 4 — STRUCTURAL RULES (apply at IA level)**

**Value proposition before cost structure on evaluation pages.** Sequence: opportunity → mechanics → costs → decision aid → next step. Never open an evaluation page with a viability test.

**Prerequisites are stated, not restated.** If a page is linked as a prerequisite, its content is not repeated. The page opens at the next layer of knowledge.

**The commercial/AI AI operator path requires a stage map.** The zero-to-hero sequence for AI Orchestrators is: hardware verification → model loading → capability declaration → first job received → pricing tuning → Gateway outreach → per-Gateway agreements → pool/relationship formalisation. Content that belongs to stage 4+ must not appear without stages 1–3 being addressed first or linked.

<CustomDivider />

#### **LAYER 5 — REVIEW GATE (before any page merges)**

A page fails review if any of the following are true:

* Any sentence announces rather than delivers information  
* Any decision table has an empty or REVIEW-flagged cell  
* Any path is introduced but not routed  
* Any value claim has no supporting data on the same page or a direct link  
* Any monetary example uses non-USD currency without explicit regional scope  
* Any section ends on a hedge or a disclaimer  
* Any REVIEW flag appears in rendered content (not in JSX comments)  
* Any high-value URL or action is only accessible behind an accordion or collapsed state

This gate should be a checklist in the Codex task brief template under Step 0 verification, and applied by the human reviewer before approving the PR.

##   **CLAUDE AFTER FEEDBACK** 

Task 1: Answers

1. Hate. It's second-person performative — "you are in commercial operator territory" is patronising framing, not information delivery. It tells the reader who they are rather than telling them something they don't know. It also uses "that means" as a transition, which is hand-holding. The original at least delivered three concrete distinctions immediately. The fix is worse than the problem.  
2. Only ok. "Both streams have different scaling characteristics" is vague filler — it restates "two streams, different" without saying what the difference is. The second clause ("which one dominates your return depends on...") is better but still conditional hedging. It should lead with the asymmetry, not the condition.  
3. Neither should stay. Both are redundant relative to the table. The table contains all seven comparison dimensions in scannable form. Any prose sentence that repeats table content is noise. The fix should have been: delete both, let the table stand alone, and open the next section directly.  
4. Good until last sentence. "The fee path scales; the reward path does not" is a claim masquerading as precision. Rewards do scale — with stake, with delegation, with protocol inflation rate changes. The sentence is directionally useful but technically imprecise, which is a trust-eroding error in documentation for operators who will test this claim against reality.  
5. First sentence good, second not. "This page covers how to raise the ceiling" is journalistic, not technical. It's a teaser line for a blog post. Documentation doesn't need to tease — the reader is already there. It should either go straight to the first section or state the scope in one neutral clause.  
6. Small repeated error. Bracket-style action instructions — "verify with Rick/Mehrdad," "confirm figure," "REVIEW" — are leaking into the fix examples. The fix copy should be clean publishable prose. Review flags belong in comments, not in the replacement text being demonstrated as "correct."  
7. Missing value capture. The fix doesn't capture the biggest commercial upside: that AI Orchestrators sit outside the top-100 active set entirely. There is no stake-based competition. Selection is purely capability and hardware capacity. The commercial opportunity is not marginal differentiation — it's access to a demand pool with almost no incumbent competition, where the constraint is VRAM and model support, not LPT rank. And the biggest upside is Gateway/application developer relationships: being the compute layer that an app developer needs to build on is a recurring revenue moat, not just a pricing lever.  
8. Same repeated issue. The fix still ends with a parenthetical action instruction in the prose body — "verify which pipelines are actively routed at \[tools.livepeer.cloud/ai/network-capabilities\]" — rather than a clean inline link. Parenthetical action calls in body prose are a formatting tell for "I ran out of sentence."  
9. Issues with fix. "you are in commercial operator territory" is condescending. "That means" is a hand-holding connector. Both signal talking at the reader rather than to them. The original problem was third-person distance; the fix replaced it with second-person presumption. Neither is right. The correct register for this audience is peer-technical: state what is true, trust them to self-locate.  
10. NO on fix 13\. The original error was correct to identify — £ is wrong for an international audience. But the fix introduces new problems: a price range in parentheses ("$900–1,100, depending on region") is vague padding, and "depending on region" is exactly the kind of qualifier the framework should eliminate. The original sentence's structure was fine — concrete GPU model, concrete price, concrete break-even period. The fix should have been one change: replace £ with USD and remove the hedging parenthetical. Not a prose rewrite.  
11. Ruined by repeated error. The fix ends with "The two models require different capital commitment decisions" — a conclusion the reader is already capable of drawing from the numbers just presented. Spelling out the inference is the same throat-clearing error identified in \#2 and \#6. State the data; trust the reader.  
12. "Real" meh, "use it" same. "Real negotiating leverage" — "real" is an intensifier that signals insecurity about the claim. If it's leverage, say it's leverage. "Real" adds nothing and slightly weakens the assertion. "Use it:" followed by a colon is an instruction-bark. The reader knows to act on leverage; the colon construction is imperative mode for a peer-technical audience who doesn't need to be told to act.  
13. Not better — not business-first, baby language. "What it takes to build sustainable ETH revenue" — "what it takes" is exactly the kind of soft consumer-product language that doesn't belong in documentation for enterprise GPU operators evaluating a capital commitment. Persona D is reading a P\&L framing, not a motivational onboarding flow. The description should be: Revenue mechanics, cost structure, and viability thresholds for Livepeer Orchestrator operation. Functional. Precise. No inspiration required.  
14. Good until "- if". "Together, these can generate meaningful returns on idle GPU hardware — if the cost base is understood before setup." The dash clause undermines the value statement. It introduces a condition that makes the whole sentence read as a caveat rather than a proposition. The cost section immediately below handles the condition. Cut from the dash onward.  
15. Callout points to community — which is dynamic — and that's correct. The original Note was a CYA disclaimer. The fix should polish it into a forward-pointer: acknowledge the landscape evolves, point to the community as the live source, and do it in one clean sentence without the apologetic framing. Something like: Operator profiles and active pools change frequently — the \#orchestrators `Discord channel is the current-state source.`  
16. Callout example good. Confirmed.  
17. Zero-to-hero path needed first. Before relationships and reputation tactics, the page needs a sequential path for AI Orchestrator operators: hardware → model loading → capability declaration → first job received → pricing optimisation → Gateway outreach → per-Gateway agreements. The relationship-building content is step 4 or 5, not step 1\. A stage table (or numbered path) would make the sequence explicit and prevent operators from attempting Gateway negotiation before they have a performance history to offer.  
18. "Persona" explicit not needed. Agree. The routing should be functional ("if you have a single GPU and limited LPT...") not taxonomic ("Persona A/B/E"). Personas are a planning tool, not a reader-facing label.

##   **CLAUDE Fixes for All 32 Identified Errors**

<CustomDivider />

### **THROAT-CLEARING & META-COMMENTARY**

**1\. Page announcement** *Principle:* Open with the insight, not the announcement.

❌ `This page covers what professional-grade Orchestrator operation looks like in practice.` ✅ Delete entirely. The paragraph already explains the distinction between hobbyist and commercial models. The sentence adds nothing.

<CustomDivider />

**2\. Instructive preamble** *Principle:* Be the bridge, don't announce it.

❌ `Understanding both is essential before modelling any return on investment.` ✅ `Both streams have different scaling characteristics — which one dominates your return depends on your hardware, stake position, and operational capacity.`

<CustomDivider />

**3\. Throat-clearing filler** *Principle:* Remove words that exist to soften a sentence, not to inform it.

❌ `The reason is straightforward: fee income scales with workload volume, while inflation rewards scale with stake.` ✅ `Fee income scales with workload volume. Inflation rewards scale with stake. For operators who can win work, fees compound; rewards do not.`

<CustomDivider />

**4\. Empty qualifier** *Principle:* Numbers already carry the meaning. Don't restate them in words.

❌ `Gas on Arbitrum L2 is low but not zero. Budget approximately $5-15/month in ETH for a mid-volume node.` ✅ `Budget $5–15/month in ETH for a mid-volume node.` (First sentence deleted.)

<CustomDivider />

### **CONTENT DUPLICATION WITHOUT ADDITIVE VALUE**

**5\. Diagram \+ identical table** *Principle:* Each representation must show something the other cannot.

❌ Mermaid flowchart with seven `TB` nodes showing same rows as table below it. ✅ Replace the diagram with a decision-path flowchart: `Do you want to earn primarily from stake? → Hobbyist path. Do you want to earn primarily from job volume? → Commercial path.` The table stays. The diagram earns its place by adding a decision dimension, not a visual copy of the table.

<CustomDivider />

**6\. Sub-minimal diagram** *Principle:* A diagram that restates prose should be cut.

❌ Two-box mermaid: `Jobs × price → ETH earnings` / `Stake × rate → LPT earnings` ✅ Delete the diagram. Replace with a single concrete example: `An Orchestrator processing 10,000 inference jobs at 900 wei/pixel earns ETH proportional to throughput. An Orchestrator with 50,000 LPT bonded earns a fixed share of round inflation regardless of jobs processed. The fee path scales; the reward path does not.`

<CustomDivider />

**7\. Re-delivering knowledge from a linked page** *Principle:* Assume the prerequisite reading has been done; build on it.

❌ Paragraph re-explaining how inflation rewards work (already covered on Incentive Model page, already linked at page top). ✅ `Inflation rewards set a floor. Service fees set the ceiling. This page covers how to raise the ceiling.` Then proceed to the commercial-specific content without re-explaining the mechanic.

<CustomDivider />

### **FAILS TO ANSWER THE READER'S ACTUAL QUESTION**

**8\. Names the threshold but doesn't give it** *Principle:* If the number is unverified, either verify it before publishing or give a provisional range with a clear disclaimer — do not name the barrier and leave it empty.

❌ `Acquiring enough LPT to compete in the active set is the primary entry barrier for solo video Orchestrators.` \[REVIEW: confirm threshold\] ✅ Either: verify with Rick/Mehrdad and publish: `Competing in the active set requires approximately X LPT as of early 2026. Check [explorer.livepeer.org/orchestrators] for the current bottom of the active set.` Or, if unverifiable at publish time, remove the LPT Stake section header and fold this into a "pool worker is the low-barrier alternative" framing without creating the expectation of a number you won't provide.

<CustomDivider />

**9\. Dangling claim** *Principle:* Every "this is different" claim must show the difference.

❌ `Hardware investment for commercial operation should be planned against projected service fee income, not against inflation rewards alone. The break-even analysis is different.` ✅ `Model hardware investment against projected fee income, not inflation rewards. A node earning £30/month in rewards breaks even on an £800 GPU in 27 months — before electricity. A node processing 50,000 inference jobs/month at competitive rates can reach the same break-even in 6–9 months. The two models require different capital commitment decisions.` \[Link to Operator Rationale cost calculator or earnings page if available.\]

<CustomDivider />

**10\. Link dump without decision support** *Principle:* Tell the reader what conclusion to draw from each tool, not just that the tool exists.

❌ `Check these before setting up a node: [4 links with brief labels]` ✅:

```
Before committing hardware or LPT, verify the following:

- **[explorer.livepeer.org/orchestrators](...)** — Find the stake level of the lowest-ranked active Orchestrator. 
  If it significantly exceeds your available LPT, the pool worker path is more viable than solo operation.
- **[tools.livepeer.cloud/ai/network-capabilities](...)** — Find pipelines with active demand and fewer 
  than 5–10 serving Orchestrators. These are your lowest-competition entry points for AI workloads.
- **[#orchestrators on Discord](...)** — Ask what pricing is currently earning jobs. Forum posts go stale; 
  Discord is current.
- **[Livepeer Forum](...)** — Read the most recent State of the Network thread before modelling earnings.
```

<CustomDivider />

**11\. Arguing against a claim nobody made** *Principle:* Don't introduce a strawman to knock down.

❌ `AI inference is not a guaranteed shortcut to earnings.` ✅ Delete. The table already shows "Variable \- demand-dependent by pipeline" under revenue stability. That handles it. If the risk needs explicit calling out: `AI job volume is pipeline-specific and demand-dependent. Before loading models, verify which pipelines are actively routed at [tools.livepeer.cloud/ai/network-capabilities].`

<CustomDivider />

### **NOT PERSONA-FIRST / AUDIENCE MISMATCH**

**12\. Third-person generalisation** *Principle:* Address the reader directly from sentence one.

❌ `Most Orchestrator operators start by thinking about LPT inflation rewards. Commercial operators think primarily about ETH service fees.` ✅ `If you are here to build a sustainable revenue stream — not just earn staking rewards — you are in commercial operator territory. That means ETH service fees, Gateway relationships, and infrastructure investment planned against real job volume.`

<CustomDivider />

**13\. Excludes part of the target audience** *Principle:* The opening must be legible to every persona the page serves.

❌ `Owning a GPU is not enough to make an Orchestrator profitable.` ✅ `Running a profitable Orchestrator requires more than hardware. This page quantifies what "more" means — the stake threshold, cost structure, and workload volume required to clear your cost base — so you can evaluate the path before committing.`

(Now works for Persona A who owns hardware and Persona D who is evaluating whether to acquire it.)

<CustomDivider />

**14\. Third person section header on a page addressed to operators** *Principle:* Section headers should reflect the reader's question, not describe the content from outside.

❌ `## The Commercial Operator Landscape` ✅ `## Which Type of Commercial Operator Are You?`

Then rewrite each paragraph to open with "If you are a \[type\]..." rather than "\[Type\] operators do X."

<CustomDivider />

**15\. UK currency for international audience** *Principle:* Use USD as the default for international technical documentation, or make the example currency-agnostic.

❌ `at £800 for an RTX 4090 and £30/month earnings, the hardware break-even alone is over two years` ✅ `At $900–1,100 for an RTX 4090 (depending on region) and $30/month in inflation rewards, the hardware break-even alone exceeds two years — before electricity costs.`

<CustomDivider />

**16\. Diplomatic non-statement** *Principle:* Don't editorially manage the reader's feelings about their choice. They are technical operators.

❌ `Neither model is superior - they reflect different operator goals and capabilities.` ✅ Delete. The table makes the comparison. Operators will reach their own conclusions. If a bridge sentence is needed: `Your hardware profile and LPT access determine which model is viable — not preference.`

<CustomDivider />

### **NO CLEAR USER JOURNEY / MISSING NEXT STEP**

**17\. Consequence without prevention** *Principle:* Every warning must be accompanied by the action that prevents it.

❌ `A depleted ETH wallet causes missed reward rounds (LPT permanently foregone) and unredeemed winning tickets (ETH fees permanently lost).` ✅ `A depleted ETH wallet causes missed reward rounds (LPT permanently foregone) and unredeemed winning tickets (ETH fees permanently lost). Set a balance alert at your monitoring layer or use a scheduled top-up cadence. See [Metrics and Monitoring] for Prometheus alert configuration.`

<CustomDivider />

**18\. Claim without operationalisation** *Principle:* "You have leverage" must be followed by "here is how to use it."

❌ `An Orchestrator running a pipeline that a Gateway cannot currently source from the network has real negotiating leverage.` ✅ `An Orchestrator running a pipeline that a Gateway cannot currently source has real negotiating leverage. Use it: reach out directly via the` \#orchestrators`Discord channel, reference your pipeline capability and uptime history, and propose a`pricePerGateway `arrangement. Gateway operators actively look for capability coverage they cannot source from the open market.`

<CustomDivider />

**19\. Third path introduced but not routed** *Principle:* If you surface a path, take the reader somewhere on it.

❌ `Many operators run a hybrid: inflation rewards provide a base, service fees from well-served application workloads provide the upside.` ✅ `Many operators run a hybrid model: inflation rewards cover baseline costs; service fees from AI and video workloads provide the upside. If this is your target operating model, start with the solo video or pool worker path to establish your stake position, then add AI capability once the node is stable. See [Video vs AI: Starting Workload] below for the entry requirements of each.`

<CustomDivider />

### **VALUE PROPOSITION NOT FIRST**

**20\. Mechanism-first frontmatter description** *Principle:* Descriptions are ad copy — lead with the outcome the reader wants.

❌ `How commercial Orchestrators operate - earning from service fees rather than inflation, building Gateway relationships, and positioning for application workloads.` ✅ `What it takes to build sustainable ETH revenue from Livepeer — service fee economics, Gateway relationships, and the operational standards that win consistent work.`

(Also removes the em-dash style violation.)

<CustomDivider />

**21\. Costs before value** *Principle:* For an evaluation page, establish the opportunity before the cost structure.

❌ Opens with the profit formula as a viability test (implicitly: "you probably won't make it"). ✅ Open with the value framing first:

`Livepeer Orchestrators earn from two streams: ETH service fees paid per job, and LPT inflation rewards distributed each round. Together, these can generate meaningful returns on idle GPU hardware — if the cost base is understood before setup. The sections below quantify both sides of that equation.`

Then introduce the profit formula as a tool, not a warning.

<CustomDivider />

### **VAGUE / IMPRECISE LANGUAGE**

**22\. Two undefined terms in a performance-critical sentence** *Principle:* Give operators the threshold they need to act.

❌ `Consistently slow responses - even within acceptable job completion time - affect long-term selection probability.` ✅ `Gateways track response latency per Orchestrator across sessions. Responses consistently above the network median reduce your selection probability over time, even if individual jobs complete within the timeout. Target sub-200ms initial response latency for AI pipelines; sub-50ms for video session setup.` \[REVIEW: confirm latency targets with Rick/j0sh\]

<CustomDivider />

**23\. "Among other factors"** *Principle:* Name the factors or don't mention them.

❌ `Gateways rank Orchestrators by response latency among other factors.` ✅ `Gateways rank Orchestrators by: price relative to declared` maxPricePerUnit`, response latency, capability match for the requested pipeline, and historical session reliability. Optimising all four is required for consistent selection.`

<CustomDivider />

**24\. "Consistently online" without a number** *Principle:* Every operational standard must be quantified.

❌ `Not necessarily production-grade infrastructure, but consistently online and monitored.` ✅ `Aim for 95%+ uptime. Below that threshold, reward call failures and missed sessions compound into meaningful LPT and ETH losses. Home setups with unreliable power or shared hardware typically fall below this target; if that is your situation, the pool worker path is lower-risk.`

<CustomDivider />

**25\. "Effectively GPU infrastructure businesses"** *Principle:* Define the role in Livepeer-specific terms, not analogies.

❌ `Pool operators are effectively GPU infrastructure businesses, combining the service fee model with a managed-Orchestrator offering.` ✅ `Pool operators hold the on-chain Orchestrator registration and handle reward calling, stake management, and Gateway relationships. Worker nodes join the pool and contribute GPU compute without managing on-chain operations. The pool takes a margin; workers receive the remainder of job fees. This is the operating model closest to a managed GPU cloud, run on Livepeer's protocol layer.`

<CustomDivider />

### **AUTHOR-PROTECTIVE HEDGING**

**26\. CYA note disguised as guidance** *Principle:* Either update the content or remove the section. Don't publish a disclaimer that the section may be wrong.

❌ `Note: The commercial orchestrator landscape is evolving. The Livepeer Forum and #orchestrators Discord contain the most current information on who is operating commercially.` ✅ Remove the Note. Add a `lastVerified` update to the frontmatter and a `{/* REVIEW: confirm operator list with community before publish */}` inline flag for the human reviewer — keep it out of the published page. If the section is genuinely too stale to publish, cut the named types to only what is verified.

<CustomDivider />

**27\. Hedging the decision tool** *Principle:* Temporal context belongs in metadata, not in the narrative framing of a decision aid.

❌ `Current network conditions as of early 2026 inform this matrix - stake requirements and fee levels shift over time.` ✅ Delete from body copy. The frontmatter already has `lastVerified: '2026-03-15'`. If the matrix needs a volatility warning, add a compact callout after it: `Stake thresholds and fee rates shift with network conditions. Verify current figures at [explorer.livepeer.org] before committing.`

<CustomDivider />

**28\. Unresolved placeholder in a published decision aid** *Principle:* An empty table cell in a decision matrix is a broken product, not a draft status.

❌ `Active set threshold {/* REVIEW: confirm threshold */}` in the LPT Required column. ✅ Two options:

- **Verify and publish**: Replace with `≈ top 100 by bonded stake (verify at [explorer.livepeer.org/orchestrators])` once confirmed with Rick/Mehrdad.  
- **Block publish**: Add a CI check or pre-publish review gate that fails on unresolved `REVIEW` flags in decision-critical table cells. This should not merge until resolved.

<CustomDivider />

### **STRUCTURAL / INFORMATION HIERARCHY FAILURES**

**29\. High-value action hidden in accordion** *Principle:* The most urgent action for the reader must be in the page body, not collapsed.

❌ tools.livepeer.cloud URL buried inside the Capability selection accordion. ✅ Surface it in the section intro before the accordions:

`Before selecting capabilities to serve, check which pipelines are actively routed and at what prices: [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities). Prioritise pipelines with active demand and fewer than five serving Orchestrators.`

The accordion can then expand on the strategy; the URL is no longer gated.

<CustomDivider />

**30\. Prose that restates a formula** *Principle:* Don't explain arithmetic to engineers.

❌ `If that line does not remain positive at the workload volume, price level, and uptime the node can realistically sustain, solo operation does not clear its cost base.` ✅ Delete entirely. The formula `profit = ETH fees + LPT rewards - [costs]` is self-explanatory. If a sentence must follow, it should add a specific scenario: `A node processing zero AI jobs and earning only inflation rewards on 10,000 LPT covers hardware costs in approximately [X] months under current network conditions — before electricity.` \[REVIEW: confirm figure\]

<CustomDivider />

### **MISSING PERSONA ROUTING**

**31\. No self-selection mechanism at the point of differentiation** *Principle:* Persona routing must appear at the decision point inside the page, not only on a Starmap page.

❌ Both pages address all personas without differentiation. ✅ Add a routing callout at the top of each page, immediately after the opening paragraph:

```
<Tabs>
  <Tab title="Individual GPU operator (Persona A/B/E)">
    Start with the cost categories and decision matrix below. 
    The pool worker path is the lowest-barrier entry point if your LPT is limited.
  </Tab>
  <Tab title="Infrastructure or enterprise operator (Persona C/D)">
    Jump to [Service Fee Economics] and [Gateway Relationships]. 
    The decision matrix applies at the fleet level — evaluate per-GPU, not per-node.
  </Tab>
</Tabs>
```

<CustomDivider />

**32\. Hybrid path introduced but never developed** *Principle:* If the research shows the hybrid is the most common real-world profile, it needs a page, not a sentence.

❌ `Many operators run a hybrid: inflation rewards provide a base, service fees from well-served application workloads provide the upside.` \[dropped\] ✅ Two options:

- **Immediate fix**: Add a third row to the decision matrix labelled `Hybrid (video + AI)`, with its own hardware minimum (24 GB VRAM), LPT requirement (active set threshold), and "Best for: established video Orchestrators adding AI capability to an existing income base."  
- **Full fix**: Create a dedicated page `hybrid-operations.mdx` covering the sequencing (establish video node → verify stability → add AI pipelines → manage VRAM allocation between workloads), and link to it from the comparison table. This is the most common Persona C journey and currently has no dedicated documentation.

## 

##   **CLAUDE EVAL** 

Here are 32 concrete content copy failures across both files, organised by error type. Each is named, located, and cited.

<CustomDivider />

## **THROAT-CLEARING & META-COMMENTARY**

*(Google Technical Writing: never announce what you're about to do — just do it)*

**1\. "This page covers what professional-grade Orchestrator operation looks like in practice."** `business-case.mdx`, opening paragraph. **Error: Page announcement.** Wastes a sentence telling the reader what the page will do instead of doing it. Cut entirely.

**2\. "Understanding both is essential before modelling any return on investment."** `operator-rationale.mdx`, What Orchestrators Earn section. **Error: Instructive preamble.** Tells the reader they must understand something rather than giving them the understanding. The job of the sentence is to be the bridge — instead it's a sign saying "bridge ahead."

**3\. "The reason is straightforward:"** `business-case.mdx`, Why Service Fees Scale section. **Error: Throat-clearing filler.** Adds no information. Deleting it makes the sentence that follows stronger.

**4\. "Gas on Arbitrum L2 is low but not zero."** `operator-rationale.mdx`, ETH for Gas accordion. **Error: Empty qualifier.** The previous sentence already gives dollar ranges ($0.01–0.12). "Low but not zero" restates what the numbers already show. Dead copy.

<CustomDivider />

## **CONTENT DUPLICATION WITHOUT ADDITIVE VALUE**

*(DITA: single-sourcing principle — don't repeat without purpose)*

**5\. The Hobbyist vs Commercial mermaid diagram followed by the identical comparison table.** `business-case.mdx`, Hobbyist vs Commercial section. **Error: Verbatim visual duplication.** Both representations carry the same seven rows of the same data. One should be cut or the diagram should show something the table cannot — e.g., a decision flow, not a grid.

**6\. The second mermaid diagram (Jobs × price → ETH vs stake × rate → LPT).** `business-case.mdx`, Why Service Fees Scale section. **Error: Sub-minimal diagram.** Two boxes with arrows repeat what the paragraph above already states in plain prose. The diagram adds zero information. It exists to look technical.

**7\. The explanation of how LPT inflation rewards work.** `business-case.mdx`, Why Service Fees Scale section. **Error: Duplicated from the Incentive Model page already linked at the top of the page.** The page is titled "The Commercial Case" — it should assume that knowledge, not re-deliver it.

<CustomDivider />

## **FAILS TO ANSWER THE READER'S ACTUAL QUESTION**

*(Diátaxis: know what question each page is answering)*

**8\. "Acquiring enough LPT to compete in the active set is the primary entry barrier for solo video Orchestrators." — without giving the threshold.** `operator-rationale.mdx`, LPT Stake accordion. **Error: Names the most important number and then omits it.** The REVIEW flag confirms it's unverified. For Persona A ("how much LPT do I need?"), this is the one question the page must answer. Flagging it as unresolved and publishing is worse than not mentioning it.

**9\. "The break-even analysis is different." — no analysis follows.** `business-case.mdx`, Infrastructure investment accordion. **Error: Dangling claim.** The reader is told the break-even works differently for commercial operation. No formula, no example, no link. The Operator Rationale page has cost data but is not cross-linked here. This sentence creates a question it refuses to answer.

**10\. Research Tools section lists four links with no guidance on what to look for at each.** `operator-rationale.mdx`, Research Tools section. **Error: Link dump without decision support.** Persona A's orienting question is "is it worth my time?" The tools section should tell them: "if you see fewer than X active Orchestrators at your price tier, there is room; if the top-100 require Y LPT, you need Z." Instead it says: "check these before setting up a node." This is not useful.

**11\. "AI inference is not a guaranteed shortcut to earnings."** `operator-rationale.mdx`, Video vs AI section. **Error: Managing expectations that were never set.** No preceding copy promised AI was a shortcut. This sentence argues against a claim nobody made. It is pure defensive hedge that adds friction for Persona E who is genuinely evaluating this path.

<CustomDivider />

## **NOT PERSONA-FIRST / AUDIENCE MISMATCH**

*(Red Hat Modular Docs: write to a specific user story)*

**12\. "Most Orchestrator operators start by thinking about LPT inflation rewards."** `business-case.mdx`, opening. **Error: Third-person generalisation instead of second-person address.** The intended reader is a commercial operator or someone evaluating whether to become one. "You are probably here because you want to build a real revenue stream, not just earn staking rewards" would engage them. This addresses a generic "operator" from outside.

**13\. "Owning a GPU is not enough to make an Orchestrator profitable."** `operator-rationale.mdx`, opening. **Error: Excludes part of the target audience from sentence one.** Persona D (enterprise) is evaluating whether to acquire hardware. They don't own a GPU yet — this framing excludes them before the first full stop.

**14\. Section title: "Who Operates Commercially"** `business-case.mdx`. **Error: Third person on a page addressed to operators.** The reader is asking "am I a commercial operator? which type am I?" The section title should reflect that question: "Which Commercial Operator Type Are You?" or at minimum use second-person routing ("Is This You?").

**15\. The £ currency in the hardware break-even example.** `operator-rationale.mdx`, Hardware accordion: "at £800 for an RTX 4090 and £30/month earnings." **Error: UK localisation for an international audience.** The persona research shows US and global GPU operators (GPU mining Discord, US cloud providers). Neither Persona A, C, D, nor E is specified as UK-based. This should use USD, reference multiple currencies, or be currency-agnostic.

**16\. "Neither model is superior \- they reflect different operator goals and capabilities."** `business-case.mdx`, after the comparison table. **Error: Unnecessary diplomacy for a technical audience.** Persona C and D are not worried about being judged for their choice. This sentence exists to avoid seeming biased, not to inform the reader. It is copy written to protect the author, not serve the audience.

<CustomDivider />

## **NO CLEAR USER JOURNEY / MISSING NEXT STEP**

*(Diátaxis: every page must have a clear onward path)*

**17\. "A depleted ETH wallet causes missed reward rounds (LPT permanently foregone) and unredeemed winning tickets (ETH fees permanently lost)."** `operator-rationale.mdx`, ETH for Gas accordion. **Error: Consequence without prevention.** The stakes are clearly stated (permanent loss), but there is no next step: no "set a minimum balance alert," no link to a monitoring guide, no recommended wallet top-up cadence. The reader is alarmed and then abandoned.

**18\. "An Orchestrator running a pipeline that a Gateway cannot currently source from the network has real negotiating leverage."** `business-case.mdx`, Building Gateway relationships. **Error: Claim without operationalisation.** "Real negotiating leverage" — over what? How do they exercise it? Where do they go to find Gateway operators? The sentence ends. No link to the community tools, no Discord channel, no concrete action.

**19\. "Many operators run a hybrid: inflation rewards provide a base, service fees from well-served application workloads provide the upside."** `business-case.mdx`, after the comparison table. **Error: Introduces a third path without routing.** This is actually useful information for many operators, but it is dropped as an aside. There is no "if this sounds like you, here is how to approach it." No link. No further development. It raises an option and then abandons the reader.

<CustomDivider />

## **VALUE PROPOSITION NOT FIRST**

*(Product documentation: lead with value, then mechanism)*

**20\. The page description in frontmatter uses mechanism-first framing.** `business-case.mdx`, description field: "How commercial Orchestrators operate \- earning from service fees rather than inflation, building Gateway relationships, and positioning for application workloads." **Error: Mechanism-first, value-last.** The reader's question is: "can I build a real business on this?" The description should open with the outcome (sustainable ETH revenue from application workloads) and then explain how. Additionally, the `-` is an em-dash style violation per project rules.

**21\. The Operator Rationale page opens with the cost problem, not the value proposition.** `operator-rationale.mdx`, opening paragraph. **Error: Stakes before opportunity.** For an evaluation page targeting Persona A (who asks "is it worth my time?") and Persona D (who asks "what's the business model?"), leading with "owning a GPU is not enough to be profitable" is negative framing before any value has been established. Revenue potential first, cost reality second.

<CustomDivider />

## **VAGUE / IMPRECISE LANGUAGE THAT FAILS TECHNICAL READERS**

*(Microsoft Writing Style Guide: be precise; don't force the reader to interpret)*

**22\. "Consistently slow responses \- even within acceptable job completion time \- affect long-term selection probability."** `business-case.mdx`, Latency targets section. **Error: Two undefined terms.** "Acceptable job completion time" — defined where? "Long-term selection probability" — what is the timeframe? What magnitude of effect? Persona C (Pro Operator) is trying to tune performance targets. This gives them a warning sign without a threshold to act on.

**23\. "Gateways rank Orchestrators by response latency among other factors."** `business-case.mdx`, Latency targets. **Error: "Among other factors" is a known content smell.** What other factors? If the reader is optimising for Gateway selection, they need the full ranking criteria, not a trailing "etc." This is the kind of sentence that generates a Discord question five minutes after reading.

**24\. "Not necessarily production-grade infrastructure, but consistently online and monitored."** `operator-rationale.mdx`, near Decision Matrix. **Error: Vague standard.** What is "consistently online" as a number? 95% is mentioned later, but it's not tied to this sentence. The reader has no actionable target. Compare the commercial case's "99%+" — that's specific. "Consistently online" is not.

**25\. "Pool operators are effectively GPU infrastructure businesses."** `business-case.mdx`, Commercial Operator Landscape. **Error: Imprecise category for the precise reader.** Persona D is an actual GPU infrastructure business evaluating whether to join Livepeer. Telling them that pool operators are "effectively" what they already are, without precision, wastes the sentence. It should describe what distinguishes pool operators in Livepeer's specific context.

<CustomDivider />

## **CONTENT THAT EXISTS TO MANAGE THE AUTHOR'S UNCERTAINTY, NOT TO SERVE THE READER**

**26\. The Note component ending the commercial operator landscape section.** `business-case.mdx`: "The commercial orchestrator landscape is evolving. The Livepeer Forum and the \#orchestrators Discord channel contain the most current information on who is operating commercially." **Error: Disclaimer that undermines the page.** Ending a section titled "Who Operates Commercially" with "don't rely on us for this" signals that the section doesn't do what it claims. Per Diátaxis: if the content may be stale, update it; don't apologise for it inline. This is a CYA note disguised as user guidance.

**27\. "Current network conditions as of early 2026 inform this matrix \- stake requirements and fee levels shift over time."** `operator-rationale.mdx`, Decision Matrix preamble. **Error: Hedging the decision tool.** The decision matrix is the highest-value element on this page for Persona A and C. Prefacing it with "this might be wrong" undermines the reader's confidence at the moment they most need it. Temporal context belongs in a version/date field, not the narrative.

**28\. The REVIEW flag left visible in the Decision Matrix table cell.** `operator-rationale.mdx`, Solo video Orchestrator row: "Active set threshold {/\* REVIEW: confirm threshold \*/}" **Error: Unresolved placeholder in a navigational decision aid.** This is the most important quantitative input for the solo video path. Publishing a table where the key variable reads "TBC" tells Persona A that the docs cannot answer their most critical question. This should block publish, not be merged with the flag intact.

<CustomDivider />

## **STRUCTURAL / INFORMATION HIERARCHY FAILURES**

*(Diátaxis: the most actionable information must be most accessible)*

**29\. The most actionable sentence on business-case.mdx is buried in an accordion.** `business-case.mdx`, Capability selection accordion: "Check current network demand at tools.livepeer.cloud/ai/network-capabilities to see which pipelines are being routed and at what prices." **Error: High-value action hidden behind a collapsed UI state.** This URL answers the reader's most urgent question (what can I earn right now?). It should be surfaced in the body copy or a prominent callout, not collapsed behind "Capability selection."

**30\. "If that line does not remain positive at the workload volume, price level, and uptime the node can realistically sustain, solo operation does not clear its cost base."** `operator-rationale.mdx`, after the profit formula. **Error: Restates the obvious.** The profit formula already encodes this logic. The sentence below it explaining that negative \= bad adds zero information for the technical audience this page targets. It reads as padding to explain a formula to a reader who presumably understands basic arithmetic.

<CustomDivider />

## **MISSING PERSONA ROUTING**

**31\. Neither page routes between personas or operating paths at the point where the reader is differentiating.** Both files. **Error: No self-selection mechanism.** Persona A (Solo Miner) and Persona D (Enterprise) have radically different needs, yet both files address them interchangeably. There is no "if you are an individual GPU operator, start here; if you are evaluating at a business level, the economics section is most relevant." The persona routing that exists in the Starmap spec is never applied at the page level.

**32\. "Many operators run a hybrid" — introduced but never developed as a viable path.** `business-case.mdx`. **Error: Incomplete persona coverage.** The persona research shows that many real operators are hybrid (Persona A deepening into AI, Persona C with mixed workloads). This path is mentioned once and then dropped. There is no brief for it, no link, no next step. This is a gap in the journey for likely the most common real-world operator type.

<CustomDivider />

**Summary by category:**

| Category | Count |
| :---- | :---- |
| Throat-clearing / meta-commentary | 4 |
| Content duplication without value | 3 |
| Fails to answer the actual question | 4 |
| Not persona-first / audience mismatch | 5 |
| No clear user journey / missing next step | 3 |
| Value proposition not first | 2 |
| Vague / imprecise language | 4 |
| Author-protective hedging | 3 |
| Structural / information hierarchy | 2 |
| Missing persona routing | 2 |
| Total | 32 |

# ChatGPT

##  **CHATGPT- After feedback**

Yes. Your corrections are right.

The miss was **not just prose quality**. It was:

1. **structure**  
2. **page purpose**  
3. **value-prop-forward voice**  
4. **a ban on qualifying / contrastive drift**

### **Structural correction**

For a page called **Business Case**, a heading like **Hobbyist vs Commercial** is weak.  
It centers taxonomy instead of the reader’s question.

Better structure:

* **Why Run a Commercial Orchestrator**  
* **How Commercial Revenue Works**  
* **What Gateways Pay For**  
* **What Makes an Operator Competitive**  
* **Infrastructure Required**  
* **Who This Model Fits**  
* **Alternative Paths** *(later, not early)*

That keeps the page on the commercial case first.  
“Hobbyist vs Commercial” is only useful in a separate comparison page or late-stage decision matrix.

### **Writing-rule corrections for the skill**

The skill should explicitly ban this in intros and section leads:

* “depends on”  
* “whether it makes sense”  
* “rather than”  
* “not just”  
* “if your goal is”  
* “if you can”  
* “this page covers”  
* “understanding X is essential”  
* “start with”  
* “the reason is straightforward”

Those patterns kill product prose.

### **Updated prose rules**

* **Lead with the earning model**  
* **Lead with the operator outcome**  
* **No negation in value copy**  
* **No unexplained protocol language before plain English**  
* **No throat-clearing**  
* **No false neutrality**  
* **No contrastive qualification unless in a boundary section**  
* **Business language is allowed when concrete**  
* **Commercial copy should describe advantage, mechanism, and standard**

And yes: **“primary economic lever” is fine** if it points to something real.

### **Better rewrites**

Instead of:

Most Orchestrator operators start by thinking about LPT inflation rewards...

Use:

Commercial orchestrators earn by supplying reliable compute to paid network demand. Revenue is driven by delivered workloads, production uptime, and pricing discipline.

Instead of:

Choose the hobbyist model when your main goal is to earn inflation rewards...

Use:

There are two earning models on Livepeer: stake-driven participation and workload-driven operation. This page is about the second: turning production-grade GPU infrastructure into recurring fee revenue.

Instead of:

Commercial upside comes from throughput, not stake.

Use:

Commercial revenue is driven by completed workload volume. More paid jobs, higher uptime, and stronger pricing execution produce more fee revenue.

Instead of:

Commercial orchestration is not just about being discoverable...

Use:

Commercial orchestration earns by being selected repeatedly for paid workloads. Gateway preference is driven by price, uptime, model readiness, and response performance.

Instead of:

Commercial operation means supplying infrastructure to somebody else’s product...

Use:

Commercial operation means supplying compute infrastructure with reliable uptime, fast recovery, model readiness, and low response latency. Fee revenue is proportionate to production-quality delivery.

### **What should change in the skill**

Add a hard review layer called:

**Structure before sentence quality**

Checks:

* Is the page type right?  
* Is the first heading answering the actual reader question?  
* Is the intro stating the value proposition immediately?  
* Are headings framed around outcomes, not taxonomy?  
* Are contrastive qualifiers removed from value copy?

That is the real fix.

—  
Below I’m judging both pages against the standards in the proposed writing skills:

* **`docs-page-strategy`**: page type, reader question, audience fit, opening contract  
* **`docs-prose-style`**: answer-first writing, value proposition, positive definition, actor-action-payoff, anti-filler  
* **`docs-review-rewrite`**: severity, issue diagnosis, concrete rewrite

These are **prose/editorial failures**, not necessarily factual failures.

<CustomDivider />

# **1\) `business-case.mdx`**

## **Overall verdict**

This page has real substance, but it still reads like an **explanation page** wearing **evaluation-page metadata**.

Its biggest problem is not correctness. It is that the prose often explains the topic **without answering the commercial reader’s first question early enough**:

**“Why would I run a commercial orchestrator instead of a hobbyist one, and when is that actually worth it?”**

It repeatedly slips into:

* topic-summary prose  
* false neutrality  
* abstract commercial language  
* explanation before payoff  
* “this page covers” style openings

<CustomDivider />

## **5 major examples where the prose misses the skill standard**

### **Example 1 — Opening paragraph fails the decision-page contract**

**Excerpt**

“Most Orchestrator operators start by thinking about LPT inflation rewards. Commercial operators think primarily about ETH service fees. The two models require different hardware investments, different operational standards, and a different relationship with the Gateways that send work. This page covers what professional-grade Orchestrator operation looks like in practice.”

**Severity:** Blocker

**Why it fails**

* It opens with **comparison framing**, not **reader fit \+ upside**.  
* It does not say **who this page is for**.  
* It does not answer **why commercial operation is attractive**.  
* It uses a banned weak pattern: **“This page covers…”**  
* “professional-grade Orchestrator operation” is vague and non-commercially concrete.

**Which skill catches it**

* **`docs-page-strategy`**: decision/evaluation page opening contract is missing.  
* **`docs-prose-style`**: weak opening pattern, no actor-action-payoff.  
* **`docs-review-rewrite`**: would flag as opening answers nothing.

**How the skill would change it**  
It would force the opening to state:

1. who this is for  
2. what the upside is  
3. when it fits  
4. what makes it not fit  
5. what the page helps decide

**Better model**

Run a commercial orchestrator when you want to earn recurring ETH fees from real gateway demand rather than rely mainly on inflation rewards. This model fits operators who can deliver reliable uptime, stable model availability, and competitive pricing. If your goal is mostly passive reward capture from bonded stake, the hobbyist path is a better fit.

<CustomDivider />

### **Example 2 — “Hobbyist vs Commercial” explains taxonomy instead of making the decision sharper**

**Excerpt**

“The Livepeer Orchestrator ecosystem contains two broadly distinct operating models that coexist on the same protocol. Understanding which model applies determines everything from hardware investment to how pricing is set.”

**Severity:** Major

**Why it fails**

* “contains two broadly distinct operating models” is generic ecosystem prose.  
* “Understanding which model applies…” is indirect.  
* It still does not tell the reader **how to choose**.  
* **This is a decision section, so the reader needs fit logic, not category narration**.

**Which skill catches it**

* **`docs-page-strategy`**: section lead should advance the page’s decision job.  
* **`docs-prose-style`**: background-before-answer, abstract noun cluster.

**How the skill would change it**  
It would convert the section into a direct decision frame.

**Better model**

Choose the hobbyist model when your main goal is to earn inflation rewards from stake and spare capacity. Choose the commercial model when you intend to win recurring gateway traffic and operate against uptime, latency, and pricing expectations.

<CustomDivider />

### **Example 3 — “Why Service Fees Scale” is technically fine but commercially weak**

**Excerpt**

“For commercial operators, ETH service fees \- not LPT inflation rewards \- are the primary economic lever. The reason is straightforward: fee income scales with workload volume, while inflation rewards scale with stake.”

**Severity:** Major

**Why it fails**

* “primary economic lever” is consultant language. \- THIS IS FINE  
* “The reason is straightforward” is dead padding.  
* It explains a mechanism, but not the **operator payoff** in plain language.  
* It does not tell the reader what this means for a business decision.

**Which skill catches it**

* **`docs-prose-style`**: ban filler, ban abstract business phrasing, require measurable outcome framing.  
* **`docs-review-rewrite`**: paragraph technically correct but not useful enough.

**How the skill would change it**  
It would rewrite toward explicit commercial consequence.

**Better model**

Commercial upside comes from throughput, not stake. LPT rewards grow with bonded stake, but ETH fee revenue grows with the number of jobs your node actually serves. If you can win recurring gateway traffic, service fees can outgrow inflation rewards.

<CustomDivider />

### **Example 4 — “What Commercial Operation Requires” buries the central trade-off**

**Excerpt**

“Serving application workloads at commercial scale imposes concrete operational requirements beyond what is needed for passive inflation earning.”

**Severity:** Major

**Why it fails**

* “commercial scale” is vague.  
* “concrete operational requirements” is abstract.  
* “passive inflation earning” is language from the writer’s frame, not the reader’s decision frame.  
* It does not say the hard truth plainly: **commercial operation means acting like supplier infrastructure**.

**Which skill catches it**

* **`docs-prose-style`**: state trade-offs explicitly, avoid noun-heavy abstractions.  
* **`docs-page-strategy`**: decision page needs non-fit conditions.

**How the skill would change it**  
It would make the operational bar and the non-fit case explicit.

**Better model**

Commercial operation means supplying infrastructure to somebody else’s product. That changes the bar: you are judged on uptime, recovery speed, model readiness, and response latency. If you cannot operate to those standards, commercial fee revenue is not a realistic starting model.

<CustomDivider />

### **Example 5 — “Working with Gateways” is correct but too system-descriptive**

**Excerpt**

“The standard Orchestrator discovery model is anonymous: a Gateway queries the ServiceRegistry, ranks nodes by capability and price, and selects the best match. Commercial operators take a more active approach.”

**Severity:** Major

**Why it fails**

* This is system description first, reader action second.  
* “take a more active approach” is weak and non-specific.  
* The real commercial idea is: **commercial operation means winning repeat traffic from specific gateways**.  
* The reader needs the action model, not neutral protocol narration.

**Which skill catches it**

* **`docs-page-strategy`**: section lead should answer “what changes commercially?”  
* **`docs-prose-style`**: answer-first, actor-action-payoff.  
* **`docs-review-rewrite`**: generic lead; rewrite needed.

**How the skill would change it**  
It would lead with the operating reality, then explain the mechanism.

**Better model**

Commercial orchestration is not just about being discoverable in the registry. It is about winning repeat traffic from specific gateways. The main lever is per-gateway pricing paired with reliable capability delivery.

<CustomDivider />

## **10+ “DON’Ts” from `business-case.mdx`**

1. **Don’t open an evaluation page with background comparison instead of a qualified answer.**  
   Example: “Most Orchestrator operators start by thinking…”  
2. **Don’t use “This page covers…” in an intro.**  
   Example: “This page covers what professional-grade Orchestrator operation looks like in practice.”  
3. **Don’t default to false neutrality when the reader needs fit guidance.**  
   Example: “Neither model is superior…”  
4. **Don’t use consultant-business phrasing where a direct commercial statement would do.**  
   Examples: “primary economic lever”, “commercially valuable relationship”, “operational approach”.  
5. **Don’t narrate into the answer.**  
   Example: “The reason is straightforward…”  
6. **Don’t rely on vague scale words without consequence.**  
   Examples: “commercial scale”, “high-volume Gateway”, “substantial margin”, “professional-grade”.  
7. **Don’t use abstract noun bundles where the reader needs observable conditions.**  
   Examples: “operational standards”, “application workloads”, “commercial capability management”.  
8. **Don’t explain categories when the reader needs a choice.**  
   Example: “The ecosystem contains two broadly distinct operating models…”  
9. **Don’t bury the value proposition until after the first section and diagram.**  
   The upside of commercial operation should be in the opening, not delayed.  
10. **Don’t describe “active commercial relationships” generically without naming the mechanism.**  
    The mechanism is repeat traffic, negotiated pricing, and reliability.  
11. **Don’t use headings or section leads that merely announce a topic.**  
    Example: “What Commercial Operation Requires” could lead far harder.  
12. **Don’t leave the reader to infer the non-fit case.**  
    The page should explicitly say when **not** to pursue commercial operation.

<CustomDivider />

# **2\) `operator-rationale.mdx`**

## **Overall verdict**

This page is **closer to the target standard** than `business-case.mdx` because it has:

* a real formula  
* gating questions  
* a decision matrix  
* a path model

But it still misses the skill standard in an important way:

It is written too much like **a neutral feasibility memo** and not enough like **a high-value operator decision page**.

Its biggest prose problems are:

* cost-first framing before payoff  
* dense noun-heavy opening  
* too much “analysis voice”  
* generic section leads  
* path decision comes later than it should

<CustomDivider />

## **5 major examples where the prose misses the skill standard**

### **Example 1 — Opening starts with cost mechanics instead of the qualified answer**

**Excerpt**

“Start with the hardware question: can this GPU earn more than it costs to run. The answer is set by workload revenue, stake requirement, gas, bandwidth, electricity, and operator labour at sustainable utilisation.”

**Severity:** Blocker

**Why it fails**

* It begins with a sub-question, not the page’s main answer.  
* The second sentence is dense and noun-heavy.  
* It does not state the reader’s actual decision:  
  **Should I run one, join a pool, run AI only, or not do this yet?**  
* It opens with cost drag before stating upside.

**Which skill catches it**

* **`docs-page-strategy`**: decision page opening contract missing.  
* **`docs-prose-style`**: answer-first violation; abstract noun cluster.  
* **`docs-review-rewrite`**: opening too abstract and too neutral.

**How the skill would change it**  
It would force a qualified answer, then place the formula underneath as support.

**Better model**

Run a Livepeer Orchestrator when your hardware can turn real network demand into revenue above stake, power, bandwidth, and operating costs. This page helps you choose between four outcomes: pool worker, solo video orchestrator, solo AI orchestrator, or not running a node yet.

<CustomDivider />

### **Example 2 — The formula appears before the page has established the payoff**

**Excerpt**

`profit = ETH job fees + LPT inflation rewards - hardware amortisation - stake cost - gas - power - bandwidth - operator time`

**Severity:** Major

**Why it fails**

* The formula is useful, but it arrives before the page has properly framed the decision.  
* It reads like analyst documentation, not product/technical guidance for an operator.  
* It lacks a one-line interpretive statement above it.

**Which skill catches it**

* **`docs-page-strategy`**: ordering problem.  
* **`docs-prose-style`**: formulas should support the answer, not replace it.

**How the skill would change it**  
It would keep the formula, but anchor it with a plain-English summary first.

**Better model**

The commercial test is simple: solo operation only works when fee income and rewards clear your total operating cost. Use the formula below as the simplified model.

<CustomDivider />

### **Example 3 — “What Orchestrators Earn” section lead is generic and passive**

**Excerpt**

“Orchestrators earn from two independent streams. Understanding both is essential before modelling any return on investment.”

**Severity:** Major

**Why it fails**

* “Understanding both is essential” is generic instructional filler.  
* It doesn’t convert revenue mechanics into decision logic.  
* The useful point is not “there are two streams”; it is **whether either stream is actually available to this reader**.

**Which skill catches it**

* **`docs-prose-style`**: banned filler and summary prose.  
* **`docs-review-rewrite`**: paragraph does not do enough reader work.

**How the skill would change it**  
It would sharpen the section into a viability statement.

**Better model**

Solo operation only works if at least one revenue stream is realistically available to you. ETH job fees require real gateway traffic; LPT rewards require enough bonded stake and reliable reward calls.

<CustomDivider />

### **Example 4 — “Cost Categories” lead wastes the first sentence**

**Excerpt**

“Revenue projections mean nothing without a realistic cost baseline. Every operator's situation differs on hardware ownership, electricity cost, and time availability.”

**Severity:** Major

**Why it fails**

* “mean nothing” is rhetorical, not useful.  
* “Every operator’s situation differs” is obvious.  
* The section should move straight into the model: what costs matter and why.

**Which skill catches it**

* **`docs-prose-style`**: ban rhetorical filler, make paragraph do work.  
* **`docs-page-strategy`**: section lead should advance the page’s decision job.

**How the skill would change it**  
It would replace the generic setup with a concrete checklist.

**Better model**

Model five costs before you buy hardware or bond LPT: GPU, stake, gas, bandwidth, and operating time. These are the costs that decide whether solo operation can clear a margin.

<CustomDivider />

### **Example 5 — The page buries its real decision structure too far down**

**Excerpt**

“The right path depends on hardware available, LPT access, and operational capacity. Current network conditions as of early 2026 inform this matrix \- stake requirements and fee levels shift over time.”

**Severity:** Major

**Why it fails**

* The matrix is one of the most useful parts of the page, but the prose introducing it is weak.  
* “The right path depends on…” is generic.  
* “inform this matrix” is bland and non-committal.  
* The matrix logic should feel like the page’s core payoff, not just another section.

**Which skill catches it**

* **`docs-page-strategy`**: path decision should be elevated much earlier.  
* **`docs-review-rewrite`**: payoff buried too late.

**How the skill would change it**  
It would either move the matrix earlier or give it a far stronger decision lead.

**Better model**

Choose the path that matches your actual constraints, not your ideal setup. Limited LPT pushes most first-time operators toward pool work or AI-only operation; stake access and reliable infrastructure open the solo video path.

<CustomDivider />

## **10+ “DON’Ts” from `operator-rationale.mdx`**

1. **Don’t open a decision page with a cost sub-question before stating the qualified answer.**  
   Example: “Start with the hardware question…”  
2. **Don’t pile up abstract cost nouns in the opening.**  
   Example: “workload revenue, stake requirement, gas, bandwidth, electricity, and operator labour…”  
3. **Don’t put a formula before the page has earned it.**  
   Formula should support the decision, not substitute for the intro.  
4. **Don’t use generic instructional filler.**  
   Example: “Understanding both is essential…”  
5. **Don’t use rhetorical throat-clearing.**  
   Example: “Revenue projections mean nothing…”  
6. **Don’t state obvious context instead of useful judgment.**  
   Example: “Every operator’s situation differs…”  
7. **Don’t bury the page’s core decision model behind long cost exposition.**  
   The matrix/path logic should arrive earlier or be foregrounded harder.  
8. **Don’t present rough thresholds without stronger framing.**  
   Example: “approximately 0.00005 ETH” needs clearer “illustrative threshold” language.  
9. **Don’t rely on approximate cost figures as quasi-authoritative prose without strong guardrails.**  
   Gas and electricity examples need clear framing as variable estimates.  
10. **Don’t use generic section openers like “Three questions help determine…”**  
    The section should say what happens if the answer is no.  
11. **Don’t phrase risk in soft, abstract language.**  
    Example: “real viability risk” is weaker than stating the operational consequence directly.  
12. **Don’t make the page sound like the reader is already committed to solo operation.**  
    A good decision page must validate **not running a node yet** as an explicit outcome.

<CustomDivider />

# **Best one-line diagnosis of each file**

## **`business-case.mdx`**

**Problem:** It explains commercial orchestration, but it does not consistently **sell or qualify** the commercial case early enough.

## **`operator-rationale.mdx`**

**Problem:** It contains real decision logic, but it is still framed too much like an **analyst memo** instead of a **clear operator fit page**.

<CustomDivider />

# **What the skills would do to both files overall**

## **`docs-page-strategy`**

Would force both pages to declare:

* who the page is for  
* what the reader is trying to decide  
* the upside  
* the fit conditions  
* the non-fit case  
* the next step after reading

## **`docs-prose-style`**

Would rewrite both pages toward:

* answer-first intros  
* explicit commercial/operational payoff  
* positive definition  
* actor-action-payoff sentences  
* less abstraction  
* less neutrality  
* fewer “topic summary” paragraphs

## **`docs-review-rewrite`**

Would flag, at minimum:

* **business-case opening** as a **Blocker**  
* **operator-rationale opening** as a **Blocker**  
* multiple section leads in both pages as **Major**  
* several phrases in both pages as **Minor-to-Major** for generic AI/business prose

If you want, I’ll do the next pass as a **line-by-line surgical rewrite plan** for both files with replacement copy for every intro, section lead, and weak paragraph.

# Codex

DON’T’s

- 1\. \*\*Do not open with qualifier language.\*\*  
-   Bad: \`Whether it makes sense depends on...\`  
-   
- 2\. \*\*Do not open with prompt scaffolding.\*\*  
-   Bad: \`Start with the hardware question...\`  
-   
- 3\. \*\*Do not define the topic by contrast.\*\*  
-   Bad: \`An Orchestrator is a node business, not passive yield.\`  
-   
- 4\. \*\*Do not open with unexplained protocol terms when the reader is still asking a hardware question.\*\*  
-   Bad: \`Projected ETH job fees and LPT inflation rewards...\`  
-   
- 5\. \*\*Do not use tutorial arithmetic language in operator copy.\*\*  
-   Bad: \`then subtract...\`  
-   
- 6\. \*\*Do not use abstract nouns where variables are required.\*\*  
-   Bad: \`tolerance for operational overhead\`  
-   
- 7\. \*\*Do not use vague access language where the real issue is stake requirement or capital commitment.\*\*  
-   Bad: \`access to LPT\`  
-   
- 8\. \*\*Do not use page-meta or evaluation-meta wording as the main sentence.\*\*  
-   Bad: \`This page helps you judge...\`  
-   
- 9\. \*\*Do not use soft commercial phrasing when a threshold can be stated directly.\*\*  
-   Bad: \`commercial viability depends on whether...\`  
-   
- 10\. \*\*Do not make the reader infer the model.\*\*  
-   The paragraph must state the cost drivers, revenue drivers, and decision output explicitly.  
- 

# Product Writing Skill Package

## Purpose

This report defines the writing-skill package needed to stop weak AI-authored prose in Livepeer docs, especially on pages that need product, economic, operator, or technical framing.

This is not a style-guide rewrite. It is a package recommendation for **skill structure**, **trigger scope**, **bad-pattern bans**, and **source-backed writing rules**.

## Recommendation

Use **3 skills**, not 1\.

Why:

- One skill becomes a bucket of mixed rules and produces shallow output.  
- The failure modes here are different and need separate controls:  
  - wrong reader question  
  - weak economic or technical prose  
  - poor editorial judgment

Recommended split:

1. `docs-reader-intent-and-page-brief`  
2. `docs-commercial-and-technical-prose`  
3. `docs-editorial-quality-gate`

## Why 3 Skills

### 1\. `docs-reader-intent-and-page-brief`

Use before drafting.

Owns:

- page type  
- audience  
- reader question  
- decision framing  
- value proposition  
- what the page must answer in paragraph one

This skill exists because bad prose usually starts before sentence writing. The model begins drafting without fixing:

- who the page is for  
- what the page must help them decide  
- what information matters first

### 2\. `docs-commercial-and-technical-prose`

Use while drafting.

Owns:

- sentence quality  
- technical phrasing  
- operator-grade wording  
- economics language  
- definition quality  
- variable-first writing for pricing, cost, and margin content

This skill exists because the prose failures in this chat were not grammar failures. They were:

- qualifier-led openings  
- prompt-like scaffolding  
- abstract nouns instead of variables  
- internal protocol terms before reader context  
- conversational or soft language on infrastructure topics

### 3\. `docs-editorial-quality-gate`

Use before publish or sign-off.

Owns:

- anti-drivel review  
- route-specificity check  
- audience-fit check  
- product/business/technical voice check  
- banned-pattern enforcement  
- rewrite-or-reject decisions

This skill exists because some prose is technically improved but still not publishable. It must be rejected, not gently polished.

## Proposed Structure

### Skill 1: `docs-reader-intent-and-page-brief`

Core job:

- identify page type  
- identify reader  
- identify first question  
- identify what belongs in the first paragraph

The output should be a brief with:

- page type  
- audience  
- reader question  
- page promise  
- variables or facts that must appear early  
- what must not appear early

For operator-economics pages, the brief must force:

- what the operator is trying to confirm  
- what cost drivers matter  
- what revenue inputs matter  
- what break-even or margin threshold matters

### Skill 2: `docs-commercial-and-technical-prose`

Core job:

- turn the brief into publishable prose

The skill should explicitly prefer:

- variable-first writing  
- threshold-first writing  
- exact nouns  
- operator-grade language  
- plain, literal technical prose

It should explicitly ban:

- qualifier-led openings  
- prompt scaffolding  
- vague summary language  
- unexplained protocol terms in sentence one  
- analogy when direct wording is available  
- emotional or lifestyle framing on infrastructure pages

### Skill 3: `docs-editorial-quality-gate`

Core job:

- decide whether the prose is publishable

The review should fail copy when:

- the first paragraph does not answer the reader's actual question  
- the page sounds generic enough to fit many routes  
- variables are hidden behind abstract nouns  
- the prose sounds like instructions to the writer instead of text for the reader  
- the page sounds conversational when it should sound operational

## The Main Failure Pattern In This Chat

The paragraph under review repeatedly failed for one root reason:

It kept **describing evaluation** instead of **stating the model the reader needed to evaluate**.

That produced these recurring mistakes:

- opening with qualifiers  
- opening with internal writing scaffolding  
- opening with internal protocol labels  
- opening with business-summary language instead of operator variables

## 10 Don'ts From This Paragraph Review

These are the `10` concrete "don't do this" rules surfaced just from this one paragraph review.

1. **Do not open with qualifier language.** Bad: `Whether it makes sense depends on...`

2. **Do not open with prompt scaffolding.** Bad: `Start with the hardware question...`

3. **Do not define the topic by contrast.** Bad: `An Orchestrator is a node business, not passive yield.`

4. **Do not open with unexplained protocol terms when the reader is still asking a hardware question.** Bad: `Projected ETH job fees and LPT inflation rewards...`

5. **Do not use tutorial arithmetic language in operator copy.** Bad: `then subtract...`

6. **Do not use abstract nouns where variables are required.** Bad: `tolerance for operational overhead`

7. **Do not use vague access language where the real issue is stake requirement or capital commitment.** Bad: `access to LPT`

8. **Do not use page-meta or evaluation-meta wording as the main sentence.** Bad: `This page helps you judge...`

9. **Do not use soft commercial phrasing when a threshold can be stated directly.** Bad: `commercial viability depends on whether...`

10. **Do not make the reader infer the model.** The paragraph must state the cost drivers, revenue drivers, and decision output explicitly.

## Expanded Banned Patterns

Ban these patterns in the package:

- `whether it makes sense`  
- `depends on`  
- `worth it`  
- `comes down to`  
- `this page helps you`  
- `this page explores`  
- `start with`  
- `think about`  
- `ask whether`  
- `not X but Y`  
- `more than just`  
- `then subtract`  
- `work out whether`  
- `real money and time`  
- `tolerance for`  
- `access to`

## What To Say Instead

For operator-economics pages, the prose should move in this order:

1. State the operating object.  
2. State the cost and revenue model in reader-familiar language.  
3. State the threshold or decision output.  
4. Introduce the exact protocol terms after the reader knows why they matter.

## Micro Examples

These are safer and more useful than long "hero intro" examples.

### Bad \-\> Better

Bad:

`Whether it makes sense depends on hardware already owned, access to LPT, tolerance for operational overhead, and the workloads available on the network.`

Better:

`Solo operation clears cost only when workload revenue and protocol rewards exceed GPU cost, stake requirement, gas, power, bandwidth, and operator labour.`

Why:

- names the threshold  
- replaces vague nouns with operating variables  
- removes qualifier-led framing

### Bad \-\> Better

Bad:

`access to LPT`

Better:

`bonded stake required for activation and, for video routing, active-set competitiveness`

Why:

- states the actual mechanism  
- removes hand-wavy resource phrasing

### Bad \-\> Better

Bad:

`tolerance for operational overhead`

Better:

`ability to keep the node online, funded for gas, monitored, and able to claim rewards reliably`

Why:

- names the work  
- removes corporate-filler language

### Bad \-\> Better

Bad:

`the workloads available on the network`

Better:

`the workload types the node can serve, the prices Gateways accept, and the utilisation the hardware can realistically win`

Why:

- names route criteria instead of generic demand talk

## Source-Backed Rules To Encode

These are the rules worth encoding into the skills because they are supported by the framework mix:

- Use page-type discipline from Diataxis.  
- Use audience-first writing from Google Technical Writing.  
- Use strong definitions and precise word choice from Google Technical Writing.  
- Use direct verbs, concise sentences, and simple wording from Microsoft.  
- Use explicit procedure and threshold language from Microsoft where procedural content exists.  
- Use modular content blocks from Red Hat so explanation, procedure, and reference do not blur together.  
- Use an editorial reject/pass gate so technically improved but still weak prose does not ship.

## Rules That Came From This Review, Not From The Frameworks

These came from this chat and should be recorded as local package rules, not misrepresented as framework quotations:

- ban prompt-like opening phrases  
- ban qualifier-led openings on operator pages  
- ban analogy where direct variable language is available  
- ban protocol-jargon-first openings for hardware-evaluation readers  
- require operator-grade language for infrastructure economics pages

## Suggested Deliverables In The Final Skill Package

The eventual skill package should contain:

- `SKILL.md` for each of the 3 skills  
- one shared reference file for banned patterns and examples  
- one shared reference file for operator-economics phrasing patterns  
- one short editorial checklist used by the quality-gate skill

## Final Recommendation

The package should be built around this principle:

**Do not let the model narrate the decision. Make it state the model, the variables, and the threshold.**

# Product Writing Research Sources

## Purpose

This report records the sources used to shape the product-writing skill package and separates:

- source-backed framework guidance  
- public skill patterns  
- local rules discovered during this chat

That separation matters because several bad lines generated during this review were **not** taken from the source material. They were local synthesis errors and should be documented as such.

## Source Stack

### 1\. Diataxis

Source:

- [Diataxis](https://diataxis.fr/)  
- [The map](https://diataxis.fr/the-map/)

What it contributed:

- page-type discipline  
- tutorial / how-to / reference / explanation separation  
- anti-mixing rules

What it did **not** contribute:

- prompt-style opening phrases  
- sentence-level tone rules  
- operator-economics wording

### 2\. Google Technical Writing

Source:

- [Google Technical Writing](https://developers.google.com/tech-writing)  
- [Audience](https://developers.google.com/tech-writing/one/audience)  
- [Short sentences](https://developers.google.com/tech-writing/one/short-sentences)  
- [Words](https://developers.google.com/tech-writing/one/words)  
- [Editing](https://developers.google.com/tech-writing/two/editing)

What it contributed:

- write for the reader's actual question  
- define terms clearly  
- prefer direct wording  
- cut filler  
- edit hard

What it did **not** contribute:

- `Start with the hardware question`  
- `Think about`  
- `Ask whether`  
- analogy-led operator intros

### 3\. Microsoft Writing Style Guide

Source:

- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)  
- [Writing step-by-step instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)  
- [Verbs](https://learn.microsoft.com/en-us/style-guide/grammar/verbs)  
- [Use simple words and concise sentences](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences)

What it contributed:

- direct verbs  
- concise wording  
- procedural clarity  
- reader-facing clarity

What it did **not** contribute:

- consumer-ish decision language  
- chatty evaluator language  
- soft qualifier-led openings

### 4\. Red Hat Modular Documentation

Source:

- [Red Hat Modular Documentation](https://redhat-documentation.github.io/modular-docs/)

What it contributed:

- concept / procedure / reference separation  
- reusable module logic

What it did **not** contribute:

- sentence-level operator copy patterns  
- intro wording for business-case pages

### 5\. DITA / OASIS

Source:

- [DITA](https://dita-lang.org/)

What it contributed:

- information typing and reuse as a systems concern

What it did **not** contribute:

- daily sentence writing patterns  
- tone examples for this Livepeer use case

## Public Skill Examples

### Metabase docs-review

Source:

- [Metabase docs-review SKILL.md](https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/docs-review/SKILL.md)

Useful imports:

- practical doc critique  
- anti-filler review stance  
- clear editorial checks

Not imported:

- Metabase-specific tone or repo assumptions

### Metabase shared style guide

Source:

- [Metabase shared style guide](https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/_shared/metabase-style-guide.md)

Useful imports:

- concrete style heuristics  
- anti-noise editing patterns

Not imported:

- company-specific phrasing

### Sentry blog-writing-guide

Source:

- [Sentry blog-writing-guide](https://raw.githubusercontent.com/getsentry/skills/main/plugins/sentry-skills/skills/blog-writing-guide/SKILL.md)

Useful imports:

- stronger openings  
- usefulness threshold  
- sharper editorial self-critique

Not imported:

- blog cadence  
- thought-leadership tone  
- rhetorical flourish

### Zocomputer copywriting

Source:

- [Zocomputer copywriting SKILL.md](https://raw.githubusercontent.com/zocomputer/skills/main/External/copywriting/SKILL.md)

Useful imports:

- audience framing  
- pre-draft brief logic

Not imported:

- conversion style  
- CTA logic  
- persuasion framing

## Local Files Consulted

These are local context, not external source of truth:

- `ai-tools/ai-skills/page-authoring/SKILL.md`  
- `ai-tools/ai-skills/copywriting-research.md`  
- `v2/resources/documentation-guide/authoring-standard.mdx`  
- `v2/resources/documentation-guide/style-guide.mdx`

## Explicit Non-Sources

The following lines or patterns were generated during this chat and should be treated as **mistakes to ban**, not as source-backed recommendations:

- `Start with the hardware question`  
- `Model the node the same way you would any other unit of infrastructure`  
- `then subtract`  
- `not passive yield`  
- any other prompt-like or coaching-style prose in published copy

## What The Sources Support

The combined sources support these conclusions:

- separate page intent from sentence writing  
- separate sentence writing from editorial quality-gating  
- write for the reader's concrete question  
- remove filler and vague abstraction  
- avoid mixing explanation, procedure, and reference modes

## What This Chat Added

This chat added local rules the sources did not state in these exact words:

- operator-economics pages need variable-first openings  
- hardware-evaluation pages should not open with unexplained token terms  
- qualifier-led openings are a major AI failure mode  
- prompt scaffolding must be banned from published prose

## Conclusion

The report package should therefore combine:

- framework-backed structure  
- public-skill-backed editorial patterns  
- locally discovered bans based on the specific failures surfaced in this paragraph review

# Don'ts

- conditional hedging  
- patronising framing  
- **contrast-by-diminishment**   
- **conditional gatekeeping**.  
- vague filler   
- claims masquerading as precision  
- directionally useful but technically imprecise  
- journalistic, not technical : Documentation doesn't need to tease  
- Missing value capture.  
- condescending.   
- "That means" is a hand-holding connector.   
- The correct register for this audience is peer-technical: state what is true, trust them to self-locate.

# Planning Docs

# 6\. Implement

# **Implementation — Next Phase**

**Livepeer Docs Copy Framework — Document 6** **Version 1.0 — March 2026**

<CustomDivider />

## **Purpose**

This document defines the sequenced implementation plan for the framework. It is ordered by dependency — each phase unblocks the next. No content work proceeds until the relevant phase gate is passed.

<CustomDivider />

## **Phase 0 — Product Clarity Gate**

**Before any new content is drafted or any existing content is revised.**

### **Actions**

1. **Answer L0 for the hybrid operator path.** The hybrid model (video transcoding \+ AI inference) is the majority real-world operating model. It currently has no featured page, no L0 answers, and no staged action sequence. This is a product clarity problem that blocks all operator-facing content work.

    Required output: L0 Q1–Q4 answered with product owner (Rich or Rick). Written. Not inferred from existing content.

2. **Answer L0 for GPU Nodes tab.** No brief for GPU Nodes should be written until L0 is complete. Current briefs 01–12 and task files should be held pending L0 sign-off on the majority operator path.

3. **Confirm the featured path hierarchy for all three operator tabs.** GPU Nodes, Gateways, Developers — each tab needs a defined majority path before content sequence planning can proceed.

**Gate:** Phase 1 does not start until L0 is signed off for hybrid path, GPU Nodes, and the tab hierarchy.

<CustomDivider />

## **Phase 1 — Script Infrastructure**

**Parallel to Phase 0\. No content dependency.**

### **Actions**

1. **Create banned reference files**

   * `tools/scripts/lib/banned-words.txt`  
   * `tools/scripts/lib/banned-phrases.txt`  
   * `tools/scripts/lib/banned-patterns.txt`  
2. Source: Document 3, Part B. These files are the single source of truth — both scripts and SKILL.md files import from them.

3. **Build lint-copy.js** Tier 1: exact banned word/phrase match. Blocks merge on any hit. Tier 2: pattern match. Warns; requires human sign-off.

4. **Build lint-structure.js** Checks: empty TableCell in decision context, REVIEW flags in rendered content, missing frontmatter fields, lastVerified staleness.

5. **Build test suite (T3)** Fixture files per Document 5, T3. All tests green before CI integration.

6. **CI integration** Add to `docs-v2` PR workflow. Tier 1 failures block merge. Tier 2 failures warn.

**Gate:** All T3 tests green. Scripts run clean on a known-passing page and correctly flag all fixture failures.

<CustomDivider />

## **Phase 2 — SKILL.md Build**

**After Phase 1 scripts confirmed. Parallel to Phase 0 if possible.**

### **Actions**

1. **Build skill file set** per Document 4 architecture:

   * `copy-rules.md` — imports from banned reference files (Phase 1 output)  
   * `structure-rules.md`  
   * `value-prop-check.md`  
   * `persona-routing.md`  
   * `review-gate.md`  
   * `iteration-diagnostic.md`  
   * `pattern-observer.md`  
   * `repair-routing.md`  
2. **Build root SKILL.md index** with YAML frontmatter and skill references.

3. **Run T4 compliance test** (Document 5):

   * Draft a 200-word evaluation section with skills loaded  
   * Confirm zero Tier 1 violations  
   * Draft same section without skills loaded  
   * Document violation delta

**Gate:** T4a passes (zero Tier 1 violations in skill-guided draft). T4b establishes baseline.

<CustomDivider />

## **Phase 3 — Retrospective Audit**

**After Phase 0 gate passed. Phase 1 scripts available.**

### **Actions**

1. **Run T1a** — retrospective audit of `operator-rationale.mdx` and `business-case.mdx`:

   * Apply L0 questions  
   * Apply L5 gate  
   * Run lint scripts  
   * Document all failures with layer/rule references  
2. **Run T2a** — confirm hybrid path routes as L0 product clarity problem, not L4 copy problem.

3. **Produce audit report** for each file:

   * L0 completion status  
   * L5 gate failures by category  
   * Lint output  
   * L7 pattern observer findings  
   * Repair routing recommendation per L8  
4. **Do not re-draft pages during the audit.** The audit output is the input to Phase 4 briefs. No edits until brief is written and L0 is answered.

**Gate:** Audit reports complete. Repair routing confirmed for each failed page.

<CustomDivider />

## **Phase 4 — Brief Template Integration**

**After Phase 0 and Phase 3\.**

### **Actions**

1. **Update Codex brief template** to include:

   * L0 section (required, gated — brief cannot be submitted without it)  
   * L1 persona mapping table (required)  
   * L2 content sequence plan (checkbox format)  
   * L5 pre-merge checklist  
2. **Apply updated brief template to:**

   * Hybrid operator path page (new — highest priority)  
   * GPU Nodes tab briefs 01–12 (revision — hold until L0 answered)  
   * Any outstanding operator-facing briefs  
3. **Brief review process:** Briefs reviewed at L0/L1 level before any Codex task is launched. A brief with incomplete L0 is returned — Codex does not run.

**Gate:** First brief produced under new template passes L0/L1 review.

<CustomDivider />

## **Phase 5 — Full Tab Implementation**

**After Phase 4\. Ongoing.**

### **Actions**

1. **GPU Nodes tab:** Apply framework end-to-end. L0 first. Briefs second. Codex tasks third. L5 gate on every PR.

2. **Gateways and Developers tabs:** Same sequence. Do not begin until GPU Nodes Phase 0 is confirmed (shared majority-path definitions may affect all three tabs).

3. **Pattern observer — first scheduled run:** After 10+ pages merged under framework. Output: cross-tab pattern report. If recurrence detected, L7 diagnostic before next batch of content.

<CustomDivider />

## **Dependency Map**

```
Phase 0 (Product Clarity)
  └── unblocks Phase 3 (Retrospective Audit)
       └── unblocks Phase 4 (Brief Template)
            └── unblocks Phase 5 (Tab Implementation)

Phase 1 (Script Infrastructure) [parallel]
  └── unblocks Phase 2 (SKILL.md Build)
  └── feeds Phase 3 (scripts used in audit)

Phase 2 (SKILL.md Build) [parallel]
  └── feeds Phase 4 (skills used in Codex tasks)
  └── feeds Phase 5 (ongoing agent compliance)
```

<CustomDivider />

## **What Does Not Proceed Until Phase 0 Completes**

* No new GPU Nodes content briefs  
* No revisions to operator-rationale.mdx or business-case.mdx (audit output defines what to fix, not ad-hoc edits)  
* No hybrid operator path content of any kind (it does not exist without L0 answers)

<CustomDivider />

## **Risk Register**

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| L0 cannot be answered for hybrid path without SME input | High | Blocks Phase 3/4 | Schedule L0 session with Rich/Rick before any other action |
| Lint scripts produce false positives on technical MDX | Medium | Reviewer fatigue, ignored flags | Tune patterns against fixture set before CI integration; exclude code blocks from all pattern checks |
| SKILL.md files produce compliant but thin drafts | Medium | Content lacks depth | T4 measures this; depth is a separate concern from compliance — address in SKILL.md v2 |
| Phase 0 deferred, content work continues without it | High | Framework bypassed from the start | Phase 0 completion is a hard gate enforced by the documentation lead; not a suggestion |
