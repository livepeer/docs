# GitHub Actions Governance: Outcomes

> Thread: GitHub Actions Governance
> Updated: 2026-03-31
> What the finished state looks like, visually.

---

## Aims

**What we are doing:** Bringing the 45 GitHub Actions workflows under the same governance model as our scripts and components. Every workflow gets classified, documented, and wired into a self-maintaining pipeline.

**Why:**

1. **Visibility.** Right now there is no single place to see what runs, when, why, or what it touches. The diagrams below fix that.
2. **Reliability.** 18 known bugs (5 at P0). Missing permissions, masked errors, no concurrency control on auto-commit workflows. Governance gives us a framework to fix these systematically.
3. **Maintainability.** 7 data-fetch workflows are copy-paste identical. 6 workflows have 80-400 line inline scripts. Consolidation and extraction reduce surface area.
4. **Self-documentation.** When a workflow changes, its documentation page regenerates automatically. No manual doc maintenance.
5. **Alignment.** Scripts have a 6-type, 4-concern taxonomy with 11-tag JSDoc headers. Components have a 7-tag standard. Actions get the same treatment (7 types, 7 concerns) so all three systems speak the same language.

**What "done" looks like:**

- Every workflow classified by type (7 types), concern (7 concerns), and pipeline tag (8 tags)
- One documentation page per workflow with Mermaid pipeline map, scripts, data files, triggers, and known bugs
- A searchable catalog index page
- A governance framework document with required standards for new workflows
- CI workflows that auto-regenerate docs and validate headers on PR
- Gold-standard patterns captured in `.claude/references/`
- Bug registry tracked, P0 bugs fixed

---

## Decision Log

(to consolidate later)

## Process

We work in phases. Each phase has a gate (a human review point) before the next phase starts. Decisions are recorded in [decisions-log.mdx](reports-audits/decisions-log.mdx) at the time they are made.

### Phase Summary

| Phase | What                                                  | Gate                             | Status                  |
| ----- | ----------------------------------------------------- | -------------------------------- | ----------------------- |
| 0A    | Best practices research                               | Review report                    | Done                    |
| 0B    | Repo-specific analysis                                | Review report                    | Done                    |
| 1     | Full audit + dependency map + bug registry            | Review classifications           | Done                    |
| 2     | Framework co-design (taxonomy, tags, standards)       | Confirm 3 pending decisions      | Done (D-ACT-01, 02, 03) |
| 3     | Template + per-action MDX pages + catalog index       | Review template + 2 sample pages | **Current**             |
| 4     | Self-documenting CI pipeline + header validator       | Review pipeline behaviour        | Pending                 |
| 5     | References + governance index entry                   | Review before commit             | Pending                 |
| 6     | Consolidation execution (optional, per-item approval) | Each merge individually          | Future                  |

### How decisions work

1. I propose, with reasoning and evidence from the audit
2. You confirm, adjust, or reject
3. Confirmed decisions are recorded in `decisions-log.mdx` immediately
4. The framework doc (`framework-canonical.md`) is updated to reflect the decision
5. No batch updates. One decision at a time so you can track without overwhelm

### Confirmed decisions

| #        | Decision                                                                  | Date       |
| -------- | ------------------------------------------------------------------------- | ---------- |
| D-ACT-01 | Issue/PR interface is a 7th type (`interface`)                            | 2026-03-31 |
| D-ACT-02 | P5-auto is a distinct pipeline tag (read-write vs read-only)              | 2026-03-31 |
| D-ACT-03 | Data-fetch consolidation approved (7 social feeds into 1 matrix workflow) | 2026-03-31 |

### File roles

| File                     | What it does                                        |
| ------------------------ | --------------------------------------------------- |
| `outcomes.md`            | THIS FILE. The visual map of where we are going     |
| `decisions-log.mdx`      | Every decision, recorded live                       |
| `framework-canonical.md` | The governance rules (updated after each decision)  |
| `actions-audit.json`     | Machine-readable audit data (feeds the generator)   |
| `actions-library/`       | Per-action documentation pages (the visible output) |

---

## Final Repo Tree

