# **Infrastructure & Integrations**

26 GitHub Actions workflows, 5 n8n configurations, and the external services they connect to.

## **GitHub Actions Workflows (26)**

### **CI / Quality (5 workflows)**

| **Workflow** | **Trigger** | **Blocking** | **What It Does** |
| --- | --- | --- | --- |
| test-suite.yml | PR to main/docs-v2 | Yes | Changed-file quality checks + browser test |
| test-v2-pages.yml | PR to main/docs-v2 | Yes | Full route browser sweep, artifact upload, PR comment |
| broken-links.yml | PR to main | Advisory | mintlify broken-links |
| openapi-reference-validation.yml | Push | Advisory | Validate OpenAPI spec, write results |
| codex-governance.yml | PR/push | Varies | Codex agent compliance checks |

### **Data Pipelines (6 workflows)**

| **Workflow** | **Source** | **Schedule** | **Output** |
| --- | --- | --- | --- |
| update-blog-data.yml | Ghost API | Cron | snippets/automations/blog/ |
| update-ghost-blog-data.yml | Ghost API | Cron | snippets/automations/blog/ |
| update-forum-data.yml | Discourse API | Cron | snippets/automations/forum/ |
| update-youtube-data.yml | YouTube Data API | Cron | snippets/automations/youtube/ |
| project-showcase-sync.yml | External + dispatch | Cron + dispatch | snippets/automations/showcase/ |
| update-livepeer-release.yml | GitHub Releases API | On release | snippets/automations/globals/ |

### **Generators (4 workflows)**

| **Workflow** | **Trigger** | **Output** |
| --- | --- | --- |
| generate-docs-index.yml | Push | docs-index.json |
| generate-ai-sitemap.yml | Push | sitemap-ai.xml |
| generate-review-table.yml | Push | Review table artifact |
| translate-docs.yml | Push | v2/{locale}/ content |

### **Repo Management (5 workflows)**

| **Workflow** | **Trigger** | **What It Does** |
| --- | --- | --- |
| sync-large-assets.yml | Push | Copy >20 MB files to docs-v2-assets branch |
| auto-assign-docs-reviewers.yml | PR | Assign reviewers based on changed paths |
| issue-auto-label.yml | Issue events | Auto-label issues by content |
| docs-v2-issue-indexer.yml | Issue events + cron | Build/update master issue index |
| discord-issue-intake.yml | repository_dispatch | Create GitHub issues from Discord bot |

### **Build Assets (2 workflows)**

| **Workflow** | **Trigger** | **What It Does** |
| --- | --- | --- |
| build-review-assets.yml | Push/PR | Build review artifacts |
| check-docs-index.yml | Push | Validate docs-index.json |

## **External Service Dependencies**

| **Service** | **What We Use It For** | **Auth Method** | **Failure Impact** |
| --- | --- | --- | --- |
| Mintlify | Build, deploy, host, AI assistant, search | GitHub App integration | Site goes down |
| Ghost | Blog content pipeline | API key | Blog data stale |
| Discourse | Forum content pipeline | API key (or public) | Forum data stale |
| YouTube Data API | Video content pipeline | API key | Video data stale |
| GitHub API | Release version, issue management, Actions | GITHUB_TOKEN | Pipelines fail |
| Luma | Events data pipeline | API/public | Events data stale |
| Discord | Issue intake via bot | Webhook/dispatch | Manual issue creation |
| Google Analytics | Analytics (GA4) | Measurement ID in docs.json | No analytics |
| CoinGecko | Live LPT price (client-side) | Public API | Price shows "..." |

## **n8n Workflow Configurations**

5 n8n workflow JSON files stored in `snippets/automations/scripts/n8n/`:

| **File** | **What It Does** | **Status** |
| --- | --- | --- |
| Discord_Announce_to_Mintlify.json | Discord announcements → MDX | Available |
| Discord-Issue-Intake.json | Discord issues → GitHub Issues | Available |
| Forum-To-Mintlify-Latest-Topics.json | Discourse → MDX | Available |
| Ghost-to-Mintlify.json | Ghost blog → MDX | Available |
| Luma-To-Mintlify.json | Luma events → MDX | Available |

**Note:** These are exported n8n workflow definitions. They require an n8n instance to run. The repo historically used n8n at `workflows.lilypad.tech` — current status of that instance needs verification.

**Relationship to GitHub Actions:** The GitHub Actions data pipelines (fetch-*.js) serve the same purpose — fetching external data and writing it to the repo. The n8n workflows may be predecessors or alternatives. This overlap should be resolved: choose one mechanism per data source.

## **Data Flow: External Source to Reader**

**Latency:** From external source update to reader visibility = pipeline schedule interval + build time + CDN propagation. Typically 1-24 hours depending on cron schedule.

## **Permissions Model**

| **Workflow Category** | **GitHub Token Permissions** |
| --- | --- |
| CI/Quality | contents: read, pull-requests: write (for comments) |
| Data Pipelines | contents: write (push commits) |
| Issue Management | issues: write, contents: read |
| Asset Sync | contents: write |

**Risk:** 11 workflows have `contents: write` — they can push directly to the branch. A misconfigured workflow could corrupt content. Mitigated by branch protection rules on `main`.