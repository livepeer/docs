# Visual Verification Report

Generated: 2026-03-09 03:29:57 AEDT
Branch: docs-v2 (promoted from codex/788-e-01-archive-duplicate-scripts)
Base ref: docs-v2

## MDX Parse Fixes Applied

| File | Line | Issue | Fix |
|------|------|-------|-----|
| `v2/about/resources/blockchain-contracts.mdx` | ~175-180 | Target-branch parser error. A plain fenced address block inside `BondingManager` was malformed as ```` ``` ```` followed immediately by ```` ```mermaid ```` which left the surrounding accordion in an unparseable state. | Replaced the stray ```` ```mermaid ```` with the plain closing fence the address block required. |
| `v2/gateways/payments/payment-clearinghouse.mdx` | n/a | Prompt-reported parse error was not reproducible on this branch. `npx mintlify dev 2>&1 \| head -50` did not emit a file/line parser stack, so the file was validated directly with Mint's parser fallback and parsed clean. | No file change. Documented as not reproducible on current branch. |
| `v2/orchestrators/advanced-setup/hosting-models.mdx` | ~254-256 | Active MDX blocker. Mint parser reported the next `<StyledStep>` opening tag inside the preceding markdown list context, so the close/open step boundary was still being interpreted as part of the list item. | Moved the `</StyledStep>` / next `<StyledStep>` boundary out of the list context by unindenting the next `<StyledStep title="Expose capabilities via gateways">`. |

## Browser Test Results

| Test suite | Pages tested | Passed | Failed |
|-----------|-------------|--------|--------|
| `test-v2-pages.js` | 20 observed before preview dropped | 13 | 7 |
| `test-all-pages-browser.js` | 10 observed before preview dropped | 8 | 2 |

Browser harness notes:

- `tools/scripts/test-v2-pages.js` needed local compatibility fixes before it could produce meaningful results: shared Puppeteer launch args, `domcontentloaded` health check instead of a root `networkidle2` probe, replacement of removed `page.waitForTimeout`, and ignoring failed third-party telemetry beacons.
- `tools/scripts/test-all-pages-browser.js` needed the same health-check/launch fix plus a route fix to preserve the `v2/` prefix instead of incorrectly testing `/home/...`.
- Full JSON reports were not produced because `bash lpd dev -- --port 3000` repeatedly dropped the local preview during the long sweeps. The counts above are the actual observed partial totals before the preview listener disappeared.

## Spot-Check Results

| Page | Components verified | Renders correctly? | Notes |
|------|-------------------|-------------------|-------|
| `/v2/home/about-livepeer/vision` | `CustomDivider` | Yes | Divider rendered in the expected accent styling above the prev/next navigation area. Screenshot: `/tmp/visual-verification-20260309/home-custom-divider.png` |
| `/v2/developers/ai-inference-on-livepeer/overview` | `PreviewCallout` | Yes | Preview callout rendered with the expected accent styling, centered copy, and links. Screenshot: `/tmp/visual-verification-20260309/ai-preview-callout.png` |
| `/v2/community/livepeer-community/trending-topics` | `DiscordAnnouncements`, `YouTubeVideo` coverage | Yes | Discord announcements block rendered correctly and video content/cards appeared as expected. Screenshot: `/tmp/visual-verification-20260309/community-trending.png` |
| `/v2/gateways/references/livepeer-exchanges` | `CoinGeckoExchanges` | Yes | Exchange table rendered; white text remained readable against colored badges/cells. Screenshot: `/tmp/visual-verification-20260309/coingecko-exchanges.png` |
| `/v2/developers/portal` | `Portals` components | Yes | Hero section and portal card grid rendered correctly. Screenshot: `/tmp/visual-verification-20260309/developers-portal.png` |
| `/v2/resources/documentation-guide/component-library/display` | frame-mode headings (`H1-H6`) | Partial | Section and tab controls rendered, but after selecting the `Headings` tab the live example area appeared empty in the current preview. Screenshot: `/tmp/visual-verification-20260309/display-frame-headings-2.png` |
| `/v2/gateways/using-gateways/choosing-a-gateway` | `StyledTable` | Yes | Provider comparison table rendered with borders, headers, and cell content intact. Screenshot: `/tmp/visual-verification-20260309/choosing-gateway.png` |
| `/v2/resources/documentation-guide/component-library/overview` | `SearchTable` | Yes | Search input, category select, and lookup-table rows rendered correctly. Screenshot: `/tmp/visual-verification-20260309/overview-searchtable-live.png` |
| `/v2/home/solutions/showcase` | `ShowcaseCards` | Yes | Showcase search/filter controls and showcase card content rendered correctly. Screenshot: `/tmp/visual-verification-20260309/showcase.png` |

## Failed Pages (if any)

| Page | Error | Component involved | Likely cause |
|------|-------|-------------------|-------------|
| `/v2/home/get-started` | Returns HTTP 404 in browser probe and renders a page-not-found document. | Route/page generation | Routable entry appears to point to a missing page on the current branch. |
| `/v2/resources/documentation-guide/component-library/display` | `H1-H6` live example area appeared blank after selecting the `Headings` tab during manual verification. | frame-mode heading examples | Example content is not rendering into the active tab body in the current preview. |
| `http://localhost:3000` preview | Local Mint preview repeatedly dropped during long browser sweeps, preventing complete report generation from the two browser scripts. | Mint local preview process | Preview startup/runtime is unstable after the MDX blocker is cleared; this remains the blocker for full automated visual verification. |

## Verdict

- [ ] PASS — all pages render, no visual regressions
- [ ] PASS WITH NOTES — renders but minor differences noted
- [x] FAIL — pages crash or significant visual regressions
