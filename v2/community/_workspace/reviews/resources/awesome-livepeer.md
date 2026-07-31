# Review: v2/community/resources/awesome-livepeer.mdx

**File:** `v2/community/resources/awesome-livepeer.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, Keywords (capitalised key!), OG image, purpose, pageType, audience, status, lastVerified, sourceOfTruth. "Keywords" should be "keywords" |
| VOICE | 2.1-2.22 | PASS | UK English. Fact-led descriptions. No banned words. "organised" not "organized". Minor: "behaviour" used correctly |
| HEADINGS | 3.1-3.10 | PASS | 11 H2/H3 headings covering: Official Interfaces, Foundation Dashboards, Protocol Analytics, Staking & Delegation, Orchestrator & Node Operator Tools, Monitoring & Alerting, Infrastructure & RPC, SDKs & Developer Libraries, Community Platforms & Initiatives, Platforms Built on Livepeer. Score: 22/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (ecosystem tools catalogue). No dead ends -- links throughout. Clear organisation by category |
| LAYOUT | 5.1-5.16 | PASS | Uses CardGroup, Card, Note, CustomDivider, tables. Final CTA card links to awesome-livepeer repo. No Related Pages section but final card serves as CTA |
| VERACITY | 6.1-6.12 | WARN | Many Card hrefs point to generic "github.com/livepeer/awesome-livepeer" rather than specific tools. Some Cards (Live Pioneers, Livepeer Foundation) have no href at all |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | WARN | Multiple tool Cards use generic awesome-livepeer link rather than direct tool URLs. This reduces discoverability |
| PROCESS | 9.1-9.6 | PASS | status=verified_2026, lastVerified=2026-03-02 |
| COMPLETENESS | 10.1-10.5 | PASS | Comprehensive catalogue covering all major tool categories |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Ecosystem Tools & Projects | OK |
| sidebarTitle | Y | Ecosystem Tools | OK |
| description | Y | Good | OK |
| Keywords | Y | 10 items | WARN -- key capitalised ("Keywords" not "keywords") |
| audience | Y | everyone (array) | OK |
| pageType | Y | reference | OK |
| purpose | Y | concept | OK |
| status | Y | verified_2026 | OK |
| lastVerified | Y | 2026-03-02 | OK |
| sourceOfTruth | Y | github.com/livepeer/awesome-livepeer | OK |
| OG image | Y | fallback.png | OK |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2+H3 headings | 11 |
| Banned heading patterns | None |
| Score | 22/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "Keywords" key capitalised -- Mintlify may not index it. Should be "keywords" |
| 2 | LINKS | P2 | 8+ Cards link to generic awesome-livepeer instead of direct tool URLs |
| 3 | LINKS | P3 | Live Pioneers and Livepeer Foundation Cards have no href (only "(Reference: ...)" in text) |
| 4 | VERACITY | P3 | Foundation dashboards note says "Verify exact deep-link paths" -- should be resolved, not deferred to reader |

## Verdict

**PASS WITH ISSUES** -- Well-structured ecosystem tools catalogue with good voice and comprehensive coverage. The capitalised "Keywords" frontmatter key is a P1 fix. Multiple generic awesome-livepeer links should be replaced with direct tool URLs where possible.
