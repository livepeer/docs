# Automations Restructure Plan

> **Status**: Not started
> **Parent task**: SCRIPT-GOVERNANCE Task 15c
> **Branch**: `docs-v2-dev` (or new branch — TBD)
> **Constraint**: n8n path updates must be coordinated same day as repo moves.

---

## Goal

Reorganise `snippets/automations/` from a flat mix of data files, scripts,
assets, and n8n JSONs into semantically clear groups with no misplaced files.

## Current state

```
snippets/automations/
  README.mdx
  script-index.md
  blog/ghostBlogData.jsx
  discord/discordAnnouncementsData.jsx
  forum/Hero_Livepeer_Forum.png          ← asset in data folder
  forum/forumData.jsx
  globals/globals.jsx                    ← legacy duplicate
  globals/globals.mdx                    ← active (written by GHA)
  globals/README.mdx
  luma/lumaEventsData.jsx                ← static, no active pipeline
  scripts/n8n/*.json                     ← not scripts; wrong location
  showcase/Livepeer_Ecosystem_Descriptions.pdf  ← PDF in snippets
  showcase/README.md
  showcase/showcaseData.jsx
  solutions/daydream/{blogData, discordData, githubDiscussionsData, githubReleasesData, youtubeData}
  solutions/embody/{discordData, githubReleasesData}
  solutions/frameworks/{discordData, githubDiscussionsData, githubReleasesData}
  solutions/livepeer-studio/{githubDiscussionsData, githubReleasesData, youtubeData}
  solutions/streamplace/{discordData, githubDiscussionsData}
  youtube/filterVideos.js                ← script in snippets
  youtube/youtubeData.jsx
```

## Target state

```
snippets/automations/
  socials-data/
    blog/ghostBlogData.jsx
    discord/discordAnnouncementsData.jsx
    forum/forumData.jsx
    luma/lumaEventsData.jsx
    youtube/youtubeData.jsx
  showcase-data/
    showcaseData.jsx
    README.md
  product-data/
    daydream/...
    embody/...
    frameworks/...
    livepeer-studio/...
    streamplace/...
  globals/
    globals.mdx                          ← keep; remove globals.jsx
    README.mdx
```

Files moving OUT of snippets/automations:
- `scripts/n8n/*.json` → already being moved to `workspace/plan/active/SCRIPT-GOVERNANCE/n8n/`
- `youtube/filterVideos.js` → `.github/scripts/` (GHA helper script)
- `forum/Hero_Livepeer_Forum.png` → `snippets/assets/domain/` (TBD exact path)
- `showcase/Livepeer_Ecosystem_Descriptions.pdf` → `snippets/assets/` or `workspace/`

---

## Dependency map

### MDX pages importing from `snippets/automations/` (live, non-archived)

| Page | Current import path | New import path |
|---|---|---|
| `v2/home/trending.mdx` | `automations/discord/discordAnnouncementsData` | `automations/socials-data/discord/discordAnnouncementsData` |
| `v2/community/livepeer-community/trending-topics.mdx` | `automations/discord/...`, `automations/youtube/...`, `automations/forum/...`, `automations/blog/...` | all → `automations/socials-data/...` |
| `v2/community/livepeer-community/livepeer-latest-topics.mdx` | `automations/forum/forumData` | `automations/socials-data/forum/forumData` |
| `v2/community/livepeer-connect/events-and-community-streams.mdx` | `automations/luma/lumaEventsData` | `automations/socials-data/luma/lumaEventsData` |
| `v2/home/solutions/showcase.mdx` | `automations/showcase/showcaseData` | `automations/showcase-data/showcaseData` |
| `v2/solutions/daydream/community.mdx` | `automations/solutions/daydream/...` | `automations/product-data/daydream/...` |
| `v2/solutions/livepeer-studio/community.mdx` | `automations/discord/discordAnnouncementsData`, `automations/solutions/livepeer-studio/...` | `socials-data/discord/...`, `product-data/livepeer-studio/...` |

### GHA workflows writing to `snippets/automations/` (must update filePath + git add)

| Workflow | Current path | New path |
|---|---|---|
| `update-ghost-blog-data.yml` | `snippets/automations/blog/ghostBlogData.jsx` | `snippets/automations/socials-data/blog/ghostBlogData.jsx` |
| `update-forum-data.yml` | `snippets/automations/forum/forumData.jsx` | `snippets/automations/socials-data/forum/forumData.jsx` |
| `update-youtube-data.yml` | `snippets/automations/youtube/youtubeData.jsx` | `snippets/automations/socials-data/youtube/youtubeData.jsx` |
| `update-discord-data.yml` | `snippets/automations/**/discordData.jsx` | `snippets/automations/socials-data/discord/discordAnnouncementsData.jsx` + `snippets/automations/product-data/**/discordData.jsx` |
| `update-livepeer-release.yml` | `snippets/automations/globals/globals.mdx` | unchanged — globals stays |
| `update-github-data.yml` | `snippets/automations/solutions/` | `snippets/automations/product-data/` |
| `project-showcase-sync.yml` | `snippets/automations/showcase/showcaseData.jsx` | `snippets/automations/showcase-data/showcaseData.jsx` |

### GHA fetch scripts with hardcoded output paths (must update)

