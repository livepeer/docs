# Section Summary: v2/gateways/quickstart/

**Audit date:** 2026-04-08
**Pages reviewed:** 11
**Pass:** 0 | **Needs Work:** 7 | **Rewrite:** 4

## Per-Page Verdicts

| Page | Type | In Nav | Verdict |
|---|---|---|---|
| AI-prompt.mdx | Page | Yes | NEEDS WORK |
| gateway-setup.mdx | Page | Yes | NEEDS WORK |
| groups/docker/dockerSupport.mdx | Embedded | No | NEEDS WORK |
| groups/linux/linuxSupport.mdx | Embedded | No | NEEDS WORK |
| groups/linux/macSupport.mdx | Embedded | No | REWRITE |
| views/docker/dockerOffChainTab.mdx | View | No | NEEDS WORK |
| views/docker/dockerOnChainTab.mdx | View | No | NEEDS WORK |
| views/linux/linuxOffChainTab.mdx | View | No | NEEDS WORK |
| views/linux/linuxOnChainTab.mdx | View | No | REWRITE |
| views/windows/windowsOffChainTab.mdx | View | No | REWRITE |
| views/windows/windowsOnChainTab.mdx | View | No | REWRITE |

## Category Failure Heatmap

| Category | AI-prompt | gateway-setup | dockerSupport | linuxSupport | macSupport | dockerOffChain | dockerOnChain | linuxOffChain | linuxOnChain | windowsOffChain | windowsOnChain |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1. FRONTMATTER | WARN | WARN | FAIL | WARN | FAIL | WARN | FAIL | FAIL | WARN | WARN | WARN |
| 2. VOICE | FAIL | FAIL | PASS | PASS | N/A | PASS | WARN | PASS | PASS | PASS | PASS |
| 3. HEADINGS | PASS | PASS | PASS | PASS | N/A | PASS | PASS | PASS | PASS | PASS | PASS |
| 4. STRUCTURE | FAIL | FAIL | PASS | PASS | FAIL | FAIL | FAIL | FAIL | FAIL | FAIL | FAIL |
| 5. LAYOUT | FAIL | PASS | N/A | N/A | FAIL | PASS | PASS | PASS | PASS | PASS | PASS |
| 6. VERACITY | WARN | FAIL | PASS | PASS | N/A | FAIL | FAIL | PASS | PASS | PASS | PASS |
| 7. NAV | PASS | PASS | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| 8. LINKS | N/A | WARN | PASS | PASS | N/A | PASS | PASS | PASS | PASS | PASS | PASS |
| 9. PROCESS | FAIL | FAIL | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| 10. COMPLETENESS | PASS | WARN | PASS | PASS | FAIL | PASS | PASS | FAIL | FAIL | FAIL | FAIL |

## Key Findings

1. **Empty stub crisis:** 4 of 6 view tabs (Linux off-chain, Linux on-chain, Windows off-chain, Windows on-chain) are completely empty shells with zero content. Users who select these tabs see blank pages. This is the most critical issue in the quickstart section.

2. **Unresolved Danger flags visible to users:** The Docker off-chain and on-chain tabs contain 5 `<Danger>` banners that render as red warning boxes to production users: "fix me", "Fix me (onchain nicer)", "Fix code formatting", "Needs Review", "Needs edit, better explanation & format".

3. **Universal frontmatter gaps:** Every page is missing `complexity` and `lifecycleStage`. Many use `PageType` (capital P) instead of `pageType`.

4. **macSupport.mdx is a WIP placeholder** with zero content beyond a warning banner.

5. **Title typos:** "Linu/MacOS" in both Linux view tab files (missing 'x').

6. **Informal voice:** "Let's Go(-Livepeer) !" heading and "who's got time for all that manual work?!" description violate entity-led standards.

7. **TODO blocks:** Present in AI-prompt.mdx, gateway-setup.mdx - must be resolved.

## Recommendations

1. **P0:** Populate or disable the 4 empty view tabs - users see blank content
2. **P0:** Remove or resolve all visible `<Danger>` flags before production
3. **P1:** Fill macSupport.mdx with actual macOS limitation content
4. **P1:** Fix "Linu/MacOS" typos in title fields
5. **P2:** Add `complexity` and `lifecycleStage` to all frontmatter
6. **P2:** Normalise `PageType` to `pageType` across all files
7. **P2:** Rewrite informal headings and descriptions to entity-led voice