```
.github/
  workflows/                                    # 45 workflow YAML files (flat, kebab-case)
    test-suite.yml                              #   P2  validator   hard gate
    codex-governance.yml                        #   P2  validator   hard gate
    broken-links.yml                            #   P3  validator   soft gate
    check-ai-companions.yml                     #   P3  validator   soft gate
    check-docs-guide-catalogs.yml               #   P3  validator   soft gate
    check-docs-index.yml                        #   P3  validator   soft gate
    verify-ai-sitemap.yml                       #   P3  validator   soft gate
    verify-llms-files.yml                       #   P3  validator   soft gate
    openapi-reference-validation.yml            #   P3  validator   soft gate
    test-v2-pages.yml                           #   P3  validator   soft gate
    auto-assign-docs-reviewers.yml              #   P3  interface   soft gate
    generate-ai-companions.yml                  #   P4  generator   post-merge
    generate-ai-sitemap.yml                     #   P4  generator   post-merge
    generate-component-registry.yml             #   P4  generator   post-merge
    generate-docs-guide-catalogs.yml            #   P4  generator   post-merge
    generate-docs-index.yml                     #   P4  generator   post-merge
    generate-llms-files.yml                     #   P4  generator   post-merge
    governance-sync.yml                         #   P4  dispatch    post-merge
    close-linked-issues-docs-v2.yml             #   P4  interface   post-merge
    update-contract-addresses.yml               #   P5a integrator  scheduled + commit
    update-changelogs.yml                       #   P5a integrator  scheduled + commit
    update-discord-data.yml                     #   P5a integrator  scheduled + commit
    update-forum-data.yml                       #   P5a integrator  scheduled + commit
    update-ghost-blog-data.yml                  #   P5a integrator  scheduled + commit
    update-github-data.yml                      #   P5a integrator  scheduled + commit
    update-rss-blog-data.yml                    #   P5a integrator  scheduled + commit
    update-youtube-data.yml                     #   P5a integrator  scheduled + commit
    update-livepeer-release.yml                 #   P5a integrator  scheduled + commit
    project-showcase-sync.yml                   #   P5a integrator  scheduled + commit
    sync-large-assets.yml                       #   P5a integrator  scheduled + commit
    sdk_generation.yaml                         #   P5a generator   scheduled + commit
    content-health.yml                          #   P5  audit       scheduled read-only
    freshness-monitor.yml                       #   P5  audit       scheduled read-only
    v2-external-link-audit.yml                  #   P5  audit       scheduled read-only
    repair-governance.yml                       #   P6  remediator  self-heal
    seo-refresh.yml                             #   man remediator  manual
    style-homogenise.yml                        #   man remediator  manual
    translate-docs.yml                          #   man integrator  manual
    discord-issue-intake.yml                    #   evt interface   event-driven
    issue-auto-label.yml                        #   evt interface   event-driven
    docs-v2-issue-indexer.yml                   #   evt interface   event-driven
    # DEPRECATED (to remove)
    update-blog-data.yml                        #   --  broken      superseded
    build-review-assets.yml                     #   --  placeholder never implemented
    generate-review-table.yml                   #   --  placeholder never implemented
    update-review-template.yml                  #   --  placeholder never implemented

  scripts/                                      # Supporting scripts
    lib/                                        # [NEW] Shared utilities
      shared.js                                 #   escapeForJSX, JSX writer, config loader
    fetch-contract-addresses.js                 #   Gold standard
    fetch-discord-announcements.js
    fetch-forum-data.js
    fetch-ghost-blog-data.js
    fetch-github-discussions.js
    fetch-github-releases.js
    fetch-rss-blog-data.js
    fetch-youtube-data.js
    generate-changelog.js
    project-showcase-sync.js
    # [NEW] Extracted from inline scripts
    issue-indexer.js                            #   from docs-v2-issue-indexer.yml (403 lines)
    issue-auto-label.js                         #   from issue-auto-label.yml (339 lines)
    discord-issue-intake.js                     #   from discord-issue-intake.yml (261 lines)
    close-linked-issues.js                      #   from close-linked-issues.yml (141 lines)
    freshness-monitor.sh                        #   from freshness-monitor.yml (80 lines)
    update-livepeer-release.js                  #   from update-livepeer-release.yml (60 lines)

  workspace/                                    # Governance working directory
    actions-audit.json                          #   Machine-readable audit data (45 workflows)
    dependency-map.md                           #   Mermaid system diagrams
    framework-canonical.md                      #   THE governance framework
    outcomes.md                                 #   THIS FILE: visual outcome map
    reports-audits/
      report1-best-practices.md                 #   Phase 0A research
      report2-repo-analysis.md                  #   Phase 0B research
      audit1-full-classification.md             #   Phase 1 full audit
      decisions-log.mdx                         #   Live decisions tracker
    actions-library/                            #   Per-action docs: type/concern/page.mdx
      action-template.mdx                       #   Template for new pages
      catalog-index.mdx                         #   Master SearchTable index
      integrators/                              #   type: integrator (12 pages)
        integrations/                           #     concern: integrations
          update-contract-addresses.mdx         #       GOLD STANDARD
          update-changelogs.mdx
          update-discord-data.mdx
          update-forum-data.mdx
          update-ghost-blog-data.mdx
          update-github-data.mdx
          update-rss-blog-data.mdx
          update-youtube-data.mdx
          update-livepeer-release.mdx
          project-showcase-sync.mdx
          sync-large-assets.mdx
        copy/                                   #     concern: copy
          translate-docs.mdx
      generators/                               #   type: generator (7 pages)
        discoverability/                        #     concern: discoverability
          generate-ai-companions.mdx
          generate-ai-sitemap.mdx
          generate-llms-files.mdx
        maintenance/                            #     concern: maintenance
          generate-component-registry.mdx
          generate-docs-guide-catalogs.mdx
          generate-docs-index.mdx
          sdk-generation.mdx
      validators/                               #   type: validator (10 pages)
        health/                                 #     concern: health
          test-suite.mdx
          test-v2-pages.mdx
          broken-links.mdx
          openapi-reference-validation.mdx
        maintenance/                            #     concern: maintenance
          check-docs-guide-catalogs.mdx
          check-docs-index.mdx
        discoverability/                        #     concern: discoverability
          check-ai-companions.mdx
          verify-ai-sitemap.mdx
          verify-llms-files.mdx
        governance/                             #     concern: governance
          codex-governance.mdx
      auditors/                                 #   type: audit (3 pages)
        health/                                 #     concern: health
          content-health.mdx
          freshness-monitor.mdx
          v2-external-link-audit.mdx
      remediators/                              #   type: remediator (3 pages)
        discoverability/                        #     concern: discoverability
          seo-refresh.mdx
        copy/                                   #     concern: copy
          style-homogenise.mdx
        governance/                             #     concern: governance
          repair-governance.mdx
      interfaces/                               #   type: interface (5 pages)
        governance/                             #     concern: governance
          auto-assign-docs-reviewers.mdx
          close-linked-issues.mdx
          discord-issue-intake.mdx
          docs-v2-issue-indexer.mdx
          issue-auto-label.mdx
      dispatchers/                              #   type: dispatch (1 page)
        governance/                             #     concern: governance
          governance-sync.mdx

.claude/references/                             # [NEW entries]
  governance/actions-framework.md               #   Key patterns to emulate
  pipelines/actions-exemplars.md                #   Gold-standard workflow patterns
```

