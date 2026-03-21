# Page Purpose — Full Definitions

**Status**: ✅ Locked — canonical. Mirror to `page-taxonomy-framework.mdx` in schema migration (Step 12).
**Enum**: 15 intent-based values (UK English)
**Related**: [framework.md](framework.md) | [plan.md](plan.md)

---

## Field Definition

1. **Token**: `purpose`
2. **Domain**: Content Strategy / Reader Intent
3. **Definition**: Content intent — what job this page does for the reader
4. **Description**: Why this page exists and what it produces for the reader. Purpose governs what content is needed, what outcome is expected, and what voice and structure best serve the reader's state when they arrive.
5. **Defines**: What should this page help the reader do, decide, understand, or find?

**Governs**:

1. Content need — what state the reader is in when they arrive
2. Content outcome — what they can do, decide, or know after reading
3. Voice — what register and framing this purpose requires
4. Structure — what patterns and components serve this purpose

---

## Quickview

| Purpose | Domain | Definition | Process | Information type |
|---|---|---|---|---|
| `orient` | Navigation / IA | Communicates what exists and where the reader fits | arrive → scan → locate → navigate | `structural`, `narrative` |
| `explain` | Conceptual Understanding | Builds a mental model of how something works | encounter → absorb → build model → reason | `conceptual` |
| `learn` | Vocabulary / Foundations | Builds prerequisite vocabulary and conceptual primitives | lack vocab → encounter → acquire → connect → proceed | `conceptual` |
| `choose` | Decision Support | Helps make a scoped decision between known alternatives | arrive with options → map criteria → compare → decide → justify | `analytical`, `factual` |
| `evaluate` | Research / Assessment | Enables assessment of viability before a direction is committed | question → scope → investigate → analyse → deliberate → determine | `evaluative`, `factual`, `narrative` |
| `start` | Onboarding / Activation | Takes reader from zero to minimal working state fast | arrive at zero → follow steps → reach working state → know next step | `procedural` |
| `build` | Implementation | Complete end-to-end implementation to a production-ready result | define intent → follow procedure → make decisions → implement → verify → ship | `procedural`, `technical` |
| `configure` | Configuration / Setup | Maps system options to their effects for the reader's requirements | identify requirement → locate parameter → understand effect → set value → confirm | `technical`, `factual` |
| `operate` | Operations / Infrastructure | Manages a live system day-to-day — tasks, maintenance, decisions | identify task → locate procedure → execute → verify → repeat | `procedural`, `technical` |
| `troubleshoot` | Incident Response | Diagnose and resolve a problem from symptom to confirmed resolution | encounter problem → identify symptom → diagnose cause → apply fix → verify | `analytical`, `technical` |
| `verify` | Validation / QA | Confirm a system is set up correctly before problems emerge | set up check → run check → compare to expected → pass or route to fix | `procedural`, `technical` |
| `integrate` | Systems Integration | Connect Livepeer with another system covering auth and data contracts | understand both systems → plan connection → implement bridge → test contract → verify | `procedural`, `technical` |
| `optimise` | Performance Engineering | Improve a running system on a specific metric with measurable confidence | identify metric → understand levers → weigh trade-offs → apply changes → measure | `analytical`, `technical` |
| `reference` | Technical Reference | Precise authoritative data for readers who know what they need | know what to look up → locate entry → extract exact value → return to work | `factual`, `technical` |
| `update` | Change Communication | Communicates what changed, its impact, and required action | learn of change → assess impact → determine action → execute or note | `factual`, `change` |

---

## Information Types

Sub-taxonomy of purpose. Defines what category of information must be sourced and synthesised to serve each purpose. Governs what an AI agent should look for, generate, and prioritise when writing a page.

| Token | What it means |
|---|---|
| `factual` | Verifiable, citable data — specs, parameters, API contracts, error codes, measurements, protocol facts |
| `conceptual` | Explanatory models — mechanisms, causal relationships, definitions, mental frameworks |
| `procedural` | Step sequences — commands, installation steps, configuration procedures, runbooks |
| `analytical` | Reasoned interpretation — trade-offs, comparisons, root cause analysis, diagnostic reasoning |
| `evaluative` | Evidence-based judgment — benchmarks, cost data, ROI, risk assessments, comparative evidence |
| `structural` | Information architecture — what exists, how sections relate, navigation hierarchy, taxonomy |
| `change` | Delta information — what changed, when, impact, migration paths, deprecation notices |
| `narrative` | Value-proposition and benefit-forward content — why something matters, motivational framing, ecosystem storytelling |
| `technical` | Engineering and implementation-level content — code samples, API contracts, architecture, system configuration, hardware/network specs, protocol internals |

