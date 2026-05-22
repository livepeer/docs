# `snippets/automations` + `snippets/data` Audit

Audit date: 2026-04-05

Scope:
- Every tracked file under `snippets/automations`
- Every tracked file under `snippets/data`

Method:
- Inventory from `rg --files`
- Trace current repo references with `rg`
- Separate live `v2/` consumers from docs-only, test-only, report-only, and no-current-consumer files
- Trace creator scripts/workflows where the repo names them explicitly

Totals:
- `snippets/automations`: 48 files
- `snippets/data`: 42 files
- Combined: 90 files

Risk legend:
- `High`: exact path is hardcoded by live pages, generators, workflows, or validators
- `Medium`: exact path is referenced by docs, tests, or supporting tooling but not current runtime
- `Low`: docs-only or no current consumer found

## Executive Summary

- The live, path-sensitive automation outputs are concentrated in:
  `forum/forumData.jsx`, `blog/ghostBlogData.jsx`, `youtube/youtubeData.jsx`, `discord/discordAnnouncementsData.jsx`, `luma/lumaEventsData.jsx`, `showcase/showcaseData.jsx`, `globals/globals.jsx`, and the `contract-addresses/*` bundle.
- All `snippets/data/*/hrefs.jsx` files are generator-owned outputs from `operations/scripts/audits/content/health/page-links-audit.js --write-links`. They are not dead by default even when page imports are absent.
- There is a governance conflict in current repo state: `snippets/automations/scripts/n8n/*.json` and `snippets/automations/youtube/filterVideos.js` live under `snippets/`, while current structure rules say scripts should live under `operations/scripts/`. Moving them is plausible long-term, but not safe as a simple archive/move because docs, audits, and some automation instructions hardcode the current paths.
- Several solution-community feed files are generated but not consumed by any current live page: every `githubDiscussionsData.jsx`, every `githubReleasesData.jsx`, `embody/youtubeDataStatic.jsx`, and `livepeer-studio/blogData.jsx`.
- `snippets/data/contract-addresses/view-model.js` is a byte-for-byte duplicate of `view-model.jsx`.
- `snippets/data/gateways/version.jsx` appears superseded by `snippets/automations/globals/globals.jsx` for current live pages.
- `snippets/data/variables/*.mdx` contains one live home-page pair, one stale TODO file (`variables/home.mdx`), and eight empty placeholders.

## `snippets/automations`