---

## Diagrams: What Fires on Each Trigger

### 1. Pull Request (PR opened/updated)

What checks run before your code can merge.

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    PR["Pull Request<br/>opened / synchronize"]

    subgraph "Hard Gate (P2): blocks merge"
        TEST["test-suite<br/>Content Quality Suite"]
        CODEX["codex-governance<br/>Codex compliance"]
    end

    subgraph "Soft Gate (P3): advisory"
        COMPANIONS_V["check-ai-companions"]
        CATALOGS_V["check-docs-guide-catalogs"]
        INDEX_V["check-docs-index"]
        SITEMAP_V["verify-ai-sitemap"]
        LLMS_V["verify-llms-files"]
        LINKS["broken-links"]
        V2PAGES["test-v2-pages<br/>Browser Sweep"]
        OPENAPI["openapi-reference-validation"]
    end

    subgraph "Lifecycle (P3)"
        ASSIGN["auto-assign-docs-reviewers"]
    end

    PR --> TEST & CODEX
    PR --> COMPANIONS_V & CATALOGS_V & INDEX_V
    PR --> SITEMAP_V & LLMS_V & LINKS
    PR --> V2PAGES & OPENAPI
    PR --> ASSIGN

    TEST --> S_NAMING["check-naming-conventions.js"]
    TEST --> S_SCOPE["check-mdx-component-scope.js"]
    TEST --> S_CSS["check-component-css.js"]
    TEST --> S_DOCS["check-component-docs.js"]
    TEST --> S_IMMUT["check-component-immutability.js"]
    TEST --> S_REG["generate-component-registry.js"]
    TEST --> S_FETCH["fetch-external-docs.sh"]

    CODEX --> S_CODEX1["validate-codex-task-contract.js"]
    CODEX --> S_CODEX2["check-codex-pr-overlap.js"]

    COMPANIONS_V --> S_GLOSS["generate-glossary-companions.js --check"]
    COMPANIONS_V --> S_MANIFEST["check-companion-manifest.js"]

    CATALOGS_V --> S_CATGEN["generate-docs-guide-indexes.js --check"]
    INDEX_V --> S_IDXGEN["generate-docs-index.js --check"]

    SITEMAP_V --> S_SITEGEN["generate-ai-sitemap.js --check"]
    LLMS_V --> S_LLMSGEN["generate-llms-files.js --check"]

    OPENAPI --> S_OPENAPI["openapi-reference-audit.js"]
    V2PAGES --> S_FETCH2["fetch-external-docs.sh"]

    style TEST fill:#d32f2f,color:#fff
    style CODEX fill:#d32f2f,color:#fff
