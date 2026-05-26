# Review: v2/developers/resources/knowledge-hub/deepwiki.mdx

**File:** `v2/developers/resources/knowledge-hub/deepwiki.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, PageType (capitalised!), keywords, OG image, audience, lastVerified, purpose. Missing: status |
| VOICE | 2.1-2.22 | WARN | "If you haven't heard of it before" -- self-referential/conversational. "fantastic resource" -- subjective hedging. "not everything on DeepWiki is accurate!" -- exclamation mark. "Repo's" should be "Repos" (incorrect apostrophe) |
| HEADINGS | 3.1-3.10 | FAIL | No headings. Page is flat content |
| STRUCTURE | 4.1-4.16 | WARN | Under 2KB. Short but functional -- intro paragraph, Card link, Tip, iframe embed |
| LAYOUT | 5.1-5.16 | WARN | Uses Card, Tip, iframe. iframe may not render in all Mintlify environments. No Related Pages. Raw `{' '}` spacer in Tip is ugly |
| VERACITY | 6.1-6.12 | PASS | DeepWiki link correct. Cognition AI attribution accurate |
| NAV | 7.1-7.11 | PASS | Registered in docs.json. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | External links correct |
| PROCESS | 9.1-9.6 | WARN | Missing status. lastVerified=2026-03-17 |
| COMPLETENESS | 10.1-10.5 | WARN | Page delivers its intent (link to DeepWiki + embed) but no context about which repos to explore or how to use it effectively |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | DeepWiki | OK |
| sidebarTitle | Y | DeepWiki | OK |
| description | Y | Good | OK |
| PageType | Y | resource | WARN -- capitalised, non-standard value |
| keywords | Y | 4 items | OK |
| OG image | Y | fallback.png | OK |
| audience | Y | developer | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | orient | OK |
| status | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total headings | 0 |
| Score | 0/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "PageType" capitalised and non-standard value |
| 2 | FRONTMATTER | P2 | Missing status field |
| 3 | VOICE | P1 | "fantastic resource" -- subjective. "If you haven't heard of it" -- self-referential |
| 4 | VOICE | P2 | Exclamation mark in Tip. "Repo's" -- incorrect apostrophe |
| 5 | LAYOUT | P2 | `{' '}` raw spacer in Tip callout |
| 6 | LAYOUT | P3 | iframe may not render in all Mintlify environments |

## Verdict

**NEEDS WORK** -- Voice violations (subjective language, self-referential phrasing, exclamation mark). No headings. Frontmatter capitalisation. The content concept is sound (DeepWiki is useful) but the writing needs a voice-pass and the page needs structure.
