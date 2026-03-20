# Information Type — Baseline Definitions

**Status**: DRAFT
**Related**: [pagePurpose.md](pagePurpose.md) | [framework.md](framework.md)

---

## Field Definition

1. **Token**: `informationType`
2. **Domain**: Content Strategy / Information Architecture
3. **Definition**: The category of information a page must source, synthesise, and deliver to serve its purpose
4. **Description**: Information type is a sub-taxonomy of purpose. It tells a writer or AI agent what kind of content to look for, generate, and prioritise. It governs the structure, layout, and style components appropriate for the page — because different information types have fundamentally different structural needs. A page's information type is determined by its purpose and cannot be independently assigned.
5. **Scope**: Section-level, determined at runtime by the agent per section. Not a frontmatter field. Not tagged in content. The agent reads each section, identifies its information type, and applies the appropriate standard. The purpose → information type mapping defines what types are expected and permitted for a given purpose — not that every section is the same type. A single page will typically contain multiple information types across its sections.

---

## Quickview

| Type | Definition | Veracity | Purposes |
|---|---|---|---|
| `factual` | Verifiable, citable data — true or false, not interpretive | Very high | `configure`, `reference`, `update`, `verify`, `choose`, `evaluate`, `build` |
| `conceptual` | Explanatory content that builds understanding of how something works | Medium | `explain`, `learn` |
| `procedural` | Step-sequence content — exactly what to do, in order | Very high | `start`, `build`, `operate`, `verify`, `integrate`, `troubleshoot` |
| `analytical` | Reasoned interpretation that draws conclusions from data | Medium | `choose`, `operate`, `troubleshoot`, `optimise` |
| `evaluative` | Evidence-based content to support the reader's own judgment | High | `evaluate`, `optimise` |
| `structural` | Information architecture — what exists and how it relates | High | `orient` |
| `change` | Delta information — what changed, impact, action needed | Very high | `update` |
| `narrative` | Value-proposition content — why something matters, motivational framing | Lower | `orient`, `evaluate` |
| `technical` | Engineering/implementation-level content requiring specialist knowledge | Very high | `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference` |

---

## Values

---

### `factual`

1. **Definition**: Verifiable, citable data that is either true or false — not interpretive
2. **Description**: Content that is grounded in primary sources: specs, parameters, API contracts, error codes, measurements, protocol facts, version numbers, pricing data. Factual content has no register of its own — it is stated. Its job is accuracy and completeness, not persuasion or explanation.
3. **Veracity**: Very high — every claim must be citable against a primary source; incorrect factual content is a pipeline failure
4. **Structure implications**: Tables, parameter lists, numbered data, code blocks. Minimal prose. Dense and scannable.
5. **Purposes that use it**: `configure`, `reference`, `update`, `verify`, `choose`, `evaluate`, `build`

---

### `conceptual`

1. **Definition**: Explanatory content that builds understanding of how something works
2. **Description**: Content that constructs mental models — mechanisms, causal relationships, system behaviour, conceptual definitions. Conceptual content is descriptive, not procedural. It explains the "why" and "how it works" rather than "how to do it". Depth and clarity of explanation are the quality markers.
3. **Veracity**: Medium — models and explanations should be consistent with primary sources but are inherently interpretive; flag where interpretation diverges from documented behaviour
4. **Structure implications**: Prose-forward, diagrams, concept hierarchies, analogies. No step-numbered procedures. Examples serve comprehension, not instruction.
5. **Purposes that use it**: `explain`, `learn`

---

### `procedural`

1. **Definition**: Step-sequence content that tells the reader exactly what to do, in order
2. **Description**: Content structured as numbered actions: commands, installation steps, configuration procedures, operational runbooks. Procedural content is imperative — it tells, not explains. Each step has a clear action and expected output. Order matters. Branching is explicit.
3. **Veracity**: Very high — every step must be executable and produce the stated output; a broken procedure blocks the reader completely
4. **Structure implications**: Numbered steps, code blocks with commands, expected outputs, prerequisite callouts, branching by condition. No narrative warmup.
5. **Purposes that use it**: `start`, `build`, `operate`, `verify`, `integrate`, `troubleshoot`

---

### `analytical`

1. **Definition**: Reasoned interpretation that draws conclusions from data or observations
2. **Description**: Content that applies logic and judgment to information — trade-off analysis, root cause identification, comparison frameworks, diagnostic reasoning. Analytical content is not neutral (unlike `factual`) — it takes a position or reaches a conclusion. The quality marker is soundness of reasoning, not completeness of data.
3. **Veracity**: Medium — reasoning must be internally sound and grounded in real data; conclusions must follow from evidence, but the interpretation itself is not directly citable
4. **Structure implications**: Argument structure, criteria frameworks, comparison tables, decision branches, evidence → reasoning → conclusion flow.
5. **Purposes that use it**: `choose`, `operate`, `troubleshoot`, `optimise`

---

### `evaluative`

