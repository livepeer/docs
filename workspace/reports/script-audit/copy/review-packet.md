# Script audit — copy concern

Generated 2026-05-24

**20 scripts** in this concern.

## dispatch (8)

### `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js`

**Niche:** canonical-sync

**Purpose:** Mintlify canonical-sync pipeline (PR check + scheduled drift + manual repair)

**Description:** Detects drift between archived Mintlify sources and active consumers; repairs via sync-mintlify-canonical-consumers.

**Scope:** Mintlify canonical archive + registered consumer files

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`, `operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/config/mintlify-canonical-sync.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-changelogs.js`

**Niche:** changelogs

**Purpose:** Pipeline dispatcher for changelogs (full lifecycle: detect → repair → verify → escalate)

**Description:** Pipeline for changelog regeneration from upstream repo releases.

**Scope:** snippets/data/changelogs/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/changelogs/generate-changelog.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`

**Niche:** meta

**Purpose:** check meta dispatcher: bundles copy pipelines in --mode pr

**Description:** PR meta for copy concern.

**Scope:** all copy pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `.github/workflows/dispatch-copy.yml`, `docs-guide/features/data-integrations.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`

**Niche:** meta

**Purpose:** repair meta dispatcher: bundles copy pipelines in --mode manual

**Description:** Manual repair meta for copy concern.

**Scope:** all copy pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-copy.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`

**Niche:** meta

**Purpose:** update meta dispatcher: bundles copy pipelines in --mode scheduled

**Description:** Scheduled meta for copy integrators.

**Scope:** all copy pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-copy.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js`

**Niche:** ownerless-language

**Purpose:** Pipeline for ownerless-repo language enforcement (no "we", "our", owner-dependent phrasing)

**Description:** Detects owner-dependent phrasing in v2 MDX; repairs via repair-ownerless-language with --verify.

**Scope:** v2 MDX pages

**Reads (2):** `tools/lib/governance/pipeline-mode`, `operations/scripts/remediators/content/style/repair-ownerless-language.js`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`, `operations/scripts/remediators/content/style/repair-ownerless-language.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-showcase.js`

**Niche:** showcase

**Purpose:** Pipeline dispatcher for showcase (full lifecycle: detect → repair → verify → escalate)

**Description:** Pipeline for project showcase data sync.

**Scope:** snippets/data/showcase/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`

**Niche:** social-feeds

**Purpose:** Pipeline dispatcher for social-feeds (full lifecycle: detect → repair → verify → escalate)

**Description:** Pipeline for scheduled social feed integration (Discord, Forum, Ghost, GitHub, RSS, YouTube). Matrix per-source under one dispatcher.

**Scope:** snippets/data/social-feeds/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js`, `operations/scripts/integrators/copy/social-feeds/fetch-github-releases.js`, `operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js`, `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (11)

### `operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js`

**Niche:** social-feeds

**Purpose:** Fetch Discord announcement channel posts for the shared Livepeer community feed and per-solution product feeds (daydream, embody, streamplace, etc.) — keeps Community + product pages current with the latest announcements

**Description:** Reads channel ID + bot token from env, hits Discord API for each configured solution, transforms messages into a JSX module per solution and a shared community module. Writes outputs to snippets/data/social-feed-solutions/{product}/discordData.jsx and snippets/data/social-feeds/discordAnnouncementsData.jsx.

**Scope:** Discord API (read-only) → snippets/data/social-feed-solutions/{product}/, snippets/data/social-feeds/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js`

**Niche:** social-feeds

**Purpose:** Fetch the latest Livepeer Forum topics via Discourse API and emit sorted exports (newest, most-replied, most-viewed) used by Community pages to render the live forum feed

**Description:** Polls the public Livepeer Forum Discourse API, extracts topic title, slug, category, reply count, view count, and last-activity timestamp. Writes multiple sorted JSX exports to snippets/data/social-feeds/forumData.jsx. Consumed by the social-feeds composable on Community pages. Supports --dry-run.

**Scope:** Livepeer Forum API (read-only) → snippets/data/social-feeds/forumData.jsx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js`