```

### 2. Push to Deploy Branch (post-merge)

What regenerates automatically after content lands on the deploy branch.

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    PUSH["Push to deploy branch<br/>(post-merge)"]

    subgraph "Generators (P4): auto-commit new files"
        GEN_COMP["generate-ai-companions"]
        GEN_SITE["generate-ai-sitemap"]
        GEN_REG["generate-component-registry"]
        GEN_CAT["generate-docs-guide-catalogs"]
        GEN_IDX["generate-docs-index"]
        GEN_LLMS["generate-llms-files"]
    end

    subgraph "Dispatch (P4)"
        GOV_SYNC["governance-sync"]
    end

    subgraph "Lifecycle (P4)"
        CLOSE["close-linked-issues"]
    end

    PUSH --> GEN_COMP & GEN_SITE & GEN_REG
    PUSH --> GEN_CAT & GEN_IDX & GEN_LLMS
    PUSH --> GOV_SYNC
    PUSH --> CLOSE

    GEN_COMP --> D_COMP["companion JSON files"]
    GEN_SITE --> D_SITE["sitemap-ai.xml"]
    GEN_REG --> D_REG["component-registry.json"]
    GEN_CAT --> D_CAT["catalog MDX pages"]
    GEN_IDX --> D_IDX["docs-index.json"]
    GEN_LLMS --> D_LLMS["llms.txt + llms-full.txt"]

    GOV_SYNC --> S_GOV["governance-pipeline.js"]

    style D_COMP fill:#1b5e20,color:#fff
    style D_SITE fill:#1b5e20,color:#fff
    style D_REG fill:#1b5e20,color:#fff
    style D_CAT fill:#1b5e20,color:#fff
    style D_IDX fill:#1b5e20,color:#fff
    style D_LLMS fill:#1b5e20,color:#fff
```

### 3. Scheduled: Data Feeds (P5-auto, writes to repo)