1. **Definition**: Evidence-based content designed to support the reader's own judgment
2. **Description**: Content that assembles evidence — benchmarks, cost data, ROI analysis, risk assessments, comparative data, feasibility assessments — without prescribing a conclusion. Evaluative content gives the reader the basis to decide, not the decision itself. The quality marker is completeness and reliability of evidence.
3. **Veracity**: High — evidence must be real and sourced; fabricated benchmarks or estimated costs presented as fact are a pipeline failure; approximate data must be labelled as such
4. **Structure implications**: Data tables, benchmark results, cost breakdowns, criteria frameworks, scenario analysis. Reader draws own conclusion — no forced recommendation.
5. **Purposes that use it**: `evaluate`, `optimise`

---

### `structural`

1. **Definition**: Information architecture content — what exists and how it relates
2. **Description**: Content that maps out a space: what sections exist, how they relate, what paths are available, where things live. Structural content is spatial and taxonomic. It does not explain or instruct — it orients. Quality marker: completeness and clarity of the map.
3. **Veracity**: High — must accurately reflect the actual site structure and available content; stale structural content actively misdirects readers
4. **Structure implications**: Overview grids, section descriptions, navigation CTAs, taxonomy diagrams. Low prose density. No depth — depth lives in linked pages.
5. **Purposes that use it**: `orient`

---

### `change`

1. **Definition**: Delta information — what changed, when, what the impact is, and what action is needed
2. **Description**: Content that communicates change over time: version history, migration guides, deprecation notices, release notes, breaking change documentation. Change content is always anchored to a version, date, or event. Its job is to help the reader understand what is different and what they need to do about it.
3. **Veracity**: Very high — change entries must be exact; wrong migration steps or missed breaking changes cause real production failures
4. **Structure implications**: Version/date headers, change entries, impact severity labels (breaking/non-breaking), migration steps, links to updated reference pages.
5. **Purposes that use it**: `update`

---

### `narrative`

1. **Definition**: Value-proposition and benefit-forward content written to motivate or frame why something matters
2. **Description**: Content that selects and frames information for impact rather than completeness — value propositions, business cases, ecosystem storytelling, motivational framing. Narrative content is not neutral and not purely factual: it curates facts in service of a case. The quality marker is clarity and persuasiveness of the value argument.
3. **Veracity**: Lower — framing and value propositions don't require primary source citation; however any factual claims embedded in narrative content inherit `factual` veracity requirements
4. **Structure implications**: Benefit-forward headlines, outcome-focused prose, social proof, ecosystem context. CTA-oriented. Can precede more factual or procedural content on the same page.
5. **Purposes that use it**: `orient`, `evaluate`

---

### `technical`

1. **Definition**: Engineering and implementation-level content requiring specialist technical knowledge to produce and consume
2. **Description**: Content that lives at the level of code, APIs, system architecture, hardware, and protocol internals — code samples, API contracts, architecture diagrams, system configuration schemas, hardware/network specs, cryptographic protocol detail. Technical content assumes a reader who can read and write code, interpret system-level data, and reason about infrastructure. It is the most precise category — ambiguity is a defect.
3. **Veracity**: Very high — technical content must be verified against the live system, current codebase, or active API; untested code and outdated specs are pipeline failures
4. **Structure implications**: Code blocks (language-tagged), API parameter tables, architecture diagrams, terminal commands with exact syntax. No simplification. Precision over accessibility.
5. **Purposes that use it**: `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`

---

## Purpose → Information Type Mapping

| Purpose | Information type |
|---|---|
| `orient` | `structural`, `narrative` |
| `explain` | `conceptual` |
| `learn` | `conceptual` |
| `choose` | `analytical`, `factual` |
| `evaluate` | `evaluative`, `factual`, `narrative` |
| `start` | `procedural` |
| `build` | `procedural`, `technical` |
| `configure` | `technical`, `factual` |
| `operate` | `procedural`, `technical` |
| `troubleshoot` | `analytical`, `technical` |
| `verify` | `procedural`, `technical` |
| `integrate` | `procedural`, `technical` |
| `optimise` | `analytical`, `technical` |
| `reference` | `factual`, `technical` |
| `update` | `factual`, `change` |

---

## Key Decisions

1. **Section-level, not page-level** — information type applies per section, not per page. A single page will typically contain multiple information types across its sections (e.g. a `build` page has a `narrative` intro, `factual` prerequisites, `procedural` steps, `technical` code blocks).
2. **Not a frontmatter field** — information type is identified by the agent at runtime as it reads each section. Writers do not set or tag it. Never appears in frontmatter.
3. **Purpose mapping defines permitted types** — the purpose → information type mapping defines what types are expected and allowed for a given purpose. It does not mean every section is the same type.
4. **Veracity is applied per section** — each section is assessed against the veracity standard of its identified information type. The page-level `veracityStatus` reflects the worst-case section result.
5. **`veracityStatus` is the only frontmatter field** from this entire information layer — see veracity.md for full definition.
6. **`technical` type intersects with `field`** (terminology/jargon governance) — to be defined in Step 6 (domain + niche).
7. **Sources registry** — what to verify against per type — defined in veracity.md.