### Top-level and core automation files

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/automations/README.mdx` | Docs | Manual docs page | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`; archived locale docs | `Medium` because docs link to this exact path |
| `snippets/automations/automations-catalog.mdx` | Docs-only inventory | Manual | No current consumer found outside inventory/review surfaces | `Low`; archive-safe after docs cleanup |
| `snippets/automations/script-index.md` | Governance inventory | Governance-maintained script index | `tools/lib/script-governance-config.js`; script-audit/report surfaces | `Medium` because tooling points to exact path |
| `snippets/data/social-feeds/ghostBlogData.jsx` | Live generated output | `.github/workflows/data-refresh-governance.yml` (`ghost-blog`) -> `.github/scripts/fetch-ghost-blog-data.js` | `v2/home/trending.mdx`; `v2/community/connect/trending-topics.mdx`; docs workflow guide | `High`; live imports and freshness tracking |
| `snippets/data/social-feeds/forumData.jsx` | Live generated output | `.github/workflows/data-refresh-governance.yml` (`forum`) -> `.github/scripts/fetch-forum-data.js` | `v2/home/trending.mdx`; `v2/community/connect/trending-topics.mdx`; `v2/community/community/livepeer-latest-topics.mdx` | `High`; live imports and freshness tracking |
| `snippets/automations/forum/Hero_Livepeer_Forum.png` | Live component asset | Manual asset | `snippets/components/integrators/blog/BlogCards.jsx`; therefore current community/home feed layouts | `High`; component hardcodes this asset path |
| `snippets/data/social-feeds/youtubeData.jsx` | Live generated output | `.github/workflows/data-refresh-governance.yml` (`youtube`) -> `.github/scripts/fetch-youtube-data.js` | `v2/home/trending.mdx`; `v2/community/connect/trending-topics.mdx`; docs workflow guide | `High`; live imports and freshness tracking |
| `snippets/automations/youtube/filterVideos.js` | Misplaced script, no live consumer found | Manual script | Script index and audit docs only | `Medium`; current path is referenced, but structurally this belongs under `operations/scripts/` |
| `snippets/data/social-feeds/discordAnnouncementsData.jsx` | Live generated output | `.github/workflows/data-refresh-governance.yml` (`discord`) -> `.github/scripts/fetch-discord-announcements.js` using `operations/scripts/config/product-social-config.json` globals | `v2/home/trending.mdx`; `v2/community/connect/trending-topics.mdx`; `v2/solutions/daydream/community.mdx`; `v2/solutions/livepeer-studio/community.mdx` | `High`; live imports and workflow docs |
| `snippets/automations/discord/Discord_Announce_to_Mintlify.json` | Orphan/legacy workflow copy | Manual or old n8n export | No current consumer found; root-level duplicate-like asset, not identical to the `scripts/n8n` file | `Low`; likely archive candidate after external-owner check |
| `snippets/automations/globals/globals.jsx` | Canonical live release-state module | `.github/workflows/update-livepeer-release.yml` -> `.github/workflows/data-refresh-governance.yml` (`livepeer-release`) | `v2/gateways/quickstart/gateway-setup.mdx`; `v2/gateways/quickstart/views/linux/linuxOffChainTab.mdx`; `v2/gateways/setup/install/linux-install.mdx`; `v2/gateways/setup/install/windows-install.mdx` | `High`; current live gateways pages import this exact file |
| `snippets/automations/globals/globals.mdx` | Thin wrapper, not canonical | Manual wrapper re-export | Archived/workspace docs; `freshness-monitor.yml` still checks this path instead of `.jsx` | `Medium`; not a live current-page dependency, but docs/workflows still mention it |
| `snippets/automations/globals/README.mdx` | Docs-only | Manual | Report surfaces only | `Low` |
| `snippets/data/social-feeds/lumaEventsData.jsx` | Live generated output | External n8n asset `snippets/automations/scripts/n8n/Luma-To-Mintlify.json` | `v2/community/connect/events-and-streams.mdx` | `High`; current live page import and freshness tracking |
| `snippets/automations/showcase/showcaseData.jsx` | Live generated output | `.github/workflows/project-showcase-sync.yml` -> `.github/scripts/project-showcase-sync.js` | `v2/home/solutions/showcase.mdx`; `snippets/composables/pages/home/project-showcase.mdx` | `High`; live imports and workflow hardcoding |
| `snippets/automations/showcase/README.md` | Docs/source notes | Manual | Planning/report surfaces only | `Low` |
| `snippets/automations/showcase/Livepeer_Ecosystem_Descriptions.pdf` | Source asset | Manual | Planning/report surfaces only | `Low` |

### Repo-tracked n8n workflow assets

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/automations/scripts/n8n/Discord-Issue-Intake.json` | Active external dependency | Manual n8n export aligned with `.github/workflows/discord-issue-intake.yml` | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`; issue-intake skill docs | `High`; workflow docs and schema rollout instructions hardcode this path |
| `snippets/automations/scripts/n8n/Discord_Announce_to_Mintlify.json` | Active external dependency | Manual n8n export | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`; `docs-guide/features/automations.mdx` | `High`; this is the documented canonical Discord n8n asset |
| `snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json` | Superseded/archival workflow asset | Manual n8n export | Freshness/performance report surfaces only | `Medium`; safe to archive only after docs confirm GitHub Actions fully superseded it |
| `snippets/automations/scripts/n8n/Ghost-to-Mintlify.json` | Superseded/archival workflow asset | Manual n8n export | Freshness/performance report surfaces only | `Medium`; same reason as forum asset |
| `snippets/automations/scripts/n8n/YouTube-To-Mintlify.json` | Superseded/archival workflow asset | Manual n8n export | Freshness/performance report surfaces only | `Medium`; same reason as forum asset |
| `snippets/automations/scripts/n8n/Luma-To-Mintlify.json` | Active external dependency | Manual n8n export | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`; skill templates | `High`; live docs treat this as active |
| `snippets/automations/scripts/n8n/project-showcase-application-workflow.json` | External workflow asset, docs/archive only | Manual n8n export | Archived readme/report surfaces | `Low` |
| `snippets/automations/scripts/n8n/Showcase_Project_Pipeline.json` | External workflow asset under active documentation | Manual n8n export | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`; `docs-guide/features/automations.mdx` | `Medium`; docs still point here, but GitHub Action is the in-repo canonical runtime |
| `snippets/automations/scripts/n8n/Showcase_To_Mintlify_Pipeline.json` | Older showcase workflow asset | Manual n8n export | Archived locale docs and report surfaces | `Low` to `Medium`; likely archive candidate after docs cleanup |
| `snippets/automations/scripts/n8n/mp4-to-gif.json` | Utility workflow asset | Manual n8n export | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx` | `Low`; docs-only |

