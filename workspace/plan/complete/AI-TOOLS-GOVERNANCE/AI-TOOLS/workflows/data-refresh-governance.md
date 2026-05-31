# Workflow Audit Draft: Data Refresh Governance

- Source path: `.github/workflows/data-refresh-governance.yml`
- Workflow family: `data-refresh`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `core-shipping`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `data-refresh-governance`

## Summary

Data Refresh Governance runs on workflow_call, workflow_dispatch and primarily produces repository commits or branch updates.

## Recommended Engineering Action

Keep this as the canonical reusable workflow for the data-refresh family and collapse future scripted refresh changes into this file instead of duplicating logic.

## Dependencies

- .github/scripts/fetch-discord-announcements.js
- .github/scripts/fetch-forum-data.js
- .github/scripts/fetch-ghost-blog-data.js
- .github/scripts/fetch-github-discussions.js
- .github/scripts/fetch-github-releases.js
- .github/scripts/fetch-rss-blog-data.js
- .github/scripts/fetch-youtube-data.js
- .github/scripts/update-livepeer-release.js
- action:actions/checkout@v4
- action:actions/setup-node@v4
- secret:DISCORD_BOT_TOKEN
- secret:GITHUB_TOKEN
- secret:YOUTUBE_API_KEY
- snippets/data/globals/latestRelease.jsx
- snippets/data/social-feed-solutions
- snippets/data/social-feed-solutions/
- snippets/data/social-feeds/discordAnnouncementsData.jsx
- snippets/data/social-feeds/forumData.jsx
- snippets/data/social-feeds/ghostBlogData.jsx
- snippets/data/social-feeds/youtubeData.jsx

## Dependants

- dispatcher:review-fix
- workflow:.github/workflows/update-discord-data.yml
- workflow:.github/workflows/update-forum-data.yml
- workflow:.github/workflows/update-ghost-blog-data.yml
- workflow:.github/workflows/update-github-data.yml
- workflow:.github/workflows/update-livepeer-release.yml
- workflow:.github/workflows/update-rss-blog-data.yml
- workflow:.github/workflows/update-youtube-data.yml

## Frailty Notes

- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- Legacy family members should remain thin wrappers only until they can be retired safely.
- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This belongs to a repeating data-refresh pattern and should not stay as an uncoordinated top-level workflow forever.
- This is the consolidated reusable source for the scripted data-refresh family.
