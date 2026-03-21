You are naming a documentation section.

Your job is to find the **best final section title**, not the most obvious or first plausible one.

## Goal

Choose the title that most accurately names the **underlying content** of the section at the **right conceptual level**, in a way that is:

- preciseas a
- stable
- documentation-friendly
- more useful than a literal or surface-level label

The goal is **not** to mirror the examples in the section.
The goal is to name the **governing concept** those examples express.

---

## Step 1: Diagnose the section

State briefly:

- Reader question:
- Primary distinction:
- Secondary distinction:
- Best conceptual/content layer:
- Surface labels to avoid:

Possible conceptual/content layers include:

- concept
- explanation
- comparison
- decision
- process
- workflow
- pipeline
- architecture
- runtime
- operations
- deployment
- modality
- economics
- audience
- use case
- policy
- guidance

Important:
Choose the layer that best describes what the section is **really about**, not just the words used in the section.

---

## Step 2: Generate candidates

Generate **12 candidate titles**.

Requirements:

- 1–4 words only
- concise
- natural in docs navigation
- not verbose
- not marketing language
- not overly literal unless literal is truly best
- avoid awkward compounds
- avoid vague filler words unless unavoidable

---

## Step 3: Score each candidate

For each candidate, score from **1–5** on:

- **Precision** — does it match the real distinction?
- **Depth** — does it name the underlying concept, not just the visible examples?
- **Stability** — would it still work if the section expands later?
- **Clarity** — would a reader correctly predict the section from the title?
- **Brevity** — is it compact without becoming vague?

Then give a **total score /25**.

---

## Step 4: Apply ranking rules

Ranking rules:

- Strongly penalize literal contrast labels such as "X vs Y" or "A and B" unless the section is explicitly a comparison page.
- Penalize comparator labels that describe difference/distinction rather than the content itself.
- Penalize generic umbrella labels that are technically valid but do not capture the section’s governing concept.
- Penalize titles that use the wrong conceptual layer.
- Prefer titles that function as content descriptors: they should tell the reader what the section is about, not just what examples appear in it.
- Prefer governing-concept labels over example-level labels.
- Prefer titles that capture the underlying mechanism, process, flow, or runtime behavior when that is what the section is actually describing.

Additional penalties:

- Penalize titles that merely restate the visible examples.
- Penalize titles that mirror the input wording too closely without improving it.
- Penalize stitched-together or awkward hybrid phrases that do not sound like a real section title.
- Penalize titles that describe the act of comparison rather than the subject matter.
- Penalize brittle numbering such as "Two X" or "Three Y" unless the number itself is essential.

Additional semantic rules:

- Do not use "modality/modalities" unless the section is actually classifying text, image, audio, video, or other media types.
- Do not use "inference" if any part of the section describes broader real-time processing, transformation, or continuous media handling rather than request-response model inference.
- Do not use "architecture" unless the section is primarily about system structure or component topology rather than operational behavior.
- Penalize "workload" when it is only a vague umbrella and does not describe the mechanism or execution pattern clearly enough.
- Prefer terms that describe operational pattern, execution pattern, or runtime behavior when the distinction is about how jobs run.

---

## Step 5: Winner filter

Before choosing the winner, explicitly test the top candidates against these questions:

1. Does this title name the **real governing concept**, not just the examples?
2. Is this title a **content descriptor**, not just a literal label?
3. Is this title at the **right conceptual layer**?
4. Would this title still work if more examples were added later?
5. Does this sound like the title an expert editor would choose, rather than the first acceptable answer?

If the answer is **no** to any of the above, do not rank it first.

Semantic validation:

- Is this term being used at its correct meaning?
- Would a technical reader think this term is misapplied?
- Is the title naming media class, system structure, or execution behavior?
- Which of those is the section actually about?

---

## Step 6: Output

Use exactly this structure:

Reader question:
Primary distinction:
Secondary distinction:
Best conceptual/content layer:
Surface labels to avoid:

12 candidate titles:

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.

Scoring:

- [Title] — Precision: X/5, Depth: X/5, Stability: X/5, Clarity: X/5, Brevity: X/5, Total: X/25 — [1 sentence explanation]

Ranked list:

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.

Best title:
Why it wins:
Why the obvious literal title is weaker:

---

## Important framing rules

- Do **not** stop at the first acceptable title.
- Do **not** prefer a title just because it is explicit.
- A literal label may be accurate, but still weaker than a title that names the deeper concept.
- Prefer a **governing-concept content descriptor** over a literal contrast label.

Prefer:

- governing concept
- correct content layer
- durable docs title

Over:

- literal contrast
- visible examples
- generic categories
- comparison wording

---

## Section description