---

## Values

---

### `orient`

1. **Domain**: Navigation / Information Architecture
2. **Definition**: Communicates what exists in a section, product, or system — and where the reader fits within it
3. **Description**: The reader doesn't know what's available, how content is organised, or which path is theirs. This page creates a map. Not an explanation — a spatial understanding. Orient pages have low content density by design. Their job is structural, not substantive. The reader leaves knowing where they are, what exists, and what their next step is.
4. **Defines**: What should this page help the reader do? — Understand what exists and where to go next
5. **Process**: arrive → scan → locate → navigate
6. **Information type**: `structural`, `narrative`

**Governs**:

1. **Content need**: reader is new to this section or product and is disoriented
2. **Content outcome**: reader knows where they are, what's available, and which path is theirs
3. **Voice**: neutral and orienting — naming and routing, not explaining; low instruction density
4. **Structure**: overview of what exists, clear CTAs to next destinations, minimal prose depth

---

### `explain`

1. **Domain**: Conceptual Understanding
2. **Definition**: Builds a mental model of how something works — mechanism, system, or concept — at a level the reader can reason from
3. **Description**: The reader has encountered something and needs to understand it, not just use it. Explain pages build comprehension. The goal is a working mental model: inputs, outputs, causal relationships, how components interact, why something behaves the way it does. An explain page never says "now do this". All content is descriptive. The reader leaves able to reason about the subject — predict its behaviour, understand its constraints, connect it to what they know.
4. **Defines**: What should this page help the reader do? — Understand how something works at a mechanistic level
5. **Process**: encounter concept → absorb → build model → reason
6. **Information type**: `conceptual`

**Governs**:

1. **Content need**: reader needs to understand HOW something works
2. **Content outcome**: reader can reason about the system, predict behaviour, make informed decisions when using it
3. **Voice**: precise and conceptual — cause-and-effect framing, no imperative instructions
4. **Structure**: concept-first, no procedure steps, diagrams appropriate, examples serve comprehension not instruction

---

### `learn`

1. **Domain**: Vocabulary / Foundational Knowledge
2. **Definition**: Builds the prerequisite vocabulary and conceptual primitives the reader needs to engage with more advanced content
3. **Description**: The reader is missing the words or foundational concepts to understand what they're reading elsewhere. Learn pages address a knowledge gap at the vocabulary level. They are reference-like in structure but narrative in delivery — they build up a vocabulary, not just define terms. A reader after a learn page should be able to engage with documentation that assumes those concepts. Learn pages are often prerequisite reading, not destinations in themselves.
4. **Defines**: What should this page help the reader do? — Acquire the vocabulary and foundational concepts needed to proceed
5. **Process**: lack vocabulary → encounter term → acquire definition → connect to context → proceed
6. **Information type**: `conceptual`

**Governs**:

1. **Content need**: reader lacks prerequisite vocabulary or conceptual foundations
2. **Content outcome**: reader can read and understand more advanced content; has the vocabulary to look things up; can communicate using correct terms
3. **Voice**: accessible and definitional — plain-language first, technical terms introduced with explanation, no assumed prior knowledge
4. **Structure**: terms and concepts introduced in order of dependency, definitions precise, cross-links to explain pages for depth

---

### `choose`

1. **Domain**: Decision Support
2. **Definition**: Helps the reader make a scoped decision between known alternatives by mapping criteria to outcomes and giving a clear recommendation
3. **Description**: The reader knows the alternatives exist and needs to know which is right for them. Choose pages are prescriptive — they give a recommendation, not just information. They map decision criteria (scale, use case, constraints, goals) to available options and guide the reader to a conclusion. The reader leaves having made a decision with justification. A choose page does not do comparative research from scratch — that is `evaluate`. It assumes the options are understood and focuses on the decision.
4. **Defines**: What should this page help the reader do? — Make a confident, justified decision between known options
5. **Process**: arrive with options → map criteria → compare → decide → justify
6. **Information type**: `analytical`, `factual`

**Governs**:

1. **Content need**: reader needs to pick between known options and doesn't know which suits them
2. **Content outcome**: reader makes a decision and has justification for it
3. **Voice**: direct and prescriptive — "if you are X, use Y" framing, clear recommendation, minimal hedging
4. **Structure**: decision criteria explicit, options mapped to criteria, clear recommendation by situation, no deep comparative analysis

---

### `evaluate`

