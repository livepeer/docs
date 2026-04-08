# Section Summary: orchestrators/concepts
**Pages reviewed:** 4
**Pass:** 0 | **Needs Work:** 4 | **Rewrite Required:** 0

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| role.mdx | NEEDS WORK | 1 (Frontmatter), 2 (Voice) | Missing complexity/lifecycleStage; "Keywords" wrong case; banned word "significantly"; "Pool worker" deprecated term; non-standard pageVariant field |
| capabilities.mdx | NEEDS WORK | 1 (Frontmatter), 2 (Voice), 8 (Links) | Missing complexity/lifecycleStage; "Keywords" wrong case; banned phrase "Understanding...is essential"; likely broken link to workloads-and-ai/job-types |
| architecture.mdx | NEEDS WORK | 1 (Frontmatter), 2 (Voice) | Missing complexity/lifecycleStage; "Keywords" wrong case; banned word "several"; 2 REVIEW flags; hardcoded contract address |
| incentive-model.mdx | NEEDS WORK | 1 (Frontmatter), 2 (Voice) | Missing complexity/lifecycleStage; "Keywords" wrong case; banned phrase "rather than" x2; 3 REVIEW flags |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| 1. Frontmatter & Taxonomy | 4/4 | All missing `complexity` and `lifecycleStage`; all have `Keywords` with capital K instead of `keywords` |
| 2. Voice & Copy | 4/4 | Each page has at least one banned word or phrase: "several" (architecture), "Understanding...is essential" (capabilities), "rather than" x2 (incentive-model), "significantly" (role) |
| 3. Section Naming | 0/4 | All headings score well |
| 4. Page Structure | 0/4 | All well-structured with trade-offs where applicable |
| 5. Layout & Components | 0/4 | All use correct templates and approved components |
| 6. Veracity | 0/4 (3 WARN) | 6 total REVIEW flags across 3 pages for unverified claims |
| 7. Navigation & IA | 0/4 | All in docs.json |
| 8. Links & Rendering | 1/4 (2 WARN) | capabilities.mdx has likely broken link (wrong directory name) |
| 9. Process & Governance | 4/4 | No human sign-off on any page; total 7 unresolved REVIEW/TODO items |
| 10. Content Completeness | 0/4 | All pages are comprehensive and self-contained |

## Systemic issues
1. **`Keywords` field has wrong case on all 4 pages** - Capitalised "Keywords" instead of lowercase "keywords". This is likely a template bug from the page creation process. May cause tooling to miss keyword data entirely.
2. **`complexity` and `lifecycleStage` missing on all 4 pages** - Same gap as root pages. Frontmatter migration to the new taxonomy is incomplete.
3. **Every page has at least one banned word or phrase** - "several", "significantly", "Understanding X is essential", "rather than". These are small copy fixes but systematic across the section.
4. **7 unresolved REVIEW/TODO items** across the 4 pages - All are legitimate human review items (contract verification, fee mechanics, pipeline completeness, commercial page link). None are content gaps but they represent unfinished verification.
5. **OG images all use fallback.png** - No section-specific OG images. The root pages (navigator, portal) correctly use orchestrators.png, but concepts pages fall back to generic.
6. **No human sign-off on any page** - All have `lastVerified: 2026-03-15` and `status: current` but no formal sign-off.

## Quality assessment
The concepts section is high-quality content that reads well, covers the right topics, and uses the component library correctly. The issues are almost entirely **metadata and copy-standard compliance**, not content quality. A single pass to fix frontmatter fields (lowercase keywords, add complexity/lifecycleStage) and replace 4-5 banned words/phrases would bring all 4 pages to PASS.
