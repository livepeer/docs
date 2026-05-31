# Workflow Audit Draft: Pipeline Freshness Monitor

- Source path: `.github/workflows/freshness-monitor.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `medium`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Pipeline Freshness Monitor runs on schedule, workflow_dispatch and primarily produces github step summary.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:review-fix` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- snippets/data/globals/latestRelease.jsx
- snippets/data/showcase-feed/showcaseData.jsx
- snippets/data/social-feeds/discordAnnouncementsData.jsx
- snippets/data/social-feeds/forumData.jsx
- snippets/data/social-feeds/ghostBlogData.jsx
- snippets/data/social-feeds/lumaEventsData.jsx
- snippets/data/social-feeds/youtubeData.jsx

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