### Solution-community feed files

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/social-feed-solutions/daydream/youtubeData.jsx` | Live generated output | `.github/scripts/fetch-youtube-data.js` via `product-social-config.json` | `v2/solutions/daydream/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/daydream/blogData.jsx` | Live generated output | `.github/scripts/fetch-rss-blog-data.js` via `product-social-config.json` | `v2/solutions/daydream/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/daydream/discordData.jsx` | Live generated output | `.github/scripts/fetch-discord-announcements.js` via `product-social-config.json` | `v2/solutions/daydream/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/daydream/githubDiscussionsData.jsx` | Unused generated data | `.github/scripts/fetch-github-discussions.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/daydream/githubReleasesData.jsx` | Unused generated data | `.github/scripts/fetch-github-releases.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/embody/youtubeData.jsx` | Live generated output | `.github/scripts/fetch-youtube-data.js` via `product-social-config.json` | `v2/solutions/embody/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/embody/discordData.jsx` | Live generated output | `.github/scripts/fetch-discord-announcements.js` via `product-social-config.json` | `v2/solutions/embody/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/embody/youtubeDataStatic.jsx` | Unused manual/static data | Manual curated fallback | No current live page consumer found | `Low`; archive candidate |
| `snippets/data/social-feed-solutions/embody/githubReleasesData.jsx` | Unused generated data | `.github/scripts/fetch-github-releases.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/frameworks/youtubeDataStatic.jsx` | Live manual/static data | Manual curated fallback | `v2/solutions/frameworks/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/frameworks/discordData.jsx` | Live generated output | `.github/scripts/fetch-discord-announcements.js` via `product-social-config.json` | `v2/solutions/frameworks/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/frameworks/githubDiscussionsData.jsx` | Unused generated data | `.github/scripts/fetch-github-discussions.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/frameworks/githubReleasesData.jsx` | Unused generated data | `.github/scripts/fetch-github-releases.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/livepeer-studio/youtubeData.jsx` | Live generated output | `.github/scripts/fetch-youtube-data.js` via `product-social-config.json` | `v2/solutions/livepeer-studio/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/livepeer-studio/youtubeDataStatic.jsx` | Live manual/static data | Manual/static fallback; page imports exact file | `v2/solutions/livepeer-studio/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/livepeer-studio/blogData.jsx` | Unused generated data | `.github/scripts/fetch-rss-blog-data.js` via `product-social-config.json` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/livepeer-studio/githubDiscussionsData.jsx` | Unused generated data | `.github/scripts/fetch-github-discussions.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/livepeer-studio/githubReleasesData.jsx` | Unused generated data | `.github/scripts/fetch-github-releases.js` | No current live page consumer found | `Low`; archive/deprecate candidate |
| `snippets/data/social-feed-solutions/streamplace/youtubeDataStatic.jsx` | Live manual/static data | Manual curated fallback | `v2/solutions/streamplace/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/streamplace/discordData.jsx` | Live generated output | `.github/scripts/fetch-discord-announcements.js` via `product-social-config.json` | `v2/solutions/streamplace/community.mdx` | `High`; live page import |
| `snippets/data/social-feed-solutions/streamplace/githubDiscussionsData.jsx` | Unused generated data | `.github/scripts/fetch-github-discussions.js` | No current live page consumer found | `Low`; archive/deprecate candidate |

## `snippets/data`