External data fetch pipelines that run on cron and auto-commit.

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    CRON["Cron Schedule"]

    subgraph "Social Data Feeds (daily)"
        DISCORD["update-discord-data<br/>01:00 UTC"]
        FORUM["update-forum-data<br/>00:00 UTC"]
        GHOST["update-ghost-blog-data<br/>00:00 UTC"]
        GITHUB["update-github-data<br/>02:00 UTC"]
        RSS["update-rss-blog-data<br/>03:00 UTC"]
        YOUTUBE["update-youtube-data<br/>Sun 00:00"]
    end

    subgraph "Pipeline Data Feeds"
        CONTRACTS["update-contract-addresses<br/>Mon 02:00"]
        CHANGELOGS["update-changelogs<br/>Mon 00:00"]
        RELEASE["update-livepeer-release<br/>06:00 UTC"]
        SHOWCASE["project-showcase-sync<br/>every 15min"]
        ASSETS["sync-large-assets<br/>Sun 00:00"]
        SDK["sdk_generation<br/>00:00 UTC"]
    end

    CRON --> DISCORD & FORUM & GHOST & GITHUB & RSS & YOUTUBE
    CRON --> CONTRACTS & CHANGELOGS & RELEASE & SHOWCASE & ASSETS & SDK

    DISCORD --> S_DISC["fetch-discord-announcements.js"] --> D_DISC["discordData.jsx"]
    FORUM --> S_FORUM["fetch-forum-data.js"] --> D_FORUM["forumData.jsx"]
    GHOST --> S_GHOST["fetch-ghost-blog-data.js"] --> D_GHOST["ghostBlogData.jsx"]
    GITHUB --> S_GDIS["fetch-github-discussions.js"] --> D_GDIS["githubDiscussionsData.jsx"]
    GITHUB --> S_GREL["fetch-github-releases.js"] --> D_GREL["githubReleasesData.jsx"]
    RSS --> S_RSS["fetch-rss-blog-data.js"] --> D_RSS["blogData.jsx"]
    YOUTUBE --> S_YT["fetch-youtube-data.js"] --> D_YT["youtubeData.jsx"]

    CONTRACTS --> S_CONT["fetch-contract-addresses.js"] --> D_CONT["contractAddressesData.jsx"]
    CHANGELOGS --> S_CHNG["generate-changelog.js"] --> D_CHNG["changelog.mdx pages"]
    RELEASE --> D_GLOB["globals.jsx (inline script)"]
    SHOWCASE --> S_SHOW["project-showcase-sync.js"] --> D_SHOW["showcaseData.jsx"]

    style D_DISC fill:#1565c0,color:#fff
    style D_FORUM fill:#1565c0,color:#fff
    style D_GHOST fill:#1565c0,color:#fff
    style D_GDIS fill:#1565c0,color:#fff
    style D_GREL fill:#1565c0,color:#fff
    style D_RSS fill:#1565c0,color:#fff
    style D_YT fill:#1565c0,color:#fff
    style D_CONT fill:#1565c0,color:#fff
    style D_CHNG fill:#1565c0,color:#fff
    style D_GLOB fill:#1565c0,color:#fff
    style D_SHOW fill:#1565c0,color:#fff
