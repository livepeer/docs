---
name: review-gate
version: 1.0
description: >
  L5 publish gate. Load before any pre-merge review.
  Apply every item as a binary pass/fail.
  A page with any failing item does not merge.
invoke_when:
  - "pre-merge check"
  - "publish gate"
  - "ready to merge"
  - "review before PR"
---

# Publish Gate - L5

Apply every item below. Mark pass or fail.
A single fail blocks merge.

<CustomDivider />

## Auto-checked by CI scripts

These are caught by `lint-copy.js`, `lint-structure.js`, or `lint-patterns.js`.
Confirm CI passes before starting the human checklist.

- [ ] No Tier 1 banned words (`lint-copy.js`)
- [ ] No Tier 1 banned phrases (`lint-copy.js`)
- [ ] No unresolved `{/* REVIEW: */}` flags in rendered content (`lint-structure.js`)
- [ ] No non-USD currency outside declared regional scope (`lint-copy.js`)
- [ ] No empty cells in decision tables (`lint-structure.js`)
- [ ] `pageType`, `audience`, `lastVerified` present in frontmatter (`lint-structure.js`)

<CustomDivider />

## Human review required

### Sequence (L2)
- [ ] Page opens with the most useful fact for the intended reader; for option/decision pages that is usually the operator outcome or fit
- [ ] Majority operator path is fully described before variants appear
- [ ] Every introduced path is developed on-page or linked
- [ ] Any deliberate mechanism-first opening has a documented accuracy reason

### Completeness (L3)
- [ ] Every decision aid is complete - no placeholders, no REVIEW flags
- [ ] Every warning or consequence is followed by a prevention action and link
- [ ] Primary actions and URLs appear in body copy, not only inside accordions or Notes
- [ ] Coined terms and local shorthand are defined before readers meet them in headings, tables, or diagrams

### Tone (L4)
- [ ] No sentence ends on a hedge, disclaimer, or restatement
- [ ] No section ends with a Note that apologises rather than forward-points
- [ ] No diagram and table carry identical information
- [ ] Comparison is not the entry point unless the page has already defined the thing being compared

### Brief compliance
- [ ] L0 Q1-Q4 was completed before drafting (check brief)
- [ ] L1 persona mapping table was completed before drafting (check brief)

### Manual acceptance
- [ ] Canonical terminology is confirmed, or disputed terms are explicitly routed to SME/research review
- [ ] Review sign-off notes any accepted exception where product or research truth overrides a normal copy heuristic

<CustomDivider />

## Fail escalation

If the same section fails this gate twice:
Do not attempt a third fix at sentence level.
Load `iteration-diagnostic.md` and run the L6 diagnostic.

If a pattern appears across 3+ pages or fails 2+ fix cycles:
Load `pattern-observer.md` and run the L7 analysis.
