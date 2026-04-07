# Pipeline Freshness Audit — 2026-03-09

## Baseline (Step 0)

- Commit: `1b1cdfc2`
- Date: `2026-03-09T10:18:20Z`

### Raw Baseline Output

```text
=========================================
PIPELINE FRESHNESS BASELINE
Date: 2026-03-09T10:18:20Z
Commit: 1b1cdfc2
=========================================

=== Pipeline Staleness ===
  snippets/automations/blog/ghostBlogData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/discord/discordAnnouncementsData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/forum/forumData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/luma/lumaEventsData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/showcase/showcaseData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/youtube/youtubeData.jsx: 2026-03-03 19:21:03 +1100 | 145h
  snippets/automations/globals/globals.mdx: 2026-03-03 19:21:03 +1100 | 145h

=== Freshness monitor workflow ===
DOES NOT EXIST

=== Dead pipeline file check ===
snippets/automations/showcase/showcaseData copy.jsx
snippets/automations/showcase/showcaseDataOld.jsx
(empty = none found)

=== n8n workflow JSONs ===
snippets/automations/scripts/n8n/Discord-Issue-Intake.json
snippets/automations/scripts/n8n/Discord_Announce_to_Mintlify.json
snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json
snippets/automations/scripts/n8n/Ghost-to-Mintlify.json
snippets/automations/scripts/n8n/Luma-To-Mintlify.json
snippets/automations/scripts/n8n/Project Showcase Application Workflow.json
snippets/automations/scripts/n8n/Showcase_Project_Pipeline.json
snippets/automations/scripts/n8n/Showcase_To_Mintlify_Pipeline.json
snippets/automations/scripts/n8n/YouTube-To-Mintlify.json
snippets/automations/scripts/n8n/mp4-to-gif.json
(empty = none found)

=== Pipeline workflows ===
-rw-r--r--  1 alisonhaire  staff  2272 Mar  9 21:18 .github/workflows/project-showcase-sync.yml
-rw-r--r--  1 alisonhaire  staff  2144 Mar  9 21:18 .github/workflows/update-blog-data.yml
-rw-r--r--  1 alisonhaire  staff  1168 Mar  9 21:18 .github/workflows/update-forum-data.yml
-rw-r--r--  1 alisonhaire  staff  1149 Mar  9 21:18 .github/workflows/update-ghost-blog-data.yml
-rw-r--r--  1 alisonhaire  staff  2387 Mar  9 21:18 .github/workflows/update-livepeer-release.yml
-rw-r--r--  1 alisonhaire  staff     0 Mar  9 21:18 .github/workflows/update-review-template.yml
-rw-r--r--  1 alisonhaire  staff  1588 Mar  9 21:18 .github/workflows/update-youtube-data.yml

=== Discord/Luma pipeline scripts ===
tools/scripts/snippets/luma-calendar.jsx
.github/workflows//discord-issue-intake.yml
(empty = no dedicated pipeline found)
```

### Staleness per Pipeline

| Data File | Last Commit | Hours Stale | Status | Generator | Workflow |
|---|---|---:|---|---|---|
| `ghostBlogData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | `.github/scripts/fetch-ghost-blog-data.js` | `update-ghost-blog-data.yml`; `update-blog-data.yml` (legacy overlap) |
| `discordAnnouncementsData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | not found | not found |
| `forumData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | `.github/scripts/fetch-forum-data.js` | `update-forum-data.yml`; `update-blog-data.yml` (legacy overlap) |
| `lumaEventsData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | not found (helper script exists at `tools/scripts/snippets/luma-calendar.jsx`) | not found |
| `showcaseData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | `.github/scripts/project-showcase-sync.js` | `project-showcase-sync.yml` plus active showcase n8n overlap |
| `youtubeData.jsx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | `.github/scripts/fetch-youtube-data.js` | `update-youtube-data.yml` |
| `globals.mdx` | `2026-03-03 19:21:03 +1100` | 145 | 🔴 | — | `update-livepeer-release.yml` |

## Dead Pipeline Files

| File | Referenced? | Action |
|---|---|---|
| `snippets/automations/showcase/showcaseData copy.jsx` | no | FOUND — unreferenced dead file, intentionally left out of this commit |
| `snippets/automations/showcase/showcaseDataOld.jsx` | no | FOUND — unreferenced dead file, intentionally left out of this commit |

## n8n Workflow Status