```

#### Data Feed to Page Map

Where the integrator data actually surfaces on the live site.

| Workflow                  | Data file                        | Consuming pages                                                                                                                 | In nav?                                                   | Flags                                                                                        |
| ------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| update-discord-data       | `discordData.jsx` (per-solution) | `solutions/{streamplace,daydream,frameworks,embody}/community`                                                                  | All 4 YES                                                 |                                                                                              |
| update-forum-data         | `forumData.jsx`                  | `home/trending`, `community/.../trending-topics`, `community/.../livepeer-latest-topics`                                        | 2/3 (home/trending NOT in nav)                            | `home/trending` is a near-duplicate of `trending-topics` (97% identical). Flagged to Cleanup |
| update-ghost-blog-data    | `ghostBlogData.jsx`              | `home/trending`, `community/.../trending-topics`                                                                                | 1/2 (home/trending NOT in nav)                            | Same near-duplicate issue as forum. Both pages import the same data                          |
| update-github-data        | `githubDiscussionsData.jsx`      | **None.** Data files exist per-solution but no page imports them                                                                | N/A                                                       | Dead data. Fetched on schedule, stored, never consumed. Deprecate or wire up                 |
| update-github-data        | `githubReleasesData.jsx`         | **None.** Data files exist per-solution but no page imports them                                                                | N/A                                                       | Dead data. Same as above                                                                     |
| update-rss-blog-data      | `blogData.jsx` (per-solution)    | `solutions/daydream/community`                                                                                                  | YES                                                       | Only 1 of 5 solution community pages uses blog data                                          |
| update-youtube-data       | `youtubeData.jsx` (per-solution) | `home/trending`, `community/.../trending-topics`, 5 solution community pages                                                    | 6/7 (home/trending NOT in nav)                            | Most-consumed data feed. Near-duplicate flag applies to 2 of 7 consumers                     |
| update-contract-addresses | `contractAddressesData.jsx`      | `about/resources/blockchain-contracts`, `about/livepeer-protocol/blockchain-contracts`, `lpt/delegation/bridge-lpt-to-arbitrum` | 2/3 (`about/resources/blockchain-contracts` NOT in nav)   | Two blockchain-contracts pages exist in different locations. Check if intentional            |
| update-changelogs         | `changelog.mdx` pages            | 20 pages in `resources/changelog/`                                                                                              | YES (all 20)                                              |                                                                                              |
| update-livepeer-release   | `globals.jsx` (`latestVersion`)  | 2 gateway install pages, `gateways/quickstart/gateway-setup`, `quickstart/views/linux/linuxOffChainTab`, snippets-inventory     | 4/5 (`linuxOffChainTab` NOT in nav, it is a view partial) | linuxOffChainTab is a snippet/partial, not a standalone page. Correct behaviour              |
| project-showcase-sync     | `showcaseData.jsx`               | `home/solutions/showcase`                                                                                                       | YES                                                       |                                                                                              |
| sync-large-assets         | Binary assets (images, video)    | Referenced by `<img>` / `<video>` tags across v2/                                                                               | N/A                                                       |                                                                                              |
| sdk_generation            | SDK client code                  | External SDK repos                                                                                                              | N/A                                                       | No in-repo consumers                                                                         |

**Key findings:**

1. **Dead data (2 feeds):** `githubDiscussionsData` and `githubReleasesData` are fetched on schedule and stored but zero pages consume them. Deprecate the fetch or wire them to pages.
2. **Near-duplicate consumers (3 pages):** `home/trending` and `community/.../trending-topics` are 97% identical and both consume forumData, ghostBlogData, and youtubeData. `home/trending` is not in navigation. Flagged to Cleanup thread.
3. **Orphan page (1):** `about/resources/blockchain-contracts` consumes contractAddressesData but is not in docs.json navigation. There is a second `about/livepeer-protocol/blockchain-contracts` that IS in nav. Check if the orphan is legacy.
4. **View partial (1):** `linuxOffChainTab` correctly not in nav (it is a partial imported by other pages, not a standalone route).

### 4. Scheduled: Monitoring (P5, read-only)

Audits and monitors that report but never write.

```mermaid
graph LR
    CRON["Cron Schedule"]

    HEALTH["content-health<br/>Mon 06:00"]
    FRESH["freshness-monitor<br/>08:00 daily"]
    LINKS["v2-external-link-audit<br/>04:00 daily"]
    OPENAPI["openapi-reference-validation<br/>04:35 daily"]

    CRON --> HEALTH & FRESH & LINKS & OPENAPI

    HEALTH --> S_QUAL["docs-quality-and-freshness-audit.js"]
    HEALTH --> S_COMP["audit-component-usage.js"]
    HEALTH --> S_SCAN["scan-component-imports.js"]
    HEALTH --> S_REPAIR["repair-component-metadata.js"]
    HEALTH --> S_LAY["component-layout-governance.js"]
    HEALTH --> S_REG["generate-component-registry.js"]

    LINKS --> S_LINK["v2-link-audit.js"]
    OPENAPI --> S_API["openapi-reference-audit.js"]

    HEALTH --> OUT_SUM["Step summary + artifact"]
    FRESH --> OUT_SUM2["Step summary"]
    LINKS --> OUT_SUM3["Step summary + artifact"]
    OPENAPI --> OUT_PR["Creates PR if spec changed"]

    style OUT_SUM fill:#f57f17,color:#000
    style OUT_SUM2 fill:#f57f17,color:#000
    style OUT_SUM3 fill:#f57f17,color:#000
    style OUT_PR fill:#f57f17,color:#000
```

### 5. Scheduled: Self-Heal (P6)

Auto-repair that fixes broken governance state.

```mermaid
graph LR
    CRON["Cron Schedule<br/>Mon 05:00"]

    REPAIR["repair-governance"]

    REPAIR --> S_GOV["governance-pipeline.js"]
    S_GOV --> RESULT{"Changes<br/>detected?"}
    RESULT -- "Yes" --> CREATE_PR["Creates PR with fixes"]
    RESULT -- "No" --> NOOP["No action"]

    CRON --> REPAIR

    style CREATE_PR fill:#7b1fa2,color:#fff
