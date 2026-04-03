# .github Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `.github/scripts/fetch-contract-addresses.js` | Fetches and verifies Livepeer contract-address data, then generates the contracts datasets and canonical page inputs consumed by docs-v2. | `node .github/scripts/fetch-contract-addresses.js [--dry-run] [--check] [--skip-verify]` | docs |
| `.github/scripts/fetch-discord-announcements.js` | Fetches Discord announcement feeds and writes the generated snippets/automations datasets consumed by docs surfaces. | `node .github/scripts/fetch-discord-announcements.js` | docs |
| `.github/scripts/fetch-forum-data.js` | Fetches latest topics and posts from Livepeer Forum API, writes to snippets/automations/forum/ | `node .github/scripts/fetch-forum-data.js [flags]` | docs |
| `.github/scripts/fetch-ghost-blog-data.js` | Fetches the Livepeer Ghost RSS feed and writes the generated blog snippets consumed by docs surfaces. | `node .github/scripts/fetch-ghost-blog-data.js` | docs |
| `.github/scripts/fetch-github-discussions.js` | Fetches GitHub Discussions data and writes the generated snippets/automations datasets consumed by docs surfaces. | `node .github/scripts/fetch-github-discussions.js` | docs |
| `.github/scripts/fetch-github-releases.js` | Fetches GitHub release data and writes the generated snippets/automations datasets consumed by docs surfaces. | `node .github/scripts/fetch-github-releases.js` | docs |
| `.github/scripts/fetch-rss-blog-data.js` | Fetches RSS and blog feeds, then writes the generated snippets/automations datasets consumed by docs surfaces. | `node .github/scripts/fetch-rss-blog-data.js` | docs |
| `.github/scripts/fetch-youtube-data.js` | Fetches video data from YouTube Data API, writes to snippets/automations/youtube/ | `node .github/scripts/fetch-youtube-data.js [flags]` | docs |
| `.github/scripts/generate-changelog.js` | Generates managed changelog pages from upstream release and commit data for solutions, contracts, and resources surfaces. | `CHANGELOG_KEY=contracts node .github/scripts/generate-changelog.js [--dry-run] [--enhance] [--contract] CHANGELOG_CATEGORY=solutions node .github/scripts/generate-changelog.js [--dry-run] [--enhance] PRODUCT_KEY=daydream node .github/scripts/generate-changelog.js [--dry-run] [--enhance]` | docs |
| `.github/scripts/project-showcase-sync.js` | Fetches project showcase data from external source, writes to snippets/automations/showcase/ | `node .github/scripts/project-showcase-sync.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