| Script | Hardcoded path | New path |
|---|---|---|
| `fetch-ghost-blog-data.js` | `snippets/automations/blog/ghostBlogData.jsx` | `snippets/automations/socials-data/blog/ghostBlogData.jsx` |
| `fetch-forum-data.js` | `snippets/automations/forum/forumData.jsx` | `snippets/automations/socials-data/forum/forumData.jsx` |
| `fetch-discord-announcements.js` | `snippets/automations/solutions/${key}/discordData.jsx` + (globals) `snippets/automations/discord/discordAnnouncementsData.jsx` | `snippets/automations/product-data/${key}/discordData.jsx` + `snippets/automations/socials-data/discord/discordAnnouncementsData.jsx` |
| `fetch-youtube-data.js` | product: `snippets/automations/solutions/${key}/youtubeData.jsx` | `snippets/automations/product-data/${key}/youtubeData.jsx` |
| `fetch-github-discussions.js` | `snippets/automations/solutions/${key}/githubDiscussionsData.jsx` | `snippets/automations/product-data/${key}/githubDiscussionsData.jsx` |
| `fetch-github-releases.js` | `snippets/automations/solutions/${key}/githubReleasesData.jsx` | `snippets/automations/product-data/${key}/githubReleasesData.jsx` |
| `fetch-rss-blog-data.js` | `snippets/automations/solutions/${key}/blogData.jsx` | `snippets/automations/product-data/${key}/blogData.jsx` |
| `project-showcase-sync.js` | `snippets/automations/showcase/showcaseData.jsx` | `snippets/automations/showcase-data/showcaseData.jsx` |

### n8n workflows with hardcoded paths (update in n8n UI — same day)

| n8n workflow | Current path | New path |
|---|---|---|
| `Discord_Announce_to_Mintlify` | `snippets/automations/discord/discordAnnouncementsData.jsx` | `snippets/automations/socials-data/discord/discordAnnouncementsData.jsx` |
| `Forum-To-Mintlify-Latest-Topics` | `snippets/automations/forum/forumData.jsx` | `snippets/automations/socials-data/forum/forumData.jsx` |
| `Ghost-to-Mintlify` | `snippets/automations/blog/ghostBlogData.jsx` | `snippets/automations/socials-data/blog/ghostBlogData.jsx` |
| `Youtube to Mintlify` | `snippets/automations/youtube/youtubeData.jsx` | `snippets/automations/socials-data/youtube/youtubeData.jsx` |

### Other files to check

- `.mintignore` — has `/snippets/automations/showcase/README.md` and similar; update to new paths
- `snippets/automations/README.mdx` — update internal links
- `snippets/automations/script-index.md` — update all path references
- `tools/config/v2-internal-report-pages.js` — check for any automations path references
- `docs-guide/` catalog files — any auto-generated refs to automations paths

---

## Execution order

> Each step is a separate commit. Do not bundle moves with reference updates.

### Step 1 — Update all writers first (GHA scripts + workflows)
Update hardcoded output paths in all 8 fetch scripts and 7 workflows to new paths.
Commit. **Files not moved yet** — writers now point to new locations.

### Step 2 — Update all MDX page imports
Update all 7 live MDX pages to new import paths.
Commit.

### Step 3 — `git mv` all subfolders atomically
```
git mv snippets/automations/blog snippets/automations/socials-data/blog
git mv snippets/automations/discord snippets/automations/socials-data/discord
git mv snippets/automations/forum snippets/automations/socials-data/forum
git mv snippets/automations/luma snippets/automations/socials-data/luma
git mv snippets/automations/youtube/youtubeData.jsx snippets/automations/socials-data/youtube/youtubeData.jsx
git mv snippets/automations/showcase snippets/automations/showcase-data
git mv snippets/automations/solutions snippets/automations/product-data
```
Commit.

### Step 4 — Move misplaced files
```
git mv snippets/automations/youtube/filterVideos.js .github/scripts/filterVideos.js
git mv snippets/automations/forum/Hero_Livepeer_Forum.png snippets/assets/...
git mv snippets/automations/showcase/Livepeer_Ecosystem_Descriptions.pdf workspace/...
```
(n8n JSONs in scripts/ are already being handled by SCRIPT-GOVERNANCE plan)
Commit.

### Step 5 — Remove globals.jsx duplicate
Confirm no live imports of `globals.jsx`, then `git rm`.
Commit.

### Step 6 — Update ancillary references
`.mintignore`, `README.mdx`, `script-index.md`, any catalog references.
Commit.

### Step 7 — n8n updates (coordinate same day as Step 3)
Update the 4 n8n workflow `filePath` values in n8n UI.
**This is a manual out-of-repo step** — must happen same day as Step 3 to prevent n8n writing to old paths after the move.

### Step 8 — Tests + validation
```
npm test --prefix operations/tests
node operations/scripts/validators/content/structure/validate-imports.js
```
Fix any failures.

### Step 9 — CHECKPOINT → merge back

---

## Risks

| Risk | Mitigation |
|---|---|
| n8n writes to old path after repo move | Do Step 7 same day as Step 3; Step 1 writes to new paths first so no data loss window |
| Mintlify build fails on missing import | Step 2 (MDX updates) happens before Step 3 (moves) — imports point to new paths, files then move to match |
| `git mv` loses file history | `git mv` preserves history; verify with `git log --follow` after |
| Missing reference somewhere | Step 8 test suite + import validator catches dangling refs |
