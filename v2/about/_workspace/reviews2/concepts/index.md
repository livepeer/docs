# Review: index.md

**Page**: `v2/about/concepts/index.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1-1.14 | All frontmatter | FAIL | NO FRONTMATTER. File is 7 lines: four plain-text H1 lines stacked. No YAML block. |
| 2. Voice | 2.1-2.22 | All voice | N/A or FAIL | No prose to evaluate. The four H1 lines are concept labels separated by `/`: "About / Overview / Concepts", "Architecture / Stack / Mental Model", "Actors / Participants / Runtime Roles", "Governance / Economics / Tokenomics". These read as a brainstorm of section names, not published content. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with "About / Overview / Concepts" — the word "Overview" is in the avoid-tier banned headings list. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | All four lines use `# ` (H1) inappropriately. Mintlify pages should not contain H1 in body — title comes from frontmatter. Each heading is a slash-list of synonyms (8/25 each — fails Precision and Stability). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Overview" (banned/avoid in heading), "Concepts" alone is weak. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | None of the headings have Livepeer/protocol/network anchors. |
| 3. Headings | 3.5-3.10 | Other heading checks | FAIL | All H1, no H2 structure, no concept-naming, no editorial choice — these are working notes. |
| 4. Structure | 4.1-4.17 | Structure | FAIL | Page is 7 lines of brainstorm titles. No structure, no purpose statement possible. Not in docs.json nav. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~150 bytes. Far below stub threshold. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No comments — but the entire content is brainstorm-grade. |
| 5. Layout | 5.1-5.34 | Layout | FAIL | No frontmatter, no template, no components, no imports, no Related Pages. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders (degraded — four giant H1s stacked). |
| 6. Veracity | 6.1-6.12 | Veracity | N/A | No claims. |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | NOT in docs.json. Mintlify routes the directory `/v2/about/concepts/` based on docs.json children, not on `index.mdx` files. This file is orphaned. |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | File exists with no nav entry. |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Orphan. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Should be in `_workspace/drafts/` or deleted. |
| 7. Navigation | 7.8 | File naming conventions | FAIL | Mintlify discourages `index.mdx` (the policy in `v2-folder-governance.mdx` typically prohibits `-index.mdx` suffix; bare `index.mdx` is a separate concern but still non-canonical for this docs site since portal pages have explicit names). |
| 7. Navigation | 7.10 | No stubs in published nav | N/A | Not in nav. |
| 8. Links | 8.1-8.6 | Links | N/A or PASS | No links. Renders as plain text. No TODO. |
| 9. Process | 9.1-9.6 | Process | FAIL | No sign-off; appears to be a scratch file. |
| 10. Completeness | 10.1-10.6 | Completeness | FAIL | Orphan; not part of any journey. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 0 | 11 | 0/11 |
| 2. Voice | 21 | 0 | 1 | 0/1 (20 N/A) |
| 3. Headings | 10 | 1 | 9 | 1/10 |
| 4. Structure | 16 | 1 | 15 | 1/16 |
| 5. Layout | 25 | 1 | 0 | 1/1 (24 N/A) |
| 6. Veracity | 8 | 0 | 0 | 0/0 (8 N/A) |
| 7. Navigation | 8 | 0 | 6 | 0/6 (2 N/A) |
| 8. Links | 6 | 1 | 0 | 1/1 (5 N/A) |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 0 | 6 | 0/6 |

**Overall**: 4/57 applicable checks passed (~7%)
**Verdict**: DELETE
**Critical issues**:
1. File is a 7-line brainstorm of section names with no frontmatter, no body, no structure
2. NOT in docs.json — orphan file
3. Four H1 lines violate MDX/Mintlify convention (page title comes from frontmatter)
4. Should be moved to `_workspace/drafts/` or deleted entirely
