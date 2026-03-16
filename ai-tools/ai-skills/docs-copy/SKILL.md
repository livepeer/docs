---
name: docs-copy-framework
version: "1.0"
description: >
  Copy and content governance framework for Livepeer documentation.
  Enforces product-first, persona-first writing standards across all page types.
  Load this file first. It will tell you which skills to load for your task.
invoke_when:
  - "plan or route documentation copy work"
  - "load the copy governance framework before writing or review"
  - "triage which docs-copy skills should be used for a content task"
---

# Livepeer Docs Copy Framework

## Load this first

Before any content task, read the invocation guide below.
Load only the skills relevant to your task. Do not load all skills for every task.

<CustomDivider />

## Invocation guide

| Task | Skills to load |
|---|---|
| Writing a new brief | value-prop-check.md -> persona-routing.md |
| Drafting a new page | value-prop-check.md + structure-rules.md + copy-rules.md |
| Editing existing content | copy-rules.md + structure-rules.md |
| Copy review only | copy-rules.md |
| Structural review only | structure-rules.md |
| Pre-merge gate check | review-gate.md |
| Section failing review twice | iteration-diagnostic.md |
| Pattern recurring across pages | pattern-observer.md |

<CustomDivider />

## Layer map

| Layer | Skill file | Purpose |
|---|---|---|
| L0 | value-prop-check.md | VP definition gate before brief |
| L1 | persona-routing.md | Functional routing for multi-profile pages |
| L2-L3 | structure-rules.md | Page sequence and paragraph discipline |
| L4 | copy-rules.md | Sentence banned list and master test |
| L5 | review-gate.md | Publish gate checklist |
| L6 | iteration-diagnostic.md | Fix-cycle failure routing |
| L7 | pattern-observer.md | Cross-session pattern analysis |

<CustomDivider />

## What this framework does not govern

- Content accuracy - SME review gate (separate)
- SEO keyword strategy - separate workstream
- Translation and localisation - separate pipeline
- Visual design and component choices - Design Governance Framework
