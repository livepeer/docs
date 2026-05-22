# Delegators Tab -- Quality Audit Summary

**Audit date:** 2026-04-08
**Auditor:** Claude (documentation quality audit)
**Pages audited:** 25
**Framework:** 10-category quality framework

---

## Tab-level verdict: GOOD with systemic issues to fix

The delegation section (7 pages) is exemplary -- well-scoped, well-written, with Related Pages, data imports, and consistent voice. The concepts section is strong technically but has academic-register issues. The guides section (governance + treasury, 6 pages) is the weakest: all pages share the same structural problems (numbered headings, no Related Pages, missing `status`). Resources are mixed -- glossary, contracts, and parameters are excellent; exchanges is significantly stale.

---

## Section summaries

### Root (2 pages)

| Page | Verdict | Key issues |
|---|---|---|
| index.mdx | NEEDS WORK | Generated page exposes _design/ workspace links, missing og:image, not in docs.json |
| portal.mdx | PASS | Minor: `Keywords` capitalisation |

### Concepts (4 pages)

| Page | Verdict | Key issues |
|---|---|---|
| overview.mdx | NEEDS WORK | US spelling "behavior", no Related Pages, numbered headings, `Keywords` casing |
| purpose.mdx | NEEDS SIGNIFICANT WORK | En-dash characters throughout, empty heading, scope too broad (overlaps 3+ pages), zero cross-references, genesis supply discrepancy (25.8M vs 10M) |
| mechanics.mdx | PASS | Minor: `PageType` casing. Otherwise exemplary |
| tokenomics.mdx | NEEDS WORK | No Related Pages, numbered headings, `PageType` casing |

### Delegation (7 pages)

| Page | Verdict | Key issues |
|---|---|---|
| overview.mdx | PASS | Minor: `Keywords` casing, question in H2 |
| about-delegation.mdx | PASS | Minor: `Keywords` casing |
| bridge-lpt-to-arbitrum.mdx | PASS | Minor: `Keywords` casing. Data imports correct |
| choose-an-orchestrator.mdx | PASS | Minor: `Keywords` casing. Exemplary guide |
| delegate-your-lpt.mdx | PASS | Minor: `Keywords` casing |
| delegation-economics.mdx | PASS | Minor: `Keywords` casing |
| manage-your-delegation.mdx | PASS | Minor: `Keywords` casing |

### Guides (6 pages)

| Page | Verdict | Key issues |
|---|---|---|
| governance/overview.mdx | NEEDS WORK | US spelling "behavior", no Related Pages, numbered headings, missing `status` |
| governance/model.mdx | NEEDS WORK | No Related Pages, numbered headings, `PageType` casing, missing `status` |
| governance/processes.mdx | NEEDS WORK | US spelling "signaling" in description, inconsistent Steps component, no Related Pages, missing `status` |
| treasury/overview.mdx | NEEDS WORK | No Related Pages, `Keywords` casing, missing `status` |
| treasury/allocations.mdx | NEEDS WORK | 3 duplicate accordion titles, no Related Pages, `PageType` casing, missing `status` |
| treasury/proposals.mdx | NEEDS WORK | Inconsistent Steps component, no Related Pages, `PageType` casing, missing `status` |

### Resources (6 pages)

| Page | Verdict | Key issues |
|---|---|---|
| glossary.mdx | PASS | Dual-data-source maintenance risk (SearchTable + Accordions) |
| compendium/exchanges.mdx | NEEDS SIGNIFICANT WORK | Data 4 months stale, hardcoded inline styles, TODO/Danger block, no data imports |
| compendium/lpt-eth-usage.mdx | NEEDS WORK | "Livpeer" typo, missing `status` |
| knowledge-hub/delegator-videos-and-blogs.mdx | NEEDS WORK | `Purpose` casing, missing `status`, no Related Pages, stale external links |
| reference/contracts.mdx | PASS | Minor: `Keywords` casing. Exemplary reference page |
| reference/protocol-parameters.mdx | PASS | Minor: `Keywords` casing |

---

## Systemic issues (fix once, fix everywhere)

### 1. Frontmatter key casing (affects 18/25 pages)
`Keywords`, `PageType`, `Purpose` should all be lowercase. This is a bulk find-and-replace.

### 2. Missing `status` field (affects 10/25 pages)
All governance/treasury guides, overview, purpose, exchanges, lpt-eth-usage, and videos-and-blogs pages lack `status: current`.

### 3. No Related Pages CardGroup (affects 10/25 pages)
All governance/treasury pages, concepts/overview, concepts/tokenomics, concepts/purpose, and videos-and-blogs.

### 4. Numbered heading style + "Executive Summary" (affects 8/25 pages)
overview.mdx, tokenomics.mdx, governance/overview, governance/model, governance/processes, treasury/overview, treasury/allocations, treasury/proposals all use numbered section headings and "Executive Summary" -- academic register not matching docs voice.

### 5. Inconsistent Steps component (affects 2/25 pages)
governance/processes.mdx and treasury/proposals.mdx use native `<Steps>/<Step>` instead of `StyledSteps/StyledStep` used by the delegation section.

---

## Scores by category

| Category | Pass | Needs Work | Fail |
|---|---|---|---|
| FRONTMATTER | 15 | 10 | 0 |
| VOICE | 19 | 6 | 0 |
| HEADINGS | 17 | 8 | 0 |
| STRUCTURE | 19 | 4 | 2 |
| LAYOUT | 14 | 1 | 10 |
| VERACITY | 23 | 1 | 1 |
| NAV | 24 | 0 | 1 |
| LINKS | 23 | 1 | 1 |
| PROCESS | 23 | 1 | 1 |
| COMPLETENESS | 24 | 1 | 0 |

---

## Priority fix list

| Priority | Issue | Pages affected | Effort |
|---|---|---|---|
| P0 | purpose.mdx scope reduction + en-dash cleanup | 1 | Medium |
| P0 | exchanges.mdx data refresh + component migration | 1 | Medium |
| P1 | Bulk lowercase frontmatter keys | 18 | Low (scripted) |
| P1 | Add `status: current` to 10 pages | 10 | Low (scripted) |
| P1 | Add Related Pages CardGroup to 10 pages | 10 | Medium |
| P2 | Remove numbered headings + "Executive Summary" from 8 pages | 8 | Medium |
| P2 | Fix Steps component consistency (2 pages) | 2 | Low |
| P2 | Fix US spellings (behavior, signaling) | 3 | Low |
| P3 | index.mdx generator: exclude _design/ links | 1 | Low |
| P3 | lpt-eth-usage.mdx "Livpeer" typo | 1 | Low |
| P3 | Resolve genesis supply discrepancy (purpose.mdx says 25.8M, glossary says 10M) | 1 | Low |

---

## Exemplary pages (use as templates)

1. **mechanics.mdx** -- Best concept page: scoped, cross-referenced, dated operational notes, Related Pages
2. **choose-an-orchestrator.mdx** -- Best guide page: step-by-step, checklist, FAQ, clear handoff
3. **contracts.mdx** -- Best reference page: data-imported, no hardcoded values, "why it matters" column
4. **bridge-lpt-to-arbitrum.mdx** -- Best instruction page: StyledSteps, data imports, multiple routes, clear prerequisites
