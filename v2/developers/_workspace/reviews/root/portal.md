# Review: Livepeer Developer Portal

**File:** `v2/developers/portal.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, pageType, audience, purpose, keywords, OG image. Missing: complexity, lifecycleStage. Description uses title case and self-referential phrasing |
| VOICE | 2.1-2.22 | FAIL | "Welcome To The Developer Portal" (title case, self-referential). "Discover Developer Platforms that make it Integrate Real-time Video AI" — broken sentence. "Build - Create - Innovate" — marketing slogan, not fact-led |
| HEADINGS | 3.1-3.10 | N/A | Frame-mode portal, no standard headings |
| STRUCTURE | 4.1-4.16 | WARN | Has commented-out TODO blocks and Notes. Purpose is clear (portal landing) but content is rough |
| LAYOUT | 5.1-5.16 | PASS | Frame-mode portal with hero + card grid. Correct component usage |
| VERACITY | 6.1-6.12 | PASS | Links to real pages |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | All links use /v2/ absolute paths |
| PROCESS | 9.1-9.6 | WARN | lastVerified=2026-03-17, status not explicitly set but tag="Start Here" |
| COMPLETENESS | 10.1-10.5 | PASS | Covers video, AI, platforms, build, contribute, guides |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Livepeer Developer Portal | OK |
| sidebarTitle | Y | Developer Portal | OK |
| description | Y | Welcome To The Developer Portal... | FAIL — title case, self-referential |
| pageType | Y | navigation | OK |
| purpose | Y | orient | OK |
| audience | Y | developer | OK |
| keywords | Y | 27 items | WARN — excessive keyword stuffing |
| OG image | Y | fallback.png | WARN — should use developer-specific OG |
| complexity | N | — | MISSING |
| lifecycleStage | N | — | MISSING |

## Verdict

**NEEDS WORK** — Voice violations: title-case description, self-referential phrasing, broken sentence ("that make it Integrate"), marketing slogans. Commented-out TODO blocks still present. 27 keywords is excessive. Description should be subject-first UK English.
