# Actions Library Summary

> 55 workflows | 7 types | 6 concerns | P2–P7 pipeline tiers
> Generated 2026-04-08

---

## Validators (13) — PR checks

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P2** | check-copy-standards | PR (v2/ paths) | Lint copy, grammar, proper nouns, patterns — **blocks merge** |
| **P2** | content-quality-suite | PR + push | Browser tests + PR checks — **blocks merge** |
| **P2** | codex-compliance | PR | Validates Codex task contracts on codex/* branches — **blocks merge** |
| **P3** | check-ai-sitemap | PR + push | Verifies AI sitemap consistency — advisory |
| **P3** | check-companions | PR + push | Verifies AI companion file consistency — advisory |
| **P3** | check-llms-files | PR + push | Verifies llms.txt consistency — advisory |
| **P3** | check-governance-map | PR + schedule | Checks governance markers and staleness — advisory |
| **P3** | check-broken-links | PR | Mintlify broken link check — advisory |
| **P3** | openapi-reference | PR + push + schedule | OpenAPI spec drift detection — advisory |
| **P3** | page-rendering | PR + push | Full browser sweep across all v2 pages — advisory |
| **P3** | page-structure | PR (v2/ paths) | 6 structure validators (headers, anchors, endings, etc.) — advisory |
| **P3** | check-catalogs | PR + push | Docs guide catalog consistency — advisory |
| **P3** | check-docs-index | PR + push | Docs index consistency — advisory |

## Generators (8) — post-merge auto-commit

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P4** | generate-ai-sitemap | push to docs-v2 | Regenerates `sitemap-ai.xml` |
| **P4** | generate-companions | push (v2/ paths) | Regenerates AI companion manifest files |
| **P4** | generate-llms-files | push to docs-v2 | Regenerates `llms.txt` and `llms-full.txt` |
| **P4** | generate-og-images | push (v2/ paths) | Generates Open Graph images for new/changed pages |
| **P4** | generate-action-docs | push (workflow paths) | Scans workflows, regenerates actions-audit.json + action pages |
| **P4** | generate-catalogs | push (docs-guide/ paths) | Regenerates scripts-catalog, component-catalog |
| **P4** | generate-component-registry | push (snippets/ paths) | Regenerates component registry JSON |
| **P4** | generate-docs-index | push to docs-v2 | Regenerates docs-index.json |
| **P4** | generate-sdk-clients | — | SDK client generation (trigger TBD) |

## Integrators (12) — scheduled data feeds + auto-commit

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P5-auto** | update-discord-data | cron + manual | Fetches Discord announcements, commits JSON |
| **P5-auto** | update-forum-data | cron + manual | Fetches Livepeer forum topics, commits JSON |
| **P5-auto** | update-ghost-blog-data | cron + manual | Fetches Ghost blog posts, commits JSON |
| **P5-auto** | update-github-data | cron + manual | Fetches GitHub discussions + releases, commits JSON |
| **P5-auto** | update-rss-blog-data | cron + manual | Fetches RSS blog feed, commits JSON |
| **P5-auto** | update-youtube-data | cron + manual | Fetches YouTube videos, commits JSON |
| **P5-auto** | update-changelogs | cron + dispatch + manual | Fetches repo changelogs, commits MDX |
| **P5-auto** | update-translations | manual only | Translates docs pages via OpenRouter |
| **P5-auto** | update-contract-addresses | cron + dispatch + manual | Fetches on-chain contract data, commits JSON |
| **P5-auto** | update-contract-addresses-shadow | cron + dispatch + manual | Shadow pipeline (test + verify before production) |
| **P5-auto** | update-release-version | cron + dispatch + manual | Fetches latest go-livepeer release version |
| **P5-auto** | update-large-assets | push + cron + manual | Syncs large assets to external storage |
| **P5-auto** | project-showcase-sync | manual + dispatch | Syncs project showcase data |

## Auditors (5) — scheduled scans with rolling issues

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P5** | scan-content-quality | cron + manual | Weekly content quality scan, rolling issue |
| **P5** | scan-data-freshness | cron + manual | Daily feed freshness check, rolling issue (auto-close when fresh) |
| **P5** | scan-external-links | cron + manual | Daily external link audit, rolling issue (auto-close when clean) |
| **P5** | scan-page-integrity | cron + manual | Daily page integrity scan, rolling issue |
| **P5** | scan-workspace-retention | cron + manual | Workspace TTL enforcement |

## Interfaces (5) — event-driven issue/PR lifecycle

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P7** | assign-reviewers | PR opened/reopened/labeled | Auto-assigns Copilot reviewer to Codex PRs |
| **P7** | close-linked-issues | PR merged/opened | Closes issues referenced in merged PRs, notifies on PR open |
| **P7** | index-issues | issue events + cron | Builds/updates rolling docs-v2 issue governance index |
| **P7** | intake-discord-issues | repository_dispatch | Creates GitHub issues from Discord bot reports |
| **P7** | label-issues | issue opened/edited | Parses issue form, applies structured labels + needs-info |

## Dispatchers (3) — orchestrators for reusable workflows

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P4** | post-merge-sync | push to docs-v2 | Runs governance repair + root artifact generation post-merge |
| **P4** | update-social-feeds | workflow_call + manual | Reusable dispatcher called by individual feed workflows |
| **P4** | check-catalogs | workflow_call + manual | Reusable dispatcher called by catalog validators |

## Remediators (3) — self-heal + auto-fix PRs

| Pipeline | Workflow | Trigger | What it does |
|---|---|---|---|
| **P6** | repair-en-gb-style | manual | EN-GB style homogenisation across changed files, creates PR |
| **P6** | repair-seo-metadata | manual | Refreshes SEO metadata (og:image, descriptions), creates PR |
| **P6** | repair-pipelines | cron + manual | Weekly governance audit + repair, creates auto-fix PR |