1. **Domain**: Research / Assessment
2. **Definition**: Enables the reader to assess viability, benchmark performance, or compare approaches — providing evidence and analytical framework before a direction is committed to
3. **Description**: The reader doesn't yet know whether something is worth doing or which direction to pursue. They are building the evidentiary basis for a judgment — not making the judgment itself. Evaluate pages are analytical and evidential, not prescriptive. They present data, trade-offs, benchmarks, costs, and frameworks for judgment. The reader leaves with the information to form their own view, not a recommendation. Evaluate precedes choose in the knowledge graph: you evaluate before you choose.
4. **Defines**: What should this page help the reader do? — Form an informed judgment about viability, performance, or comparative value
5. **Process**: question → scope → investigate → gather evidence → analyse → deliberate → determine
6. **Information type**: `evaluative`, `factual`, `narrative`

**Governs**:

1. **Content need**: reader is researching whether something is worth doing or which approach to take — no decision committed to yet
2. **Content outcome**: reader has sufficient evidence and analytical framework to form a judgment; knows what questions remain
3. **Voice**: analytical and evidential — data-forward, trade-off framing, financial/economic register where appropriate, no prescription
4. **Structure**: structured analysis (criteria, evidence, trade-offs), quantitative where available, reader draws own conclusion, no forced recommendation

---

### `start`

1. **Domain**: Onboarding / Activation
2. **Definition**: Takes the reader from zero to a minimal working state as fast as possible — deliberately sacrificing depth and completeness for speed
3. **Description**: The reader wants to be functional. They'll learn the depth later. Start pages are optimised for activation, not understanding. They strip everything not essential to reaching a working state: no theory, no configuration rabbit holes, no edge cases. Start pages are deliberately incomplete — and they make this explicit. The reader leaves with something working and a clear path to the next level of depth.
4. **Defines**: What should this page help the reader do? — Reach a minimal working state quickly and know where to go for depth
5. **Process**: arrive at zero → follow steps → reach working state → know next step
6. **Information type**: `procedural`

**Governs**:

1. **Content need**: reader wants to be functional quickly; depth is not the priority right now
2. **Content outcome**: reader has something working; knows the path to full depth; has not been slowed down by irrelevant detail
3. **Voice**: direct and step-numbered — "do this, then this, then this"; callouts only for blockers; no preamble
4. **Structure**: numbered steps only, prerequisites minimal, configuration deferred, single path (no branching), ends with next steps

---

### `build`

1. **Domain**: Implementation
2. **Definition**: Takes the reader through a complete end-to-end implementation — from starting state to a working, production-appropriate result they understand
3. **Description**: The reader is implementing something for real, not experimenting. Unlike `start`, build is complete: it covers all the steps, all the decision points, all the edge cases, and all the context needed to ship. Build pages assume the reader is committing to the implementation and needs to understand what they're building, not just replicate steps. The reader leaves with a working, understood implementation they can own, maintain, and extend.
4. **Defines**: What should this page help the reader do? — Complete a full implementation that is working, understood, and production-appropriate
5. **Process**: define intent → follow procedure → make decisions → implement → verify → ship
6. **Information type**: `procedural`, `technical`

**Governs**:

1. **Content need**: reader is implementing something end-to-end, with the intent to ship
2. **Content outcome**: reader has a working, production-appropriate implementation; understands what was built and why; can maintain and extend it
3. **Voice**: instructional with rationale — steps numbered but non-obvious decisions explained; not just "do this" but "do this because"
4. **Structure**: numbered procedure with decision branches, prerequisite state explicit, edge cases covered, verification step at end

---

### `configure`

1. **Domain**: Configuration / Setup
2. **Definition**: Maps a system's available options to their effects — giving the reader the information to configure the system to their specific requirements
3. **Description**: The system is running. The question is no longer "how do I get this working" but "how do I set it up the way I need". Configure pages are reference-like in structure but outcome-oriented in framing: they don't just list parameters, they explain what each one controls, what the implications are, and which options suit which situations. The reader leaves having configured the system to their requirements.
4. **Defines**: What should this page help the reader do? — Configure the system to meet their specific requirements
5. **Process**: identify requirement → locate parameter → understand effect → set value → confirm
6. **Information type**: `technical`, `factual`

**Governs**:

1. **Content need**: reader needs to adjust system behaviour to match their requirements
2. **Content outcome**: system is configured to the reader's requirements; reader understands the configuration choices made and can revisit them
3. **Voice**: precise and option-oriented — parameter tables, valid values, implication statements; "if you need X, set Y to Z"
4. **Structure**: parameters grouped by function, values with type/default/valid range, implication statements, examples by common scenario

---

### `operate`

