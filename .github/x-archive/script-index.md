# .github Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `.github/scripts/fetch-discord-announcements.js` | Fetches Discord announcements for product and shared community feeds, writing per-product outputs plus the shared social feed module under snippets/data/social-feeds/. | `node .github/scripts/fetch-discord-announcements.js` | docs |
| `.github/scripts/fetch-forum-data.js` | Fetches latest topics and posts from Livepeer Forum API, writes to snippets/data/social-feeds/ | `node .github/scripts/fetch-forum-data.js [flags]` | docs |
| `.github/scripts/fetch-ghost-blog-data.js` | Fetches Livepeer blog posts via public RSS feed and writes the shared social feed module under snippets/data/social-feeds/. | `node .github/scripts/fetch-ghost-blog-data.js` | docs |
| `.github/scripts/fetch-github-discussions.js` | Fetches GitHub Discussions for configured solutions and writes per-solution discussion data modules under snippets/data/social-feed-solutions/. | `node .github/scripts/fetch-github-discussions.js` | docs |
| `.github/scripts/fetch-github-releases.js` | Fetches GitHub Releases for configured solutions and writes per-solution release data modules under snippets/data/social-feed-solutions/. | `node .github/scripts/fetch-github-releases.js` | docs |
| `.github/scripts/fetch-rss-blog-data.js` | Fetches product RSS feeds from config and writes per-solution blog data modules under snippets/data/social-feed-solutions/. | `node .github/scripts/fetch-rss-blog-data.js` | docs |
| `.github/scripts/fetch-youtube-data.js` | Fetches video data from YouTube Data API, writes to snippets/data/social-feeds/ | `node .github/scripts/fetch-youtube-data.js [flags]` | docs |
| `.github/scripts/project-showcase-sync.js` | Fetches project showcase data from external source, writes to snippets/data/showcase-feed/ | `node .github/scripts/project-showcase-sync.js [flags]` | docs |
| `.github/scripts/update-livepeer-release.js` | Fetches or accepts the latest go-livepeer release tag and writes the canonical release data module. | `node .github/scripts/update-livepeer-release.js [--version <tag>]` | docs |
{/* SCRIPT-INDEX:END */}