**Niche:** social-feeds

**Purpose:** Fetch Livepeer blog posts from the Ghost blog public RSS feed and emit a JSX module the Community pages render as the live blog feed

**Description:** Reads RSS XML from the public Livepeer Ghost blog endpoint, parses entries (title, link, pubDate, excerpt, author), writes a sorted JSX export to snippets/data/social-feeds/ghostBlogData.jsx. No auth required.

**Scope:** Livepeer Ghost RSS feed (read-only) → snippets/data/social-feeds/ghostBlogData.jsx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/config/product-social-config.json`, `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-github-discussions.js`

**Niche:** social-feeds

**Purpose:** Fetch GitHub Discussions per Livepeer solution repo (daydream, embody, streamplace, etc.) and emit per-solution JSX modules used to render Community / Q&A feeds on the product pages

**Description:** Reads solution → repo mapping from config, hits GitHub GraphQL API for the Discussions feed, transforms entries (title, body excerpt, author, category, replies, upvotes) into JSX exports. Writes per-solution outputs to snippets/data/social-feed-solutions/{product}/githubDiscussionsData.jsx. Requires GITHUB_TOKEN (anonymous works for public repos but is rate-limited).

**Scope:** GitHub GraphQL API (read-only) → snippets/data/social-feed-solutions/{product}/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-github-releases.js`

**Niche:** social-feeds

**Purpose:** Fetch GitHub Releases per Livepeer solution repo and emit per-solution JSX modules — supplies the "Latest releases" feed on each product's overview page (note: distinct from dispatch-changelogs which writes long-form changelog MDX pages)

**Description:** Reads solution → repo mapping from config, hits GitHub REST API for the Releases endpoint, transforms entries (tag, title, body excerpt, author, published date, prerelease flag) into JSX exports. Writes per-solution outputs to snippets/data/social-feed-solutions/{product}/githubReleasesData.jsx. Requires GITHUB_TOKEN.

**Scope:** GitHub REST API (read-only) → snippets/data/social-feed-solutions/{product}/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/repo-ops/config/repo-config-map.mdx`, `docs-guide/repo-ops/config/.env.example` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js`

**Niche:** social-feeds

**Purpose:** Fetch per-solution RSS blog feeds (daydream, embody, streamplace, etc. — each product has its own blog or Substack) and emit per-solution JSX modules used to render the product-specific blog feed on each overview page

**Description:** Reads solution → RSS URL mapping from config, parses each feed (title, link, pubDate, excerpt, author), transforms into JSX exports. Writes per-solution outputs to snippets/data/social-feed-solutions/{product}/blogData.jsx. Distinct from fetch-ghost-blog-data which handles only the main Livepeer Ghost blog.

**Scope:** Per-solution RSS feeds (read-only) → snippets/data/social-feed-solutions/{product}/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`, `docs-guide/repo-ops/config/repo-config-map.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js`

**Niche:** social-feeds

**Purpose:** Fetch the Livepeer YouTube channel video metadata (title, thumbnail, publish date, view count, duration) and emit a JSX module the Community pages render as the latest-videos feed

**Description:** Reads channel ID + API key from env, hits YouTube Data API v3 for the channel's uploads playlist, transforms entries into a sorted JSX export. Writes to snippets/data/social-feeds/youtubeData.jsx. Requires YOUTUBE_API_KEY.

**Scope:** YouTube Data API v3 (read-only) → snippets/data/social-feeds/youtubeData.jsx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`, `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/changelogs/generate-changelog.js`

**Niche:** changelogs

**Purpose:** Generate changelog MDX pages for every Livepeer solution (daydream, embody, streamplace, livepeer-studio), the contract repo, and the resources/changelog index by fetching GitHub Releases / Git tags and rendering Mintlify-format MDX