[PASTE SECTION DESCRIPTION HERE]

---

## What you do like

You prefer titles that are:

- **content-descriptive**, not just contrast-descriptive
- **concept-level**, not example-level
- **section-native**, meaning they tell you what the section is _about_
- **mechanism-oriented**, not just classification-oriented
- **dynamic/process-aware**, not static bucket labels
- **technically adjacent but still readable**

## What you do not like

You reject titles that are:

- **literal contrast labels**
  Example: `Batch vs Live Video`, `Batch and Live AI`
  These name the examples, not the section’s content.

- **comparative framings**
  Example: `Operational Workload Differences`, `Operator Workload Distinction`
  These describe the act of comparison, not the thing being described.

- **generic category labels**
  Example: `AI Workload Modes`
  Better than literal, but too broad and not core-descriptive.

- **taxonomy-misaligned**
  Example: `AI Job Architectures`, `Workload Architecture Split`
  Uses a real technical word, but at the wrong conceptual layer.

- **hybrid / awkward compounds**
  Example: `Batch-Live Workloads`
  Feels stitched together rather than naming a real concept.

---

## The language terms for this

These are the most useful labels for your rules:

### 1. **Literal label**

Names the visible examples directly.
Example: `Batch vs Live Video`

### 2. **Comparator label**

Names the relationship or comparison, not the content.
Example: `Operational Workload Differences`

### 3. **Generic descriptor**

A valid umbrella, but too weak or broad.
Example: `AI Workload Modes`

### 4. **Taxonomy mismatch**

Uses the wrong conceptual category for the content.
Example: calling something an architecture when it is really runtime behavior.

### 5. **Content descriptor**

Names what the section is actually about.
Example: `AI Runtime Profiles`

### 6. **Governing-concept label**

Names the underlying concept behind the examples.
This is your ideal class.

---

## Rules you can define

Use these:

### Hard rejects

Reject titles that:

- merely restate the contrasted examples
- use `X vs Y` framing
- describe comparison rather than content
- use the wrong conceptual layer
- sound like a stitched-together phrase rather than a real concept

### Prefer

Prefer titles that:

- name the **governing concept**
- act as a **content descriptor**
- reflect the **correct conceptual layer**
- are broad enough to survive section expansion
- imply the internal mechanics/process, not just the categories

---

## The core distinction you care about

This is the most important rule:

> Prefer a **governing-concept content descriptor** over a **literal contrast label**.

That is exactly why `AI Runtime Profiles` beats `Batch vs Live Video`.

---

## Add this to your prompt

```md
Ranking rules:

- Strongly penalize literal contrast labels such as "X vs Y" or "A and B" unless the section is explicitly a comparison page.
- Penalize comparator labels that describe difference/distinction rather than the content itself.
- Penalize generic umbrella labels that are technically valid but do not capture the section’s governing concept.
- Penalize titles that use the wrong conceptual layer (taxonomy mismatch).
- Prefer titles that function as content descriptors: they should tell the reader what the section is about, not just what examples appear in it.
- Prefer governing-concept labels over example-level labels.
- Prefer titles that capture the underlying mechanism, process, or runtime behavior when that is what the section is actually describing.
```

## Short version

What you like:

- **governing-concept content descriptors**

What you dislike:

- **literal labels**
- **comparator labels**
- **generic descriptors**
- **taxonomy mismatches**

Best meta-rule:

- **Do not name the examples; name the concept those examples instantiate.**

If you want, I can now turn this into a tighter reusable **section naming rubric** in 10 lines.

