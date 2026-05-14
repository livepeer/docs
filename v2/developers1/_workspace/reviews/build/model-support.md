# Review: AI Model Support

**File:** `v2/developers/build/model-support.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, pageType=reference, audience=developer, keywords, OG image. Missing: complexity, lifecycleStage. `Purpose` capitalised. status=draft |
| VOICE | 2.1-2.22 | PASS | UK English ("analysing"). Entity-led. No banned words |
| HEADINGS | 3.1-3.10 | PASS | Clean reference headings |
| STRUCTURE | 4.1-4.16 | PASS | Single purpose (reference). Well-structured tables. 5KB+ |
| LAYOUT | 5.1-5.16 | PASS | Reference template with tables, notes, code examples, Related CardGroup |
| VERACITY | 6.1-6.12 | WARN | 5 REVIEW flags. VRAM values partially unconfirmed. Some table cells contain REVIEW comments instead of data |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Links resolve |
| PROCESS | 9.1-9.6 | FAIL | status=draft. 5 REVIEW flags. Inline REVIEW comments visible as rendered content in some table cells |
| COMPLETENESS | 10.1-10.5 | PASS | Covers batch, real-time, BYOC, warm/cold models |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | AI Model Support | OK |
| sidebarTitle | Y | Model Support | OK |
| description | Y | Reference tables for all AI... (158 chars) | OK |
| pageType | Y | reference | OK |
| purpose | Y | reference | WARN — key capitalised |
| audience | Y | developer | OK |
| keywords | Y | 12 items | OK |
| OG image | Y | fallback.png | WARN |
| complexity | N | — | MISSING |
| lifecycleStage | N | — | MISSING |

## Verdict

**NEEDS WORK** — Inline REVIEW comments render as visible text in table cells (e.g. text-to-speech warm model cell, image-to-video VRAM cell). Critical rendering issue. Status=draft.
