# Review: v2/delegators/index.mdx

## Summary

Auto-generated table-of-contents page. Not a hand-authored page. Contains links to _design/ files with warning emoji that should not be publicly visible. Limited editorial value as a standalone page.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Delegators | OK |
| sidebarTitle | Y | Delegators | OK |
| description | Y | Generated table of contents... | OK for generated page |
| pageType | Y | navigation | OK |
| audience | Y | delegator | OK |
| purpose | Y | orient | OK |
| lifecycleStage | Y | discover | OK |
| keywords | Y | array | OK |
| og:image | N | - | MISSING |
| lastVerified | N | - | MISSING |

**Frontmatter score: 8/10**

## Heading Score Table

| Criterion | Pass |
|---|---|
| H1 present | Y (Table of contents) |
| No question headings | Y |
| No banned heading words | Y |

**Heading score: 3/3 applicable**

## Voice (Cat 2)

- 2.1 UK English: N/A (generated content)
- 2.9 Em dashes: PASS
- 2.15 No self-reference: PASS

## Structure (Cat 4)

- 4.1 One job: PASS (ToC index)
- 4.5 No TODO: PASS
- 4.8 Min 2KB: FAIL (thin generated content)
- 4.15 Links to _design/ files with warning emoji: FAIL -- these are internal workspace artefacts that should not appear in a published index

## Layout (Cat 5)

- 5.1 Correct template: PASS (generated page with banner)
- 5.10 Related Pages / CTA: FAIL -- no Related Pages or CTA section

## Nav (Cat 7)

- 7.1 In docs.json: NO -- `v2/delegators/index` is NOT registered in docs.json nav. The portal page is used instead.

## Links (Cat 8)

- 8.1 Internal links resolve: Links to `_design/` files are workspace-only and will 404 for users

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 8/10 | Missing og:image and lastVerified |
| VOICE | PASS | Generated content, minimal text |
| HEADINGS | PASS | |
| STRUCTURE | FAIL | Exposes _design/ workspace links |
| LAYOUT | FAIL | No Related Pages/CTA |
| VERACITY | PASS | |
| NAV | FAIL | Not in docs.json (by design -- portal is the entry) |
| LINKS | FAIL | _design/ links will 404 |
| PROCESS | N/A | Generated file |
| COMPLETENESS | N/A | Index page |

**Overall: NEEDS WORK** -- The _design/ links must be removed from the generated output or the generator must be updated to exclude workspace paths. Missing og:image and lastVerified.