**Description:** Unified changelog generator driven by config key (CHANGELOG_KEY env var). Fetches releases from GitHub/GitLab REST API, optionally enhances entries via an LLM call, optionally verifies on-chain (for the contracts changelog), renders to v2/solutions/{product}/changelog.mdx or v2/resources/changelog/{section}.mdx. Pairs with dispatch-changelogs.js.

**Scope:** config → GitHub/GitLab REST API → v2/solutions/{product}/changelog.mdx, v2/resources/changelog/{section}.mdx

**Reads (2):** `operations/scripts/config/mdx-sanitise`, `operations/scripts/config/product-social-config.json`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/copy/dispatch-changelogs.js`, `.claude/references/pipelines/exemplars.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/config/mdx-sanitise.js`

**Niche:** social-feeds

**Purpose:** Shared library — sanitise raw external content (Discord messages, forum posts, RSS items, GitHub release bodies, YouTube descriptions) into safe MDX/JSX-embeddable strings, escape curly braces, strip dangerous JSX-like patterns, normalise whitespace

**Description:** Library used by all 6 social-feed integrators (fetch-forum-data, fetch-discord-announcements, fetch-ghost-blog-data, fetch-rss-blog-data, fetch-github-discussions, fetch-github-releases, fetch-youtube-data) to safely embed external content in the generated *.jsx data modules. Exports sanitiseForMdx, escapeForJsx, stripDangerousPatterns.

**Scope:** external content sources → safe MDX/JSX string output

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/frameworks/script-framework.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/config/mintlify-canonical-sync.js`

**Niche:** canonical-sync

**Purpose:** Shared library — validate Mintlify archived-source cleanup, list consumer references in v2/ that depend on the canonical Mintlify collation data, produce deterministic rewrite plans when canonical sources change

**Description:** Library imported by check-mintlify-canonical-sync.js (validator) and sync-mintlify-canonical-consumers.js (remediator). Exports listConsumers(), planRewrites(canonicalChanges), validateArchiveState(). Pairs with dispatch-canonical-sync.js as the shared logic layer.

**Scope:** docs-guide/canonical/collation-data/Mintlify/ → v2/ consumers

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js`, `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`, `operations/scripts/script-index.md`, `docs-guide/canonical/collation-data/Mintlify/index.md` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`

**Niche:** showcase

**Purpose:** Sync the Project Showcase data from the submission Google Sheet to snippets/data/showcase-feed/ — supports two modes: poll (process new submissions + pending review decisions) and dispatch (process one decision from a repository_dispatch payload)

**Description:** Reads pending submissions and review-decision rows from the configured Google Sheet, applies decisions (approve / reject / defer), writes the approved list to snippets/data/showcase-feed/showcaseData.jsx and showcaseDataPopulated.jsx. Consumed by snippets/composables/pages/home/project-showcase.mdx and snippets/composables/pages/showcase.mdx. Pairs with dispatch-showcase.js.

**Scope:** Google Sheets API (read/write decision rows) → snippets/data/showcase-feed/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/.env.example`, `operations/scripts/dispatch/content/copy/dispatch-showcase.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`, `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (1)

### `operations/scripts/remediators/content/style/repair-ownerless-language.js`

**Niche:** ownerless-language

**Purpose:** Remove human-owner dependency from governed GitHub and contributor surfaces — rewrites references to "maintainers", "triage", "ownership" into ownerless equivalents per the ownerless-repo governance model

**Description:** Applies a closed list of deterministic 1:1 phrase rewrites (e.g. "Awaiting maintainer triage" → "Awaiting repository routing", "policy ownership" → "policy layering") to a fixed set of governed contributor surfaces. Reads no external rules — the phrase map is hard-coded for auditability. Pairs with dispatch-ownerless-language.js.

**Scope:** AGENTS.md, .allowlist, .github/, .claude/, .cursor/, .windsurf/, README.md, docs-guide/ contributor surfaces

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/ownerless-governance-surfaces.json` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
