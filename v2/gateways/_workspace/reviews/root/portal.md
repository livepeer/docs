# Review: Gateway Home Portal
**File:** v2/gateways/portal.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. Has non-standard fields (mode, status, lastVerified) |
| Voice | 2.1-2.22 | PARTIAL FAIL | TODO comment on L38-43 references "Broadcaster" (deprecated term). Description uses title case ("Welcome To The Gateway Portal"). Minor: "productise" is correct UK English |
| Headings | 3.1-3.10 | N/A | Portal page - no traditional heading structure; uses component-driven layout |
| Structure | 4.1-4.16 | PASS | Single purpose (portal landing), clear navigation cards, no dead ends |
| Layout | 5.1-5.16 | PASS | Portal template with hero, cards, correct component imports |
| Veracity | 6.1-6.12 | PASS | All claims are navigational, no factual assertions to verify |
| Nav | 7.1-7.11 | PASS | In docs.json under "About Gateways" group |
| Links | 8.1-8.6 | PASS | Links use valid paths. Mix of relative (./concepts/) and absolute (/v2/gateways/...) |
| Process | 9.1-9.6 | PARTIAL FAIL | TODO comment still present (L38-43) - page not fully signed off |
| Completeness | 10.1-10.5 | PASS | Portal covers all major gateway sections with cards |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway Home Portal | PASS |
| sidebarTitle | Yes | Portal | PASS |
| description | Yes | Welcome To The Gateway Portal: Explore, Navigate, Create | FAIL - title case, self-referential ("Welcome To The") |
| pageType | Yes | navigation | PASS |
| audience | Yes | gateway | PASS |
| purpose | Yes | orient | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 31 items | PASS (though excessive; includes deprecated "broadcaster" terms) |
| OG image | Yes | /snippets/assets/media/og-images/fallback.png | PASS |

## Heading Score Table
N/A - Portal page uses component-driven layout rather than traditional headings.

## Notes
- Description violates three rules: title case, self-referential phrasing, not subject-first. Suggested fix: "Landing page for gateway documentation with links to concepts, setup, guides, and resources."
- Keywords include "broadcaster" variants (livepeer broadcaster, livepeer broadcasters, etc.) - 8 of 31 keywords reference the deprecated term. These should be removed or replaced.
- TODO comment (L38-43) about terminology validation is still open. Page should not ship with open TODOs.
- `mode: frame` is a Mintlify layout directive - valid for portal pages.
- `status` and `lastVerified` are non-standard frontmatter fields (not in the 10 required). Acceptable as extras but not a substitute for the missing required fields.

## Verdict: NEEDS WORK
Reason: Description fails voice rules (title case, self-ref). Missing complexity and lifecycleStage. Open TODO. Keywords contain deprecated "broadcaster" terms.