| n8n File | Equivalent GitHub Action? | Status | Notes |
|---|---|---|---|
| `Discord-Issue-Intake.json` | yes — `discord-issue-intake.yml` | `ACTIVE_N8N` | n8n remains the Discord interaction intake layer; GitHub Actions creates the issue. |
| `Discord_Announce_to_Mintlify.json` | no | `ACTIVE_N8N` | Only repo-tracked Discord announcements pipeline; schedule trigger present, hosting unknown. |
| `Forum-To-Mintlify-Latest-Topics.json` | yes — `update-forum-data.yml` | `SUPERSEDED` | Deprecated copy added to `tasks/staging/deprecated-n8n/`; JSON is `active: false`. |
| `Ghost-to-Mintlify.json` | yes — `update-ghost-blog-data.yml` | `SUPERSEDED` | Deprecated copy added to `tasks/staging/deprecated-n8n/`; JSON is `active: false`. |
| `Luma-To-Mintlify.json` | no | `ACTIVE_N8N` | n8n-only feed; JSON is `active: true`, but external hosting is undocumented. |
| `Project Showcase Application Workflow.json` | yes — `project-showcase-sync.yml` | `NEEDS_HUMAN_REVIEW` | `active: true`, writes showcase output, and overlaps with the GitHub Action. |
| `Showcase_Project_Pipeline.json` | yes — `project-showcase-sync.yml` | `NEEDS_HUMAN_REVIEW` | `active: true`, writes showcase output, and overlaps with the GitHub Action. |
| `Showcase_To_Mintlify_Pipeline.json` | yes — `project-showcase-sync.yml` | `NEEDS_HUMAN_REVIEW` | Placeholder GitHub paths indicate an older prototype, but the file was intentionally left unchanged in this commit. |
| `YouTube-To-Mintlify.json` | yes — `update-youtube-data.yml` | `SUPERSEDED` | Deprecated copy added to `tasks/staging/deprecated-n8n/`; JSON is `active: false`. |
| `mp4-to-gif.json` | no | `ACTIVE_N8N` | Utility workflow, not part of the content freshness surface. |

### Discord Pipeline

- Generator script: not found
- Workflow: not found
- n8n workflow: `snippets/automations/scripts/n8n/Discord_Announce_to_Mintlify.json`
- Trigger evidence in repo: `Schedule Trigger`
- Output: `snippets/automations/discord/discordAnnouncementsData.jsx`
- Status: `EXTERNAL_DEPENDENCY — n8n pipeline, trigger present in repo but hosting/activation unknown, needs Alison/Rick input`

### Luma Pipeline

- Generator script: not found
- Workflow: not found
- Helper script in repo: `tools/scripts/snippets/luma-calendar.jsx` (not wired as the authoritative generator)
- n8n workflow: `snippets/automations/scripts/n8n/Luma-To-Mintlify.json`
- Trigger evidence in repo: `Schedule Trigger`
- Output: `snippets/automations/luma/lumaEventsData.jsx`
- Status: `EXTERNAL_DEPENDENCY — n8n pipeline, trigger present in repo but hosting/activation unknown, needs Alison/Rick input`

## Freshness Monitor Workflow

- Created: `.github/workflows/freshness-monitor.yml`
- Schedule: daily at 08:00 UTC
- Manual trigger: `workflow_dispatch`
- Output: GitHub Actions step summary plus advisory `::warning::` annotation
- Registered in workflows index: yes — auto via `node tools/scripts/generate-docs-guide-indexes.js --write`

## globals.mdx Version Check

- Version in `globals.mdx`: `v0.7.7`
- Latest `go-livepeer` release: `v0.8.9`
- Latest release published at: `2026-01-07T13:56:05Z`
- Status: `VERSION_DRIFT`
- Action needed: Rick to verify the correct release and repair the updater before any automated version write

## Root-Cause Notes

- All seven monitored pipeline outputs were stale at `145h`, well beyond the 72-hour threshold.
- The repo had no freshness monitoring workflow, so pipeline drift produced no visible advisory signal.
- Two dead showcase data files are still present in the active automation directory even though they are unreferenced; they were intentionally left out of this commit.
- Four superseded n8n definitions were mixed into the active workflow directory, making it harder to determine the current source of truth.
- Three clearly inactive superseded n8n definitions received tracked archive copies in this commit; the original files and the showcase prototype were intentionally left unchanged.
- Discord announcements and Luma events still depend on external n8n ownership that cannot be fully resolved from repo state alone.
- Showcase automation has unresolved overlap between `project-showcase-sync.yml` and active n8n JSON assets, so source-of-truth ownership is still ambiguous.
- `snippets/automations/globals/globals.mdx` is behind the latest upstream release.
- `.github/workflows/update-livepeer-release.yml` still references the missing legacy path `snippets/automationData/globals/globals.mdx`, which likely prevents the current updater from repairing the observed version drift.
- English maintainer docs were updated in this task, but localized copies under `v2/es`, `v2/cn`, and `v2/fr` now need follow-up sync.

## Summary

- Dead files cleaned: `0` (showcase duplicates intentionally left out of this commit)
- n8n workflows assessed: `10`
- Freshness monitor created: `yes`
- Pipelines with no automation found: `none in repo structure, but Discord and Luma rely on unresolved external n8n ownership`
- Human actions required:
  - confirm the external n8n hosting and activation status for Discord announcements and Luma events
  - decide whether the active showcase n8n workflows are still authoritative alongside `project-showcase-sync.yml`
  - repair and verify `update-livepeer-release.yml` before relying on automated globals version updates
  - retrigger stale content pipelines through GitHub Actions or external n8n after ownership is confirmed
  - sync the English maintainer-doc changes into `v2/es`, `v2/cn`, and `v2/fr`
