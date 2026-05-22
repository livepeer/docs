# Section Summary: v2/gateways/setup/

**Audit date:** 2026-04-08
**Pages reviewed:** 20
**Pass:** 4 | **Needs Work:** 12 | **Rewrite:** 4

## Per-Page Verdicts

### Nav-registered pages (live)

| Page | Verdict | Notes |
|---|---|---|
| guide.mdx | NEEDS WORK | Typos ("Gatway"), TODO, question-led cards |
| prepare.mdx | PASS | Minor: missing complexity/lifecycleStage |
| install.mdx | PASS | Minor: informal heading, no Related Pages |
| configure.mdx | PASS | Minor: PageType casing, no Related Pages |
| connect.mdx | PASS | Minor: missing complexity/lifecycleStage |
| verify.mdx | PASS | Minor: no Related Pages |
| monitor.mdx | PASS | Strongest page - comprehensive monitoring |

### Sub-pages and orphans

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| configure/configuration-reference.mdx | No | REWRITE | Empty body, orphan |
| connect/lp-marketplace.mdx | Ref'd | NEEDS WORK | TODO, question heading, incomplete section |
| connect/discover-offerings.mdx | No | NEEDS WORK | Orphan, near-duplicate |
| connect/connect-with-offerings.mdx | No | NEEDS WORK | Orphan, near-duplicate |
| monitor/monitor-and-optimise.mdx | No | REWRITE | Self-described brainstorming, superseded |
| monitor/monitoring-setup.mdx | No | NEEDS WORK | 4 REVIEW flags, superseded by parent |
| prepare/on-chain-setup.mdx | No | NEEDS WORK | Content fragment, no frontmatter |
| requirements/on-chain-setup/bridge-lpt-to-arbitrum.mdx | No | NEEDS WORK | Outdated testnet refs |
| requirements/on-chain-setup/on-chain.mdx | No | NEEDS WORK | Redirected, superseded |
| requirements/setup.mdx | No | NEEDS WORK | status: draft, redirected |
| transcoding/transcoding-options.mdx | No | NEEDS WORK | Orphan, may be superseded |
| transcoding/transcoding.mdx | No | REWRITE | Placeholder, zero content |
| publish/connect-with-offerings.mdx | No | REWRITE | GIF, "yay!", triple duplicate |

## Category Failure Heatmap (nav-registered pages only)

| Category | guide | prepare | install | configure | connect | verify | monitor |
|---|---|---|---|---|---|---|---|
| 1. FRONTMATTER | WARN | WARN | WARN | WARN | WARN | WARN | WARN |
| 2. VOICE | WARN | PASS | WARN | PASS | PASS | PASS | PASS |
| 3. HEADINGS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 4. STRUCTURE | FAIL | PASS | PASS | PASS | PASS | PASS | PASS |
| 5. LAYOUT | PASS | WARN | FAIL | FAIL | PASS | FAIL | PASS |
| 6. VERACITY | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 7. NAV | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 8. LINKS | WARN | PASS | PASS | PASS | PASS | PASS | PASS |
| 9. PROCESS | FAIL | FAIL | FAIL | FAIL | FAIL | FAIL | FAIL |
| 10. COMPLETENESS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

## Key Findings

1. **Clean setup journey spine:** The 7 nav-registered pages (guide, prepare, install, configure, connect, verify, monitor) form a coherent journey. All pass or nearly pass. The new consolidated pages (prepare, install, configure, connect, verify, monitor) are well-structured with consistent OS-tab patterns and imported views.

2. **Orphan page problem:** 13 of 20 pages are NOT in docs.json. Many are superseded by the new consolidated pages but still exist in the repo. This creates maintenance burden and confusion.

3. **Triple-duplicate marketplace content:** The same marketplace/discovery content exists in 3 files: connect/lp-marketplace.mdx, connect/connect-with-offerings.mdx, and publish/connect-with-offerings.mdx. Only lp-marketplace is referenced (from connect.mdx Related Pages).

4. **Universal frontmatter gaps:** Every page is missing `complexity` and `lifecycleStage`. Most use `PageType` (capital P) instead of `pageType`. No page has `reviewed: true`.

5. **Category 9 (Process) fails universally:** No page in either section has human sign-off (`reviewed: true`).

6. **Superseded pages need cleanup:** requirements/setup.mdx, requirements/on-chain-setup/on-chain.mdx, monitor/monitor-and-optimise.mdx, monitor/monitoring-setup.mdx, and transcoding/transcoding.mdx are all superseded by the new consolidated pages and have active redirects in docs.json.

7. **Strongest pages:** monitor.mdx and prepare.mdx are production-quality with comprehensive content, entity-led voice, and proper data imports.

## Recommendations

1. **P0:** Archive or delete 4 REWRITE pages: configuration-reference, monitor-and-optimise, transcoding, publish/connect-with-offerings
2. **P0:** Consolidate the 3 marketplace duplicate pages into one canonical page
3. **P1:** Archive 6 redirected/superseded pages to x-deprecated/: requirements/setup, requirements/on-chain-setup/on-chain, requirements/on-chain-setup/bridge-lpt-to-arbitrum, monitor/monitoring-setup, connect/discover-offerings, connect/connect-with-offerings
4. **P1:** Fix typos in guide.mdx: "Gatway" x2, "whichcan"
5. **P1:** Add Related Pages to install.mdx, configure.mdx, verify.mdx
6. **P2:** Add `complexity` and `lifecycleStage` to all frontmatter
7. **P2:** Normalise `PageType` to `pageType` across all files
8. **P2:** Add `reviewed: true` after human review pass
9. **P3:** Update bridge-lpt-to-arbitrum.mdx Rinkeby references to Arbitrum Sepolia