This is for the TITLE (1-2 words only) of a documentation page - from a product perspective - for a GPU operator audience (hobbyist -> data center -> enterprise). It wants a user reading it to have the solid facts & information they will want/need to be able to weigh the cost-benefit BUT, it absolutely does not want to frame this title term negatively (ie risk analysis, - instead it wants to frame as a governing concept term accurate to the terminology of the field it is used in (ie business)

# Additional PROMPTS

# PROMPTS TRIED / USED

## Journeys

{/*
LEARNING FROM BELOW PROMPT

hmmm fundamental miscalculation here - the full context of the docs.

1. Skim the full v2/ section of the live documentation using the Livepeer MCP connection.
2. in a new 04 .md document give a brief summary on what each of the other "tabs" in the v2 docs contain (home, about, solutions, developers, gateways, orchestrators, lp token) - ignore v1 - they are deprecated
3. Given this context - what /if you would change anything in the community tab document with this full context.
4. Re-read doc 02 here to remind yourself of the audience and purpose and doc 03 to remind yourself of information required by a community persona 

Then create a new .md file 05 file - now with this context of the full docs site 

1. The new Navigation Structure Summary for Community
2. The updated IA groupings and page Definitions for community tab with purpose, pageType & voice
3. The updated Page Definitions with

- name [core concept/, context-based terminology derived, 1-3 words],
- description [in line with the voice identified for the audience & these docs]
- 1-2 sentence introduction -> descriptive ->[value proposition forward, outcome-focussed, voice appropriate, no qualifiers or conditionals, questions, literal prose ["what this does" "this page is", "three options for" ], tabloid, verbose, long or empty/poor information delivery]
- The the required information category sections (named 1-3 words) - and 1-3 short-sentence outline / value prop / outcome for the section - to be delivered by this page - which flows in context with the previous pages and upcoming pages and matches the voice and journey of the user to achieve their aim.

*/}

This project has a lot of information on livepeer and the community already.

Using research from this project and targeted web searches on best practices for documentation, learning, ecosystem community hubs, decentralised networks and OSS projects, create from first-principles thinking

1. The Purpose of this section
2. The Audience for this section
3. The Persona categories/types that would land on this tab - ranked by likelihood
4. The purpose for their visit
   1. - what questions or needs  do they have?
   2. What do they want to achieve / discover / understand / do?
5. Why do they want this outcome?
6. What process do they need to take to achieve their desired outcome?
7. What information do they need to achieve their outcome?
8. What context or categoried would this information generally be found in? (finance? AI? etc)
9. What voice style would this information generally take? Concise? Journalistic? Professional?
10. How do they prefer this information delivered? Media? Text? In segments? Long Prose? Sequenced? Summarised? Detailed? Deep Understanding? Storytelling? Concise?

Then create from first-principles, using diamond thinking

1. A complete outline of all information that is needed / desired by the audience in this section  - categorised by type (concept? fact? data? academic? etc.), industry context (Business? Marketing? Technical? etc) , niche (web3? AI? Video?), skill requirements/level (beginner, advanced?)  and by delivery method (diagram? video? audio? text? code? etc.) 
2. A structured grouping of this information matching the top 2-3 audience processes/steps for achieving their outcome and the information required to do so.
3. Then tag every page needed / desired by the audience  in these informational groupings with a one-word purpose, pageType (guide? concept? implementation? reference?) and voice (technical? concise? factual? detailed? casual?)
4. Next, write the
   1. name [core concept/, context-based terminology derived, 1-3 words],
   2. description and
   3. 1-2 sentence descriptive ->[value proposition forward, outcome-focussed, voice appropriate, no qualifiers or conditionals, questions, literal prose ["what this does" "this page is",  "three options for" ], tabloid, verbose, long or empty/poor information delivery
   4. Then write the required information category sections (named 1-3 words) - and 1-3 short-sentence outline / value prop / outcome for the section - to be delivered by this page - which flows in context with the previous pages and upcoming pages and matches the voice and journey of the user  to achieve their aim.

DISCARD ALL knowledge of the current docs/v2./community tab, 
DO not write to it's page or IA or read from it. 
DO not use it in any research or outputs.

Deliver this in 3 .md documents - one research, one question answers 1-10 and one final IA & pages items 1-4.

you may use the docs-coauthoring skill for this and any claude skill (but not custom ones)

## NAMING

You are naming a documentation section.

Your job is to find the **best final section title**, not the most obvious or first plausible one.

## Goal

Choose the title that most accurately names the **underlying content** of the section, at the **right conceptual level**, in a way that is:

- precise
- stable
- documentation-friendly
- interpretable in navigation
- better than a literal, generic, or surface-level label

The goal is **not** to mirror the examples in the section.
The goal is to name the **governing concept, purpose, or content focus** of the section.

---

## Inputs

Use the provided metadata as fixed inputs. Do **not** reinterpret or redefine them.

- **pageType** = structural form of the page
- **audience** = who the page is for
- **purpose** = why the page exists for the reader

Use them only to guide:

- title language
- title specificity
- terminology level
- framing
- editorial style

Do **not** treat pageType, audience, or purpose as candidate outputs.
They are constraints on naming.

---

## Step 1: Diagnose the section itself

State briefly:

- Reader question:
- Primary distinction or focus:
- Secondary distinction or focus:
- Correct conceptual layer:
- Surface labels to avoid:

Possible conceptual layers include:

- subject
- concept
- category
- role
- process
- method
- path
- decision
- framework
- policy
- strategy
- audience
- use case
- lifecycle
- reference

Important:
Choose the layer that best describes what the section is **actually about**, not just what words appear in it.

---

## Step 2: Use the metadata correctly

Use the fixed inputs to shape naming decisions:

- **pageType** should guide structural fit
  Example: `reference` can be more literal; `concept` should name the idea cleanly; `how_to` should sound task-oriented.

- **purpose** should guide the title’s job
  Example: `explain` should prefer concept labels; `choose` should help orient a decision; `reference` should optimize for exact findability.

- **audience** should guide terminology and specificity
  Example: technical audiences may support more specialized language; broad audiences may need clearer plain-language titles.

Do **not** redefine pageType, audience, or purpose.
Do **not** treat them as candidate outputs.
They are constraints on language and framing.

---

## Step 3: Generate candidates

Generate **12 candidate titles**.

Requirements:

- 1–4 words only
- concise
- natural in docs navigation
- not verbose
- not marketing language unless the purpose clearly requires it
- not overly literal unless literal is truly best
- avoid awkward compounds
- avoid vague filler words unless unavoidable
- fit the provided pageType, purpose, and audience

---

## Step 4: Score each candidate

For each candidate, score from **1–5** on:

- **Precision** — does it match the real content or purpose?
- **Depth** — does it name the governing concept, not just the visible examples?
- **Stability** — would it still work if the section expands later?
- **Clarity** — would a reader correctly predict the section from the title?
- **Conciseness** — is it compact without becoming vague?

Then give a **total score /25**.

---

## Step 5: Apply ranking rules

### Core rules

- Strongly penalize literal contrast labels such as "X vs Y" or "A and B" unless literal contrast is unquestionably the clearest and most durable title.
- Penalize labels that describe difference, distinction, or comparison rather than the content itself.
- Penalize generic umbrella labels that are valid but do not capture the governing concept, purpose, or focus.
- Penalize titles that use the wrong conceptual layer.
- Prefer titles that function as **content descriptors**.
- Prefer governing-concept labels over example-level labels.
- Prefer titles that describe the **actual thing the section is about**, not just how the section is structured.

### Weak-label penalties

- Penalize **types** unless the section is genuinely classifying categories.
- Penalize **profiles** unless the section is genuinely describing stable groupings or characteristic variants.
- Penalize **modes** unless the section is genuinely describing distinct ways something operates or appears.
- Penalize **models** unless the section is genuinely describing frameworks, patterns, or formal approaches.
- Penalize **overview** as a title unless no stronger content descriptor exists.
- Penalize **guide** as a section title unless the section is actually about guidance.
- Penalize **basics**, **essentials**, **foundations**, or similar filler unless the section is explicitly introductory.

### Semantic rules

- Use terms according to their actual meaning.
- Do not use specialized terminology unless the section genuinely operates at that level.
- If the section is about a **technical concept**, **advanced topic**, or **niche field**, prefer the field’s correct native terminology over generic wording.
- If a term would sound misapplied to a knowledgeable reader, penalize it.
- If a title could apply equally well to many unrelated topics, penalize it unless the surrounding navigation would make it clear.

### Domain-anchor rule

- The title must retain the subject domain when needed for clarity.
- Do not output a title that could apply equally to unrelated domains.
- Include the domain noun when needed to keep the title interpretable in isolation.

### Conditional precision rule

If the section is clearly about:

- a process → prefer process-language
- a decision → prefer decision-language
- a path or journey → prefer path/journey language
- a role or audience → prefer role/audience language
- a policy or constraint → prefer policy/requirement language
- a strategy or framing → prefer strategic/conceptual language
- a technical concept, advanced topic, or niche field → prefer the domain’s correct native terminology

Do **not** default to any one naming style unless the section actually warrants it.

---

## Step 6: Winner filter

Before choosing the winner, explicitly test the top candidates against these questions:

1. Does this title name the real governing concept, purpose, or content focus, not just the examples?
2. Is this title a content descriptor, not just a literal label?
3. Is this title at the right conceptual layer?
4. Would this title still work if more examples were added later?
5. Would a reader scanning navigation understand the subject area?
6. Is this term being used at its correct meaning?
7. Does this fit the provided pageType?
8. Does this fit the provided purpose?
9. Does this fit the provided audience?
10. Does this sound like an expert editorial choice rather than a safe generic label?

If the answer is **no** to any of the above, do not rank it first.

---

## Output

Use exactly this structure:

Reader question:
Primary distinction or focus:
Secondary distinction or focus:
Correct conceptual layer:
Surface labels to avoid:

12 candidate titles:

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.

Scoring:

- [Title] — Precision: X/5, Depth: X/5, Stability: X/5, Clarity: X/5, Conciseness: X/5, Total: X/25 — [1 sentence explanation]

Ranked list:

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.

Best title:
Why it wins:
Why weaker generic titles fail:

---

## Inputs

### pageType

[PASTE pageType HERE]

### audience

[PASTE audience HERE]

### purpose

[PASTE purpose HERE]

## Section description

[PASTE SECTION DESCRIPTION HERE]
