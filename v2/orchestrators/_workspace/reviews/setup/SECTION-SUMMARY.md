# Section Summary: orchestrators/setup
**Pages reviewed:** 8
**Pass:** 0 | **Needs Work:** 6 | **Rewrite Required:** 2

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| guide.mdx | NEEDS WORK | Frontmatter, Links, Process | status=draft but in nav. 5 links use old slugs. Missing complexity/lifecycleStage. `Keywords` capitalised |
| prepare.mdx | NEEDS WORK | Frontmatter, Headings, Links, Completeness | Missing pageType. Fallback OG image. "See also" heading below threshold. All links broken (old relative slugs). Thin content |
| install.mdx | NEEDS WORK | Frontmatter, Links, Process | Missing purpose/complexity/lifecycleStage. og:image key unquoted. REVIEW flag. Old slug links |
| configure.mdx | NEEDS WORK | Frontmatter, Voice, Links, Process | `Keywords` capitalised. Orphaned text fragment at line 49. Multiple TODO/REVIEW flags (SME needed). 6 old slug links |
| connect.mdx | NEEDS WORK | Frontmatter, Veracity, Links, Process | 4 TODO flags. pageType `how_to` invalid. Old slug in "Next step" card |
| verify.mdx | NEEDS WORK | Frontmatter, Veracity, Process | pageType and purpose both `how_to` invalid. 2 TODO flags. Multiple unverified guide paths |
| monitor.mdx | REWRITE REQUIRED | Frontmatter, Headings, Structure, Links, Completeness | Missing pageType. Fallback OG image. Under 2KB. All links broken. Missing Prometheus config, Grafana setup, alerting, DCGM |
| s-guide.mdx | REWRITE REQUIRED | All categories | Orphaned (not in docs.json). Every link broken. Duplicate of guide.mdx. Should be deleted |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| 1. Frontmatter | 8/8 | `purpose`, `complexity`, `lifecycleStage` missing from most. `Keywords` capitalised on 4 pages. Non-standard pageType values (`how_to`, `overview`). 2 pages use fallback OG image |
| 2. Voice | 1/8 | configure.mdx has orphaned text fragment |
| 3. Headings | 2/8 | "See also" heading on prepare.mdx and monitor.mdx scores below 20 threshold |
| 4. Structure | 2/8 | monitor.mdx and s-guide.mdx under 2KB |
| 5. Layout | 6/8 | Missing Related Pages. Old-style `<Columns>` component. Negative margin dividers |
| 6. Veracity | 4/8 | TODO/REVIEW flags on configure, connect, verify, monitor. Unverified metric names, CLI labels, gas costs |
| 7. Nav | 1/8 | s-guide.mdx is orphaned |
| 8. Links | 7/8 | Old slugs (rs-install, sc-connect, r-monitor, orch-config, x-test). Relative paths on legacy pages. Unverified guide paths |
| 9. Process | 8/8 | No sign-off on any page. TODO/REVIEW flags on 5 pages. guide.mdx published as draft |
| 10. Completeness | 3/8 | monitor.mdx critically thin. s-guide.mdx fully redundant. prepare.mdx missing detail |

## Systemic issues
1. **Frontmatter schema not enforced.** All 8 pages fail frontmatter. purpose, complexity, lifecycleStage missing almost universally. `Keywords` capitalisation error on 4/8 pages.
2. **Link slug migration incomplete.** Old slugs (rs-install, sc-connect, r-monitor, orch-config, x-test, install-go-livepeer) appear across multiple pages. Redirects exist in docs.json but canonical links should use current paths.
3. **No sign-off on any page.** Zero human review evidence across the entire setup section.
4. **TODO/REVIEW debt.** 5 of 8 pages contain TODO or REVIEW flags needing SME input (Rick referenced in configure.mdx).
5. **Non-standard pageType values.** `how_to` used on 3 pages, `overview` on 2. Neither is in the allowed set. Should map to `instruction` or `guide` and `navigation` respectively.
6. **Two pages need deletion or major rework.** s-guide.mdx is a dead orphan. monitor.mdx is critically thin and should be rewritten from scratch.
7. **Fallback OG images.** prepare.mdx and monitor.mdx use the generic fallback instead of the orchestrators-specific OG image.
