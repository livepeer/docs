# Section Summary: orchestrators/quickstart
**Pages reviewed:** 4
**Pass:** 0 | **Needs Work:** 4 | **Rewrite Required:** 0

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| guide.mdx | NEEDS WORK | Frontmatter, Links, Process | Missing 3 frontmatter fields. `Keywords` capitalised. REVIEW comment published. Card href uses old slug |
| tutorial.mdx | NEEDS WORK | Frontmatter, Structure, Completeness | Missing 3 frontmatter fields. Under 2KB. Redundant with guide.mdx. Case mismatch in link slug |
| video-transcoding.mdx | NEEDS WORK | Frontmatter, Links, Process | pageType `quickstart` invalid. 4 links use old slugs or relative paths. "Connect to Arbitrum" card points to wrong page |
| AI-prompt-start.mdx | NEEDS WORK | Frontmatter, Veracity, Links, Process | status=review. Description over 160 chars. 3 VRAM values missing. Multiple REVIEW flags. Old link slugs |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| 1. Frontmatter | 4/4 | `purpose`, `complexity`, `lifecycleStage` missing from all. `Keywords` capitalised on 1 page. Non-standard pageType values (`overview`, `quickstart`) |
| 2. Voice | 1/4 | REVIEW comment and "MacOS" capitalisation on guide.mdx. "Top 100" instead of "active set" on AI-prompt-start |
| 3. Headings | 0/4 | -- |
| 4. Structure | 1/4 | tutorial.mdx is under 2KB and redundant |
| 5. Layout | 2/4 | Missing Related Pages sections. REVIEW comments in source |
| 6. Veracity | 1/4 | AI-prompt-start has empty VRAM values and unverified claims |
| 7. Nav | 0/4 | All registered |
| 8. Links | 3/4 | Old slugs (rs-install, install-go-livepeer, r-monitor), relative paths, wrong targets |
| 9. Process | 4/4 | No sign-off on any page. REVIEW/TODO flags on 2 pages. AI-prompt-start published with status=review |
| 10. Completeness | 2/4 | tutorial.mdx is redundant. AI-prompt-start has missing data |

## Systemic issues
1. **Frontmatter schema not enforced.** All 4 pages missing purpose, complexity, lifecycleStage. Two pages use non-standard pageType values.
2. **Link slug drift.** Multiple old slugs still in use (rs-install, install-go-livepeer, r-monitor, orch-config). Redirects exist but canonical links should use current paths.
3. **No sign-off on any page.** No human review evidence on any quickstart page.
4. **tutorial.mdx is redundant.** Its content (3 numbered links) is a subset of guide.mdx. Consider merging or differentiating.