1. **Domain**: Operations / Infrastructure Management
2. **Definition**: Gives the reader the operational knowledge and procedures to manage a live system day-to-day — routine tasks, maintenance, operational decisions, and what to watch
3. **Description**: The system is live. The reader owns it and is responsible for keeping it running well. Operate pages are procedural and reference-like — the reader will return to them repeatedly. They cover routine tasks, maintenance procedures, monitoring signals, operational decisions, and capacity management. Voice is precise and professional: these pages are used in production, often under time pressure. They must be fast to navigate and unambiguous.
4. **Defines**: What should this page help the reader do? — Manage a live system effectively in day-to-day operation
5. **Process**: identify task → locate procedure → execute → verify → repeat
6. **Information type**: `procedural`, `technical`

**Governs**:

1. **Content need**: reader is responsible for a live system and needs to perform operational tasks or make operational decisions
2. **Content outcome**: reader can perform routine operational tasks, make management decisions, maintain system health, and act on operational signals
3. **Voice**: precise and direct — imperative for procedures, no narrative warm-up, commands explicit, expected outputs stated
4. **Structure**: task-oriented sections, numbered procedures, monitoring reference (signals and thresholds), decision trees for operational choices

---

### `troubleshoot`

1. **Domain**: Incident Response / Problem Resolution
2. **Definition**: Enables the reader to diagnose and resolve a problem with a running system — from symptom to root cause to confirmed resolution
3. **Description**: The reader has a problem. Something is not working. They arrive with an error, an unexpected behaviour, or a system in a degraded state. The page provides a diagnostic procedure: what to check, what the possible causes are, how to identify the right one, and how to fix it. Troubleshoot pages must be fast to navigate — the reader is unblocked and in a degraded state. Steps are numbered, conditions are explicit, resolution is confirmable. The reader leaves with the problem resolved and an understanding of what caused it.
4. **Defines**: What should this page help the reader do? — Diagnose and resolve a specific problem and confirm the system is restored
5. **Process**: encounter problem → identify symptom → diagnose cause → apply fix → verify resolution
6. **Information type**: `analytical`, `technical`

**Governs**:

1. **Content need**: reader has a problem; the system is not working as expected
2. **Content outcome**: root cause identified, resolution applied, system restored, reader understands what happened
3. **Voice**: direct and diagnostic — no preamble, symptom → cause → fix structure, expected outputs explicit
4. **Structure**: symptoms listed, diagnostic steps numbered and branched by output, resolution per root cause, verification step to confirm resolution

---

### `verify`

1. **Domain**: Validation / Quality Assurance
2. **Definition**: Provides a procedure to confirm a system or implementation is set up correctly and behaving as expected — before problems emerge
3. **Description**: The reader wants to confirm everything is right — proactively, not reactively. Verify pages appear after setup, after deployment, or as periodic health checks. They provide specific checks, expected outputs, and pass/fail criteria. The reader should be able to run the checks and know definitively whether the system is correct. If something fails, the page routes to troubleshoot — verification and troubleshooting are complementary, not overlapping.
4. **Defines**: What should this page help the reader do? — Confirm the system is correct and know what to do if a check fails
5. **Process**: set up check → run check → compare to expected → pass or route to fix
6. **Information type**: `procedural`, `technical`

**Governs**:

1. **Content need**: reader wants to confirm correctness after a setup or deployment step, or as a regular health check
2. **Content outcome**: reader has confirmed the system is set up correctly; any check failures are surfaced with a clear path to resolution
3. **Voice**: procedural and confirmatory — "run this, expect this, if you see this instead go here"
4. **Structure**: checks numbered and self-contained, expected output for each, failure routing explicit

---

### `integrate`

1. **Domain**: Systems Integration
2. **Definition**: Enables the reader to connect Livepeer with another system, platform, or tool — covering integration architecture, connection procedures, authentication, and data contracts
3. **Description**: The reader needs Livepeer to work with something else. The challenge is boundary-crossing: two systems with different APIs, data formats, authentication models, and operational assumptions. Integrate pages must cover both sides of the integration clearly — what Livepeer provides, what the target system requires, and how to bridge the gap. Code examples are central. The reader leaves with two systems connected, the data contract understood, and the integration maintainable.
4. **Defines**: What should this page help the reader do? — Connect Livepeer with another system and understand the data and authentication contract between them
5. **Process**: understand both systems → plan connection → implement bridge → test data contract → verify
6. **Information type**: `procedural`, `technical`

**Governs**:

1. **Content need**: reader needs Livepeer to connect with an external system, platform, or tool
2. **Content outcome**: integration is complete and functioning; reader understands the data contract, authentication model, and how to maintain the connection
3. **Voice**: technical and bilateral — names both systems explicitly, data formats specified, no assumed knowledge of the target system
4. **Structure**: integration architecture overview, prerequisites (both sides), connection procedure, authentication setup, data contract, verification step

