# Product Writing Skill Package

## Purpose

This report defines the writing-skill package needed to stop weak AI-authored prose in Livepeer docs, especially on pages that need product, economic, operator, or technical framing.

This is not a style-guide rewrite. It is a package recommendation for **skill structure**, **trigger scope**, **bad-pattern bans**, and **source-backed writing rules**.

## Recommendation

Use **3 skills**, not 1.

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

### 1. `docs-reader-intent-and-page-brief`

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

### 2. `docs-commercial-and-technical-prose`

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

### 3. `docs-editorial-quality-gate`

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

1. **Do not open with qualifier language.**
   Bad: `Whether it makes sense depends on...`

2. **Do not open with prompt scaffolding.**
   Bad: `Start with the hardware question...`

3. **Do not define the topic by contrast.**
   Bad: `An Orchestrator is a node business, not passive yield.`

4. **Do not open with unexplained protocol terms when the reader is still asking a hardware question.**
   Bad: `Projected ETH job fees and LPT inflation rewards...`

5. **Do not use tutorial arithmetic language in operator copy.**
   Bad: `then subtract...`

6. **Do not use abstract nouns where variables are required.**
   Bad: `tolerance for operational overhead`

7. **Do not use vague access language where the real issue is stake requirement or capital commitment.**
   Bad: `access to LPT`

8. **Do not use page-meta or evaluation-meta wording as the main sentence.**
   Bad: `This page helps you judge...`

9. **Do not use soft commercial phrasing when a threshold can be stated directly.**
   Bad: `commercial viability depends on whether...`

10. **Do not make the reader infer the model.**
   The paragraph must state the cost drivers, revenue drivers, and decision output explicitly.

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

### Bad -> Better

Bad:

`Whether it makes sense depends on hardware already owned, access to LPT, tolerance for operational overhead, and the workloads available on the network.`

Better:

`Solo operation clears cost only when workload revenue and protocol rewards exceed GPU cost, stake requirement, gas, power, bandwidth, and operator labour.`

Why:

- names the threshold
- replaces vague nouns with operating variables
- removes qualifier-led framing

### Bad -> Better

Bad:

`access to LPT`

Better:

`bonded stake required for activation and, for video routing, active-set competitiveness`

Why:

- states the actual mechanism
- removes hand-wavy resource phrasing

### Bad -> Better

Bad:

`tolerance for operational overhead`

Better:

`ability to keep the node online, funded for gas, monitored, and able to claim rewards reliably`

Why:

- names the work
- removes corporate-filler language

### Bad -> Better

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
