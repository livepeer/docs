---
name: iteration-diagnostic
version: 1.0
description: >
  L6 iteration diagnostic skill. Load when a section has failed the L5 gate.
  Routes the failure to the correct repair layer. Do not attempt a third
  sentence-level fix without running this diagnostic first.
invoke_when:
  - "this section keeps failing review"
  - "same error after second fix"
  - "why does this keep failing"
---

# Iteration Diagnostic - L6

## When to use this skill

A section has failed the L5 gate twice. Do not attempt a third fix at
the sentence level. Run this diagnostic to identify what layer the
failure is actually at.

<CustomDivider />

## Step 1: Classify the failure

**Is the same error class appearing in a different sentence?**

YES -> go to Pattern Failure below
NO  -> go to New Error Class below

<CustomDivider />

## Pattern Failure

The same banned construction or structural error recurs after a fix.

**Is it appearing in multiple sections of the page?**

YES:
The writer has not internalised the rule.
This is a copy problem, not a structural one.
ACTION: Rule reinforcement pass. Do not redraft. Apply L4 rules
sentence by sentence to the existing content. Route to copy editor
if the writer is an agent.

NO (single section keeps failing):

Is the failing section an evaluation or decision section?
YES -> PERSONA FAILURE. Go to Persona Check.
NO  -> VALUE PROP FAILURE. Go to VP Check.

<CustomDivider />

## New Error Class

A different error is appearing after the fix.

**Was this section covered by an L0 question in the brief?**

NO:
SCOPE FAILURE.
This section should not exist on this page, or belongs on another page.
ACTION: Return to brief. Identify which page owns this content need.
Do not redraft here.

YES (covered by L0 but still failing):

Does the section describe the majority operator path?
NO  -> PATH PRIORITY FAILURE.
      The majority path must be the featured path.
      Restructure. Do not rewrite sentences.
YES -> Go to VP Check.

<CustomDivider />

## Persona Check

Triggered when: evaluation or decision content keeps producing
hedges, conditionals, or "depends on" constructions after multiple passes.

Work through these in order:

1. Does the section address more than one operator profile simultaneously?
   YES: Split the section. One profile per block. Stop here.

2. Is the section written from the product outward rather than the
   operator's question inward?
   YES: Rewrite from the operator's question. State the question as
   the opening sentence. Stop here.

3. Does the operator profile this section serves exist in the L1
   persona mapping table in the brief?
   NO: Kill the section. It is serving an imagined reader.
   Route the content need to a new brief if genuine.

4. Is the primary question this section answers written in the brief?
   NO: Stop. Write the question. Redraft the section as its answer.

<CustomDivider />

## VP Check

Triggered when: body copy drifts into mechanism description,
contrast language, or cost-before-value sequences across passes.

Work through these in order:

1. Can the L0 Q1 outcome statement for this page be said in one
   sentence without a conditional?
   NO: The value prop is not defined. Return to L0.
       No further drafting until L0 Q1 is answered clean.

2. Is the operator outcome stated before the mechanism that produces it?
   NO: Reorder. Outcome first. Stop here.

3. Does the majority path in this section match the majority real-world
   operator documented in L0 Q2?
   NO: Restructure around the actual majority. Stop here.

4. Would an operator reading this section know what to do next
   without visiting Discord?
   NO: The section is incomplete. Add the staged action path.

<CustomDivider />

## Output of this diagnostic

After completing the relevant check, produce one of three escalation calls:

**COPY PROBLEM**
Route to L4/L5. Writer applies rule reinforcement pass.
Re-enter gate at L5.

**ARCHITECTURE PROBLEM**
Route to L1/L2. Review persona mapping and content sequence.
Redraft affected sections. Re-enter at L3.

**PRODUCT CLARITY PROBLEM**
Route to L0. VP questions re-answered with product owner.
No further drafting on this page until L0 is complete.
Re-enter at L2 after L0 is resolved.

<CustomDivider />

## Escalation rule

Two failed fix passes on the same section = run this diagnostic.
Do not attempt a third sentence-level fix without completing it.