### Catalog/docs and root data modules

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/API/README.md` | Docs-only | Manual | No current consumer found outside inventory/report surfaces | `Low` |
| `snippets/data/data-catalog.mdx` | Docs-only inventory | Manual | No current consumer found outside review surfaces | `Low` |
| `snippets/data/variables.mdx` | Live page input | Manual | `v2/home/primer.mdx` | `High`; direct live page import |
| `snippets/data/gateways.jsx` | Likely stale/manual data module | Manual | No current live page import found; only docs inventory/example references | `Medium`; current path appears in docs and example comments, but live pages now use other surfaces |
| `snippets/data/reference-maps/icon-map.jsx` | Tooling data surface | Manual | `docs-guide/tooling/reference-maps/icon-map.mdx`; `operations/scripts/audits/content/reference/audit-icon-usage.js`; planning docs | `Medium`; audit/tooling hardcode this path |
| `snippets/data/changelogs/contractAddressesData.jsx` | Deprecated generated data | Historical contracts pipeline output | No current live page consumer found; tests explicitly guard against page imports from this deprecated path | `Low`; archive candidate after pipeline/docs cleanup |

### Gateway/reference/snapshot files

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/gateways/hrefs.jsx` | Generated audit artefact | `operations/scripts/audits/content/health/page-links-audit.js --write-links` | Audit/migration/report tooling; contains refs to snapshots, chainlist, contracts | `High`; generator writes exact path and tooling expects domain file layout |
| `snippets/data/gateways/configuration-flags.jsx` | Live page input | Manual | `v2/gateways/resources/reference/technical/configuration-flags.mdx` | `High`; direct live page import |
| `snippets/data/gateways/version.jsx` | Stale superseded module | Historical manual/GH-updated version file | No current live page import found; archived locale pages still import it | `Medium`; current live pages use `snippets/automations/globals/globals.jsx` instead |
| `snippets/data/gateways/notes.mdx` | Likely stale notes file | Manual | No current live direct consumer found from repo search | `Low`; archive candidate |
| `snippets/data/references/chainlist.jsx` | Live runtime component | Manual runtime fetch component | `v2/gateways/resources/reference/technical/arbitrum-rpc.mdx`; `v2/gateways/setup/requirements/on-chain setup/on-chain.mdx`; related gateway refs | `High`; direct live page import |
| `snippets/data/snapshots/coingecko-livepeer.json` | Live static companion snapshot | No in-repo writer directly tied by path; likely manual/companion artefact | `v2/gateways/resources/reference/technical/livepeer-exchanges.mdx`; `docs-guide/config/ai-companion-manifest.json` | `High`; live page link and AI companion manifest |
| `snippets/data/snapshots/coingecko-arbitrum.json` | Live static companion snapshot | No in-repo writer directly tied by path; likely manual/companion artefact | `v2/gateways/resources/reference/technical/arbitrum-exchanges.mdx`; `docs-guide/config/ai-companion-manifest.json` | `High`; live page link and AI companion manifest |