---

### `optimise`

1. **Domain**: Performance Engineering / Cost Optimisation
2. **Definition**: Gives the reader the knowledge and procedures to improve a running system's performance, reduce its cost, or increase its reliability on a specific target metric
3. **Description**: The system is working. The reader wants it to work better. Optimise pages are analytical and tuning-oriented — they explain what affects the target metric, what the trade-offs are, how to measure improvement, and what specific changes to make. Optimisation involves trade-offs, and different readers optimise for different goals. The reader leaves with a clear set of tuning actions and an understanding of their expected impact and trade-offs.
4. **Defines**: What should this page help the reader do? — Improve the system on a specific performance, cost, or reliability metric with measurable confidence
5. **Process**: identify metric → understand levers → weigh trade-offs → apply changes → measure
6. **Information type**: `analytical`, `technical`

**Governs**:

1. **Content need**: reader has a working system and wants to improve performance, reduce cost, or increase reliability
2. **Content outcome**: reader has made specific improvements; understands the levers and their trade-offs; can measure the result
3. **Voice**: analytical and technical — metrics-forward, trade-off framing, quantitative where possible
4. **Structure**: target metric named upfront, what affects it (levers), trade-offs per lever, specific changes with expected impact, how to measure

---

### `reference`

1. **Domain**: Technical Reference
2. **Definition**: Provides precise, authoritative data — parameters, syntax, endpoints, values, specifications — for readers who know what they're looking for and need the exact answer
3. **Description**: The reader arrives knowing what they need. The page's job is to surface it fast. Reference pages have minimal prose — the structure is tables, parameter lists, code blocks, and definition entries. They are dense and complete by design. Voice is neutral and precise. Reference pages are used repeatedly and must be scannable and reliable. Explanatory content belongs in `explain` or `learn` pages — reference contains only what it says. The reader leaves with the exact fact and returns to their work.
4. **Defines**: What should this page help the reader do? — Find the exact fact, parameter, syntax, or specification they need without friction
5. **Process**: know what to look up → locate entry → extract exact value → return to work
6. **Information type**: `factual`, `technical`

**Governs**:

1. **Content need**: reader needs a specific fact, value, syntax, or specification and knows what they're looking for
2. **Content outcome**: reader has the exact information; returns to their work immediately
3. **Voice**: neutral and precise — no narrative, no explanation, no framing; data speaks for itself
4. **Structure**: scannable tables, parameter entries with type/default/description, code blocks for syntax, alphabetical or functional grouping

---

### `update`

1. **Domain**: Change Communication
2. **Definition**: Communicates what has changed — in the protocol, product, or API — what the impact is, and what action the reader needs to take
3. **Description**: The reader needs to know what changed, whether it affects them, and what to do if it does. Update pages are not explanatory — they don't teach what the change means from first principles. They communicate the change and its downstream implications clearly. Impact and required action are the most important elements. Structure is chronological or version-ordered. Entries are categorised by impact severity.
4. **Defines**: What should this page help the reader do? — Know what changed, assess the impact, and take any required action
5. **Process**: learn of change → assess impact → determine required action → execute or note
6. **Information type**: `factual`, `change`

**Governs**:

1. **Content need**: reader needs to know about a change and whether it requires action
2. **Content outcome**: reader is aware of the change; understands the impact; knows what action to take and when
3. **Voice**: informational and clear — change stated first, impact second, action third; severity explicit
4. **Structure**: version/date header, change entries grouped by impact severity (breaking/non-breaking), migration steps where required, links to relevant reference/build pages

---

## Enum (canonical)

```
orient, explain, learn, choose, evaluate, start, build, configure, operate,
troubleshoot, verify, integrate, optimise, reference, update
```

## Deprecated aliases (validator migration)

| Deprecated value  | Maps to                |
| ----------------- | ---------------------- |
| `landing`         | `orient`               |
| `overview`        | `orient`               |
| `orientation`     | `orient`               |
| `concept`         | `explain`              |
| `tutorial`        | `learn`                |
| `evaluation`      | `evaluate`             |
| `decision`        | `choose`               |
| `setup`           | `configure`            |
| `how_to`          | `build` or `configure` |
| `operations`      | `operate`              |
| `troubleshooting` | `troubleshoot`         |
| `faq`             | `reference`            |
| `glossary`        | `reference`            |
| `changelog`       | `update`               |
| `compare`         | `evaluate` or `choose` |
| `optimize`        | `optimise`             |
