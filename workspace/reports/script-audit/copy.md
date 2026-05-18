# SME Audit: `copy` concern

> 11 scripts | Generated 2026-05-17
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## integrator (11)

### niche: `* @purpose` (1)

#### `studio-docs-migration.js`

- **Path:** `operations/scripts/integrators/content/studio-docs-migration.js`
- **Purpose:** * @description Migrates livepeer-studio subfolder path references after moving
- **Description:** Migrates livepeer-studio subfolder path references after moving
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `*/`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `changelogs` (1)

#### `generate-changelog.js`

- **Path:** `operations/scripts/integrators/copy/changelogs/generate-changelog.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Unified changelog generator for all changelog targets (solutions, contracts, resources).
- **Workflow callers:** `integrator-copy-update-changelogs.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** config → GitHub/GitLab REST API → [LLM optional] → [on-chain verify optional] → changelog.mdx
- **Usage:** `CHANGELOG_KEY=contracts node .github/scripts/generate-changelog.js [--dry-run] [--enhance] [--contract]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `showcase` (1)

#### `project-showcase-sync.js`

- **Path:** `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches project showcase data from external source, writes to snippets/data/showcase-feed/
- **Workflow callers:** `integrator-copy-update-showcase-submissions.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node .github/scripts/project-showcase-sync.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `social-feeds` (7)

#### `fetch-discord-announcements.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches Discord announcements for product and shared community feeds, writing per-product outputs plus the shared social feed module under snippets/data/social-feeds/.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** config → Discord API → snippets/data/social-feed-solutions/{product}/discordData.jsx
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-forum-data.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches latest topics and posts from Livepeer Forum API, writes to snippets/data/social-feeds/
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-ghost-blog-data.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches Livepeer blog posts via public RSS feed and writes the shared social feed module under snippets/data/social-feeds/.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** RSS feed → snippets/data/social-feeds/ghostBlogData.jsx
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-github-discussions.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-github-discussions.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches GitHub Discussions for configured solutions and writes per-solution discussion data modules under snippets/data/social-feed-solutions/.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** config → GitHub GraphQL API → snippets/data/social-feed-solutions/{product}/githubDiscussionsData.jsx
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-github-discussions.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-github-releases.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-github-releases.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches GitHub Releases for configured solutions and writes per-solution release data modules under snippets/data/social-feed-solutions/.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** config → GitHub REST API → snippets/data/social-feed-solutions/{product}/githubReleasesData.jsx
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-github-releases.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-rss-blog-data.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches product RSS feeds from config and writes per-solution blog data modules under snippets/data/social-feed-solutions/.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** config → RSS feed → snippets/data/social-feed-solutions/{product}/blogData.jsx
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `fetch-youtube-data.js`

- **Path:** `operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Fetches video data from YouTube Data API, writes to snippets/data/social-feeds/
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `translation` (1)

#### `frontmatter.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/frontmatter.js`
- **Purpose:** feature:translation
- **Description:** Frontmatter parser/writer for translation surfaces.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** write
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/frontmatter.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (2)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/integrators/content/language-translation/lib/frontmatter.js` — feature:translation
- `operations/scripts/integrators/content/studio-docs-migration.js` — * @description Migrates livepeer-studio subfolder path references after moving
