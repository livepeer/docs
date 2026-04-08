# Review: v2/delegators/guides/governance/processes.mdx

## Summary

End-to-end governance process page with off-chain and on-chain layers, voting mechanics, Foundation role, risk mitigation, and process flow diagram. Contains a good "How to Vote" Steps section. Has a "How to Submit a Proposal" note. Same academic-register issues. Missing `status`. Uses Mintlify native `<Steps>/<Step>` alongside the rest of the tab which uses `StyledSteps/StyledStep` -- inconsistent.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Livepeer Governance Processes | OK |
| sidebarTitle | Y | Processes | OK |
| description | Y | End-to-end governance process lifecycle... | OK |
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
| Numbered headings (1-10) | WARN |
| "Executive Summary" | WARN |
| No question headings | PASS |
| "How to Vote" | PASS -- imperative, not a question |

**Heading score: 18/20**

## Voice (Cat 2)

- 2.1 UK English: MIXED -- "signaling" in description (US) should be "signalling". "formalise" (line 42) and "decentralised" (line 248) use UK correctly
- 2.9 Em dashes: PASS
- 2.12 Entity-led: PASS

## Structure (Cat 4)

- 4.1 One job: PASS (governance process lifecycle)
- 4.5 No TODO: PASS
- 4.8 Min 2KB: PASS
- 4.16 Component consistency: FAIL -- uses native `<Steps>/<Step>` instead of `StyledSteps/StyledStep` used elsewhere in the tab

## Layout (Cat 5)

- 5.10 Related Pages / CTA: FAIL -- no Related Pages CardGroup

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 9/10 | `PageType` casing, missing `status` |
| VOICE | NEEDS WORK | "signaling" US spelling in description |
| HEADINGS | 18/20 | Numbered + Executive Summary |
| STRUCTURE | NEEDS WORK | Inconsistent Steps component |
| LAYOUT | FAIL | No Related Pages |
| VERACITY | PASS | |
| NAV | PASS | |
| LINKS | PASS | |
| PROCESS | PASS | |
| COMPLETENESS | PASS | |

**Overall: NEEDS WORK** -- Fix US spelling in description, add Related Pages, fix component consistency (StyledSteps), add `status`.
