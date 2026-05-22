# Review: Find your build path

**File:** `v2/developers/navigator.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | All 10 required fields present. OG image set. pageType=navigation, purpose=choose, audience=developer |
| VOICE | 2.1-2.22 | PASS | UK English ("containerised"). No banned words. Entity-led. No em-dashes (uses --) |
| HEADINGS | 3.1-3.10 | PASS | "What are you building?" is a question heading but serves a valid interactive purpose. "Build path reference" and "Related pages" are clean |
| STRUCTURE | 4.1-4.16 | PASS | Single purpose (path selection). No dead ends — every accordion has a LinkArrow CTA. Discord not needed (navigation page) |
| LAYOUT | 5.1-5.16 | PASS | Correct navigation template. AccordionGroup + comparison table + Related Pages CardGroup |
| VERACITY | 6.1-6.12 | PASS | All claims verifiable (9 batch pipelines, RTX 4090, Phase 4 January 2026). No unsourced numbers |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | All internal links use /v2/ absolute paths |
| PROCESS | 9.1-9.6 | PASS | status=current, lastVerified=2026-04-05 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers all 6 developer paths with comparison table |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Find your build path | OK |
| sidebarTitle | Y | Navigator | OK |
| description | Y | Choose your build track... (123 chars) | OK |
| pageType | Y | navigation | OK |
| purpose | Y | choose | OK |
| audience | Y | developer | OK |
| keywords | Y | 7 items (note: capitalised "Keywords" key) | WARN — key should be lowercase |
| OG image | Y | /snippets/assets/site/og-image/en/developers.png | OK |
| complexity | N | — | MISSING (not blocking for navigation) |
| lifecycleStage | N | — | MISSING |

## Verdict

**PASS** — High-quality navigation page. Minor: `Keywords` frontmatter key is capitalised (should be `keywords`). Missing complexity and lifecycleStage fields.
