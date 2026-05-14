# Review: Bring Your Own Container (BYOC)

**File:** `v2/developers/build/byoc.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, pageType=instruction, audience=developer, keywords, OG image. Missing: complexity, lifecycleStage. `Purpose` capitalised (should be lowercase). status=draft |
| VOICE | 2.1-2.22 | PASS | UK English. No banned words. Entity-led prose. No em-dashes |
| HEADINGS | 3.1-3.10 | PASS | Clean step-based headings. No questions. No banned words |
| STRUCTURE | 4.1-4.16 | PASS | Clear purpose (how-to). Prerequisites > Steps > Variants > Related. 10KB+ |
| LAYOUT | 5.1-5.16 | PASS | Correct instruction template with Steps, code blocks, comparison table, Related CardGroup |
| VERACITY | 6.1-6.12 | WARN | Multiple REVIEW flags (7 total). Unconfirmed: go-livepeer BYOC flags, base Docker image, capability_name, SDK install name |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Links resolve. No TODO/TBD in links |
| PROCESS | 9.1-9.6 | FAIL | status=draft. 7 REVIEW flags unresolved. No stakeholder signoff |
| COMPLETENESS | 10.1-10.5 | PASS | Covers full BYOC lifecycle: implement > Docker > test > deploy > client |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Bring Your Own Container (BYOC) | OK |
| sidebarTitle | Y | BYOC | OK |
| description | Y | Step-by-step guide... (147 chars) | OK |
| pageType | Y | instruction | OK |
| purpose | Y | build | WARN — key capitalised as `Purpose` |
| audience | Y | developer | OK |
| keywords | Y | 10 items | OK |
| OG image | Y | fallback.png | WARN — should use developer-specific OG |
| complexity | N | — | MISSING |
| lifecycleStage | N | — | MISSING |

## Verdict

**NEEDS WORK** — Excellent content structure and depth but blocked by 7 unresolved REVIEW flags covering critical technical details (go-livepeer flags, Docker base image, SDK API). Status=draft. Cannot publish without stakeholder review.
