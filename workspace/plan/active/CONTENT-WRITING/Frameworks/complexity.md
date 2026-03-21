# Complexity + LifecycleStage — Definitions

**Status**: ✅ AGREED
**Related**: [index.md](index.md) | [framework.md](framework.md) | [pagePurpose.md](pagePurpose.md)

---

## Purpose and Aim

`complexity` and `lifecycleStage` are calibration signals for the agent. They do not define page structure (that is `pageType`) or reader outcome (that is `purpose`). They calibrate how much the agent assumes the reader already knows, and what the reader's motivation is when they arrive at the page.

**Key distinction — `purpose` vs `lifecycleStage`**:

- `purpose` = what this page does for the reader (the page's job)
- `lifecycleStage` = where the reader is in their overall journey with Livepeer

These are independent. A reference page (`purpose: reference`) serves readers in `build` (looking up an API call) and `operate` (checking a config value). Same page, different stage. `lifecycleStage` identifies which reader this page is *primarily* written for.

---

## Field Definitions

---

### `complexity`

1. **Token**: `complexity`
2. **Type**: Single value
3. **Values**: `beginner` | `intermediate` | `advanced`
4. **Definition**: The assumed knowledge level of the reader
5. **Description**: Declares how much domain knowledge the page assumes. Governs whether concepts need defining, whether prerequisites need listing, what complexity of examples is appropriate, and how densely written the content can be.
6. **Scope**: Frontmatter field — set per page

**Governs**:

1. **Assumed knowledge** — what the agent can treat as known vs what needs explaining
2. **Concept definitions** — whether terms are defined on first use or assumed understood
3. **Example complexity** — simple illustrative examples vs realistic production-level scenarios
4. **Prerequisites** — whether a prerequisites section is required
5. **Abbreviation handling** — whether abbreviations need expansion on first use

---

### `lifecycleStage`

1. **Token**: `lifecycleStage`
2. **Type**: Single value — forces precise judgment about who the page is primarily for
3. **Values**: `discover` | `evaluate` | `setup` | `build` | `operate` | `troubleshoot` | `optimise`
4. **Definition**: Where the reader is in their overall journey with Livepeer
5. **Description**: Declares the reader's current position and motivation in their Livepeer journey. Not the same as `purpose` — `lifecycleStage` is about the reader's state; `purpose` is about the page's function. A page can have `purpose: reference` and `lifecycleStage: build` — a reader actively building something who needs to look something up. If a page appears to serve two stages equally, that is a content scope problem, not a tagging problem.
6. **Scope**: Frontmatter field — set per page

**Governs**:

1. **Reader motivation** — what the reader is trying to accomplish at page entry
2. **Entry point assumptions** — what the reader already has in place
3. **CTA style** — what to do next (forward into the journey vs lateral to related detail)
4. **Background context depth** — how much context to provide vs how quickly to get to the task

---

## Quickview

### Complexity

| Token | Reader state | What changes |
|---|---|---|
| `beginner` | New to this topic | Concepts defined on first use; analogies used; prerequisites listed; simple examples; abbreviations expanded |
| `intermediate` | Familiar with basics | Fundamentals skipped; practical detail is focus; realistic scenario examples |
| `advanced` | Expert in this domain | Dense content acceptable; abbreviations assumed; edge cases covered; no motivation framing needed |

### LifecycleStage

| Token | Where the reader is | What they need |
|---|---|---|
| `discover` | First encounter — forming a picture of what Livepeer is | Orientation; what exists; no assumed Livepeer knowledge |
| `evaluate` | Deciding whether to use Livepeer for their use case | Decision criteria; comparisons; honest trade-offs |
| `setup` | Getting started for the first time | Clear steps; prerequisites stated; success criteria |
| `build` | Actively implementing | Specific technical detail; examples they can adapt |
| `operate` | Running in production | Operational patterns; monitoring; maintenance |
| `troubleshoot` | Diagnosing a problem | Cause/effect reasoning; diagnostic steps; resolution paths |
| `optimise` | Improving something already working | Benchmarks; trade-off analysis; tuning parameters |

---

## Complexity Values

---

### `beginner`

1. **Definition**: Reader is new to this topic — little or no prior knowledge assumed
2. **Description**: Content must define concepts on first use, provide analogies where helpful, and not skip over foundational steps. The reader needs to understand why before they can follow how. Examples should be simple and illustrative rather than production-realistic.
3. **Assumed knowledge**: None for this topic — general literacy in the broader field (e.g. a developer-audience beginner page assumes code literacy but not Livepeer knowledge)
4. **What it requires**:
   - Prerequisites listed explicitly
   - Concepts defined on first use
   - Abbreviations expanded on first use
   - Examples kept simple and self-contained
   - Analogies used where mechanism is abstract
   - No skipping of foundational steps

---

### `intermediate`

1. **Definition**: Reader has basic familiarity — understands the fundamentals, needs practical depth
2. **Description**: Content can skip foundational explanation and focus on practical application. The reader knows what things are; they need to know how to use them effectively. Examples can use realistic scenarios. Some abbreviations can be used without expansion if standard for the audience.
3. **Assumed knowledge**: Core concepts of the topic; basic terminology; has likely followed beginner-level content or equivalent experience
4. **What it requires**:
   - Fundamentals can be skipped or briefly referenced
   - Practical detail is the focus
   - Realistic scenario examples
   - Standard abbreviations used without expansion
   - Prerequisites only if non-obvious

---

### `advanced`

1. **Definition**: Reader is expert in this domain — deep knowledge assumed, edge cases in scope
2. **Description**: Content can be dense and assume full domain literacy. No motivation framing needed — the reader knows why they are here. Examples can cover edge cases, non-standard configurations, and production-scale scenarios. Abbreviations used freely. The content can assume the reader will cross-reference other documentation as needed.
3. **Assumed knowledge**: Full domain literacy; production experience; familiarity with the broader ecosystem (e.g. related protocols, industry standards)
4. **What it requires**:
   - Dense content acceptable
   - Abbreviations assumed without expansion
   - Edge cases and exceptions in scope
   - No motivation framing or background context
   - Examples can cover non-standard and production-scale scenarios

---

## LifecycleStage Values

---

### `discover`

1. **Definition**: First encounter — reader is forming a picture of what Livepeer is and what it can do
2. **Reader state**: Has not used Livepeer; may not fully understand the product; exploring whether it is relevant to them
3. **What they need**: Orientation; clear explanation of what exists; no assumed Livepeer knowledge; enough context to decide whether to go deeper
4. **CTA style**: Forward into evaluation or into a specific role/use-case path

---

### `evaluate`

1. **Definition**: Decision phase — reader is assessing whether Livepeer is right for their use case
2. **Reader state**: Understands what Livepeer is; actively comparing options; looking for decision criteria, trade-offs, and honest assessments
3. **What they need**: Decision criteria; comparisons to alternatives; trade-off analysis; concrete capability claims with evidence
4. **CTA style**: Into setup/start if decision is positive; into deeper evaluation if undecided

---

### `setup`

1. **Definition**: First-time implementation — reader is getting something working for the first time
2. **Reader state**: Has decided to use Livepeer; setting up for the first time; has no prior working instance
3. **What they need**: Clear sequential steps; prerequisites stated upfront; explicit success criteria; common failure modes flagged
4. **CTA style**: Into build once setup is complete; into troubleshoot if something fails

---

### `build`

1. **Definition**: Active implementation — reader is building something specific using Livepeer
2. **Reader state**: Has a working base; actively implementing a feature, integration, or workflow; has specific goals and may be looking up specific APIs or patterns
3. **What they need**: Specific technical detail; code examples they can adapt; clear API/SDK references; integration patterns
4. **CTA style**: Into operate once implementation is complete; lateral to related APIs or patterns

---

### `operate`

1. **Definition**: Production operation — reader is running something in production
2. **Reader state**: Has a working implementation deployed; managing it on an ongoing basis; looking for operational patterns, monitoring guidance, and maintenance tasks
3. **What they need**: Operational patterns; monitoring setup; maintenance tasks; config reference; upgrade paths
4. **CTA style**: Into optimise; into troubleshoot when something is wrong

---

### `troubleshoot`

1. **Definition**: Problem diagnosis — reader has a specific problem and needs to diagnose and fix it
2. **Reader state**: Something is not working; has a symptom or error; needs to identify the cause and resolution
3. **What they need**: Cause/effect reasoning; diagnostic steps ordered by likelihood; clear resolution paths; what to do if the resolution fails
4. **CTA style**: Back into operate once resolved; escalation path if unresolved

---

### `optimise`

1. **Definition**: Performance improvement — reader has something working and wants to improve it
2. **Reader state**: Has a working, operational implementation; not in crisis; looking to improve performance, reduce cost, or increase reliability
3. **What they need**: Benchmarks and baselines; trade-off analysis; tuning parameters with expected impact; what to measure
4. **CTA style**: Back into operate; into advanced configuration if optimisation requires structural changes

---

## Decisions Locked

1. **complexity**: single value — `beginner` | `intermediate` | `advanced`
2. **lifecycleStage**: single value — forces precise judgment about who the page is primarily for; if a page genuinely serves two stages equally, that is a content scope problem
3. **Both are calibration signals**: they do not define page structure or reader outcome — they calibrate assumed knowledge and reader motivation
4. **`purpose` vs `lifecycleStage` are independent**: purpose is what the page does; lifecycleStage is where the reader is in their journey
