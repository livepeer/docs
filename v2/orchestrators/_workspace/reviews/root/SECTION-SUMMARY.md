# Section Summary: orchestrators/root
**Pages reviewed:** 3
**Pass:** 0 | **Needs Work:** 3 | **Rewrite Required:** 0

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| index.mdx | NEEDS WORK | 1 (Frontmatter), 7 (Navigation) | Missing audience, complexity, OG image; not in docs.json (orphan); generic keywords |
| navigator.mdx | NEEDS WORK | 1 (Frontmatter), 2 (Voice) | pageType "landing" (old), purpose "orientation" (old), missing complexity/lifecycleStage, "This page" self-reference, potential broken community-pools link |
| portal.mdx | NEEDS WORK | 1 (Frontmatter), 9 (Process) | pageType "landing" (old), purpose "landing" (old), description is marketing title-case, missing complexity/lifecycleStage, unresolved TODO/REVIEW block |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| 1. Frontmatter & Taxonomy | 3/3 | All missing complexity and lifecycleStage; 2/3 use old pageType "landing"; 2/3 use old purpose values |
| 2. Voice & Copy | 1/3 | navigator.mdx has "This page" self-reference |
| 3. Section Naming | 0/3 | All pass or N/A |
| 4. Page Structure | 0/3 | All pass |
| 5. Layout & Components | 0/3 | All pass |
| 6. Veracity | 0/3 | All pass or N/A |
| 7. Navigation & IA | 1/3 | index.mdx is not in docs.json |
| 8. Links & Rendering | 0/3 (1 WARN) | navigator.mdx may have broken community-pools link |
| 9. Process & Governance | 3/3 | No human sign-off on any page |
| 10. Content Completeness | 0/3 | All pass or N/A |

## Systemic issues
1. **Frontmatter taxonomy migration incomplete** - All 3 pages are missing `complexity` and `lifecycleStage`. The 2 non-generated pages use old `pageType` values ("landing") and old `purpose` values ("orientation", "landing") that are not in the approved taxonomy.
2. **No human sign-off on any page** - Category 9 fails across the board. All pages have `lastVerified` dates but no formal sign-off record.
3. **index.mdx is an orphan** - Auto-generated but not in docs.json. Evaluate whether it should be added to nav or serves as an internal reference only.
