# Review: gwid-single-click-deploy.mdx

**Path:** `v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | PASS - "Easy Install [DevOps & Community Projects]" |
| 1.2 description | PASS |
| 1.3 pageType | PASS - lowercase `pageType` |
| 1.4 audience | PASS - gateway |
| 1.5 status | WARN - draft (appropriate given state) |
| 1.6 lastVerified | PASS - 2026-03-17 |
| 1.7 keywords | PASS - 10 keywords |
| 1.8 og:image | PASS - fallback.png with full OG metadata |
| 2.1 UK English | PASS |
| 2.2 no banned words | WARN - "easy" used multiple times (lines 58, 90) |
| 2.12 entity-led voice | FAIL - line 74: "Have a Guide or Project to Contribute?" is a question, not entity-led |
| 2.13 no em-dashes | PASS |
| 2.14 no hedging | PASS |
| 2.15 no self-ref | PASS |
| 2.16 no questions in headings | FAIL - implicit question pattern in body text |
| 3.1 heading score | 15/25 - "Gateway HUB", "GWID RFP & Updates", "GWID Documentation" are weak |
| 3.2 no banned heading patterns | WARN - "GWID RFP & Updates" uses ampersand |
| 4.1 one job | PASS - community deployment tools |
| 4.11 no TODO in body | FAIL - Danger block lines 39-51 contains TODOs |
| 4.12 no REVIEW flags | PASS |
| 4.13 min 2KB | PASS - 3.2KB (barely) |
| 5.1 correct template | WARN - uses raw `# Gateway HUB` H1 heading which duplicates the frontmatter title |
| 5.15 Related Pages | FAIL - no Related Pages section |
| 5.16 CTA | WARN - external card to GitHub is present but no internal navigation |
| 7.1 in docs.json | PASS - registered at line 2642 |
| 8.6 links resolve | WARN - ExternalContent component (line 100) references removed |

## Frontmatter

| Field | Value | Valid |
|-------|-------|-------|
| title | Easy Install [DevOps & Community Projects] | WARN - brackets in title non-standard |
| sidebarTitle | Single Click Deployment | PASS |
| description | Community CICD Pipelines... | PASS |
| pageType | guide | PASS |
| audience | gateway | PASS |
| purpose | operate | PASS |
| status | draft | PASS (appropriate) |
| lastVerified | 2026-03-17 | PASS |
| keywords | 10 items | PASS |
| og:image | fallback.png | PASS |
| tag | beta | PASS |

## Heading Score

| Criterion | Score |
|-----------|-------|
| Concise | 15/25 - "GWID (Gateway Wizard)" is ok, but "GWID RFP & Updates" is non-standard |
| No questions | 20/25 |
| Technical/specific | 15/25 |
| **Total** | **15/25** |

## Verdict

**FAIL - needs work.** This is a legacy v1-style page that has not been fully converted to v2 standards. Issues: (1) explicit TODOs in a Danger block visible to readers, (2) duplicate H1 heading, (3) no Related Pages, (4) question pattern in body, (5) brackets in title, (6) "easy" is a banned marketing word. The page functions as a directory entry for GWID but needs a full rewrite to v2 voice and structure standards.
