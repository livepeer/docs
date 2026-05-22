# Review: v2/delegators/guides/treasury/proposals.mdx

## Summary

Formal treasury proposal page covering structure, execution semantics, failure modes, and risk mitigation. Good "How to Submit a Proposal" Steps section and "Proposal Execution Flow" mermaid diagram. Same academic-register issues. Uses native `<Steps>/<Step>` inconsistently with the tab's `StyledSteps` pattern. No Related Pages. Missing `status`.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Treasury Proposals | OK |
| sidebarTitle | Y | Proposals | OK |
| description | Y | Formal structure and execution semantics... | OK |
| PageType | Y | guide | WARN: capitalised `PageType` |
| keywords | Y | array | OK |
| og:image | Y | fallback.png | OK |
| audience | Y | delegator | OK |
| lifecycleStage | Y | operate | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | operate | OK |
| status | N | - | MISSING |

**Frontmatter score: 9/10** (`PageType` capitalisation, missing `status`)

## Heading Score Table

| Criterion | Pass |
|---|---|
| Numbered headings (1-9) | WARN |
| "Executive Summary" | WARN |
| No question headings | PASS |

**Heading score: 18/20**

## Voice (Cat 2)

- 2.1 UK English: MIXED -- "Formalise" at line 42 (UK, good), but "behavior" should be checked
- 2.9 Em dashes: PASS

## Structure (Cat 4)

- 4.1 One job: PASS
- 4.5 No TODO: PASS
- 4.16 Component consistency: FAIL -- uses native `<Steps>/<Step>` instead of `StyledSteps/StyledStep`

## Layout (Cat 5)

- 5.10 Related Pages / CTA: FAIL -- no Related Pages CardGroup

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 9/10 | `PageType` casing, missing `status` |
| VOICE | PASS | |
| HEADINGS | 18/20 | Numbered + Executive Summary |
| STRUCTURE | NEEDS WORK | Inconsistent Steps component |
| LAYOUT | FAIL | No Related Pages |
| VERACITY | PASS | |
| NAV | PASS | |
| LINKS | PASS | |
| PROCESS | PASS | |
| COMPLETENESS | PASS | |

**Overall: NEEDS WORK** -- Add Related Pages, fix component consistency, fix `PageType` casing, add `status`.