### Contract-addresses bundle

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/contract-addresses/contractAddressesData.json` | Canonical generated data output | `.github/workflows/update-contract-addresses.yml` -> `.github/scripts/fetch-contract-addresses.js` -> `operations/scripts/automations/content/data/contracts/pipeline.js` | AI companion manifest; tests; contract pipeline consumers | `High`; constants/workflows/tests hardcode this path |
| `snippets/data/contract-addresses/contractAddressesData.jsx` | Canonical generated JSX output | Same contracts pipeline as above | `v2/about/resources/blockchain-contracts.mdx`; `v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx`; canonical composable contract pages | `High`; direct live page imports and workflow hardcoding |
| `snippets/data/contract-addresses/blockchainContractsPageData.json` | Generated page companion output | Same contracts pipeline as above | `v2/about/livepeer-protocol/data/blockchain-contracts-addresses.js`; tests | `High`; page helper code and workflow constants hardcode this path |
| `snippets/data/contract-addresses/blockchainContractsPageData.jsx` | Generated page companion JSX output | Same contracts pipeline as above | `v2/about/livepeer-protocol/blockchain-contracts.mdx`; `snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx` | `High`; direct live page import |
| `snippets/data/contract-addresses/view-model.jsx` | Shared live adapter | Manual | `v2/about/livepeer-protocol/blockchain-contracts.mdx`; `v2/about/livepeer-protocol/data/blockchain-contracts-addresses.js`; `v2/about/livepeer-protocol/data/blockchain-contracts-links.js` | `High`; direct live imports |
| `snippets/data/contract-addresses/view-model.js` | Exact duplicate of `.jsx` | Manual duplicate | No current consumer found; `cmp` shows file is identical to `.jsx` | `Low`; remove/archive candidate |
| `snippets/data/contract-addresses/index.jsx` | Barrel export | Manual | Docs and index-style references only; no current live page import found | `Medium`; safe only after checking any external importers not covered by repo search |
| `snippets/data/contract-addresses/_health-checks.json` | Operational state output | Same contracts pipeline as above | Contracts workflow docs; sitemap/AI tooling; tests | `High`; constants and tooling hardcode this path |
| `snippets/data/contract-addresses/_branch-watch-state.json` | Operational state output | Same contracts pipeline as above | Contracts workflow docs and constants | `High`; constants and docs hardcode this path |
| `snippets/data/contract-addresses/research.md` | Notes/research file | Manual | Planning/recovery/session-log surfaces only | `Low` |

### Domain `hrefs.jsx` link maps

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/about/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | Report surfaces; contains current about refs including contracts data | `High`; generator-owned path |
| `snippets/data/community/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | Report surfaces; community feed/component dependency map | `High`; generator-owned path |
| `snippets/data/delegators/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | No confirmed downstream consumer found beyond generator-owned surface | `Medium`; still generator-owned |
| `snippets/data/developers/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | Media-audit/report surfaces | `Medium`; generator-owned |
| `snippets/data/home/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | `operations/scripts/automations/content/studio-docs-migration.js`; media-audit surfaces | `High`; migration tooling hardcodes this file |
| `snippets/data/internal/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | Media-audit/report surfaces | `Medium`; generator-owned |
| `snippets/data/orchestrators/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | Report surfaces only | `Medium`; generator-owned |
| `snippets/data/resources/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | `docs-guide/canonical/collation-data/Mintlify/mintlify-canonical-consumers.json`; `operations/tests/unit/check-mintlify-canonical-sync.test.js` | `High`; tests and canonical-sync inputs hardcode this file |
| `snippets/data/solutions/hrefs.jsx` | Generated audit artefact | `page-links-audit.js --write-links` | `operations/scripts/automations/content/studio-docs-migration.js`; solution-feed dependency map | `High`; migration tooling hardcodes this file |
| `snippets/data/unknown/hrefs.jsx` | Generated placeholder artefact | `page-links-audit.js --write-links` | No confirmed downstream consumer found | `Low`; archive candidate if generator scope is updated with it |

### Variable placeholders

| File | Status | Created / updated by | Current consumers | Move / archive risk |
|---|---|---|---|---|
| `snippets/data/variables/home.mdx` | Live page input with stale TODOs | Manual | `v2/home/primer.mdx` | `High`; direct live page import, but content needs repair |
| `snippets/data/variables/about.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/community.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/delegators.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/developers.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/gateways.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/orchestrators.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/pages.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |
| `snippets/data/variables/resources.mdx` | Empty placeholder | Manual | No current consumer found | `Low`; archive/remove candidate |

## Highest-Value Cleanup Candidates

1. Remove or formally deprecate unused solution GitHub feed files:
   `githubDiscussionsData.jsx` and `githubReleasesData.jsx` across `daydream`, `frameworks`, `livepeer-studio`, and `streamplace`, plus `embody/githubReleasesData.jsx`.
2. Remove or consolidate `snippets/data/contract-addresses/view-model.js` because it duplicates `view-model.jsx`.
3. Decide whether `snippets/data/gateways/version.jsx` should be deleted now that current live pages use `snippets/automations/globals/globals.jsx`.
4. Clean up the empty `snippets/data/variables/*.mdx` placeholders and repair `snippets/data/variables/home.mdx` TODO links.
5. Resolve the structural mismatch for `snippets/automations/scripts/n8n/*.json` and `snippets/automations/youtube/filterVideos.js`.
   This is not a simple move.
   It requires docs, audits, and tooling path updates in the same change.

## Highest-Risk Moves

- Any move of `contract-addresses/*`
- Any move of live automation outputs under `forum/`, `blog/`, `youtube/`, `discord/`, `luma/`, `showcase/`, or `globals/`
- Any move of `snippets/data/*/hrefs.jsx`
- Any move of `snippets/data/snapshots/coingecko-*.json`

Those paths are currently embedded in live pages, generators, tests, or canonical manifests. They need a repo-wide propagation change, not an archive-only cleanup.
