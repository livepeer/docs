# Review: Developers Index

**File:** `v2/developers/index.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, pageType, purpose, lifecycleStage, keywords. Missing: audience, OG image, complexity |
| VOICE | 2.1-2.22 | PASS | UK English. No banned words. No self-ref |
| HEADINGS | 3.1-3.10 | N/A | Auto-generated TOC page |
| STRUCTURE | 4.1-4.16 | PASS | Single purpose (navigation index). No dead ends |
| LAYOUT | 5.1-5.16 | PASS | Generated file with correct banner. Template-appropriate |
| VERACITY | 6.1-6.12 | PASS | Links to real pages |
| NAV | 7.1-7.11 | FAIL | Not registered in docs.json nav (orphan — but this is a generated index, likely intentional) |
| LINKS | 8.1-8.6 | WARN | Uses relative .mdx links (e.g. `navigator.mdx`) rather than absolute /v2/ paths |
| PROCESS | 9.1-9.6 | PASS | Auto-generated with governance banner |
| COMPLETENESS | 10.1-10.5 | PASS | Covers all sections |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Developers Index | OK |
| sidebarTitle | Y | Developers Index | OK |
| description | Y | Generated table of contents... | OK but generic |
| pageType | Y | navigation | OK |
| purpose | Y | orient | OK |
| audience | N | — | MISSING |
| complexity | N | — | MISSING |
| lifecycleStage | Y | discover | OK |
| keywords | Y | 4 items | OK |
| OG image | N | — | MISSING |

## Heading Score Table

N/A — auto-generated index page. Headings are section names from the folder structure.

## Verdict

**PASS WITH NOTES** — Auto-generated navigation index. Missing audience, OG image, and complexity frontmatter. Relative .mdx links should be absolute paths for cross-site consistency. Not in docs.json nav but this is expected for a generated index.