```

### 6. External Events (repository_dispatch)

Triggered by other repos, services, or bots.

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    subgraph "External Sources"
        GO_LP["go-livepeer repo"]
        DISCORD_BOT["Discord bot"]
        SHOWCASE_FORM["Showcase submission form"]
        PROTOCOL["Protocol contracts"]
    end

    GO_LP -- "go-livepeer-release" --> RELEASE["update-livepeer-release"]
    DISCORD_BOT -- "discord-issue-intake" --> INTAKE["discord-issue-intake"]
    SHOWCASE_FORM -- "showcase-review-submitted" --> SHOWCASE["project-showcase-sync"]
    PROTOCOL -- "governor-scripts-update<br/>protocol-update<br/>bridge-update" --> CONTRACTS["update-contract-addresses"]
    PROTOCOL -- "solution-release<br/>governor-scripts-update" --> CHANGELOGS["update-changelogs"]

    RELEASE --> D_GLOB["globals.jsx"]
    INTAKE --> D_ISSUE["Creates GitHub issue"]
    SHOWCASE --> S_SHOW["project-showcase-sync.js"] --> D_SHOW["showcaseData.jsx"]
    CONTRACTS --> S_CONT["fetch-contract-addresses.js"] --> D_CONT["contractAddressesData.jsx"]
    CHANGELOGS --> S_CHNG["generate-changelog.js"] --> D_CHNG["changelog.mdx pages"]

    style D_ISSUE fill:#e65100,color:#fff
    style D_GLOB fill:#1565c0,color:#fff
    style D_SHOW fill:#1565c0,color:#fff
    style D_CONT fill:#1565c0,color:#fff
    style D_CHNG fill:#1565c0,color:#fff
```

### 7. Issue Events (interface)

Triggered when issues are opened, labelled, or edited.

```mermaid
graph LR
    ISSUE["Issue event<br/>opened / labelled / edited"]

    LABEL["issue-auto-label<br/>Classifies + labels new issues"]
    INDEXER["docs-v2-issue-indexer<br/>Builds issue index every 6h"]

    ISSUE --> LABEL
    ISSUE --> INDEXER

    LABEL --> OUT_LABEL["Adds labels via GitHub API"]
    INDEXER --> OUT_INDEX["Updates issue tracking data"]

    style OUT_LABEL fill:#00695c,color:#fff
    style OUT_INDEX fill:#00695c,color:#fff
```

### 8. Manual Dispatch (workflow_dispatch only)

Human-triggered, no automatic schedule.

```mermaid
graph LR
    HUMAN["Human triggers<br/>from Actions tab"]

    SEO["seo-refresh<br/>Regenerates SEO metadata"]
    STYLE["style-homogenise<br/>EN-GB normalisation"]
    TRANSLATE["translate-docs<br/>i18n pipeline"]

    HUMAN --> SEO & STYLE & TRANSLATE

    SEO --> S_SEO["generate-seo.js"]
    STYLE --> S_STYLE["style-and-language-homogenizer-en-gb.js"]
    TRANSLATE --> S_TR1["translate-docs.js"]
    TRANSLATE --> S_TR2["generate-localized-docs-json.js"]
    TRANSLATE --> S_TR3["validate-generated.js"]

    SEO --> BUG_SEO["BUG: no auto-commit step"]
    TRANSLATE --> BUG_TR["BUG: path mismatch"]

    style BUG_SEO fill:#d32f2f,color:#fff
    style BUG_TR fill:#d32f2f,color:#fff
```

---

## Colour Key

| Colour       | Meaning                                    |
| ------------ | ------------------------------------------ |
| Red nodes    | Hard gates / known bugs                    |
| Green nodes  | Data files produced (committed to repo)    |
| Blue nodes   | Data files produced by scheduled feeds     |
| Orange nodes | Report-only outputs (summaries, artifacts) |
| Purple nodes | PR creation (self-heal)                    |
| Teal nodes   | GitHub API actions (labels, comments)      |
