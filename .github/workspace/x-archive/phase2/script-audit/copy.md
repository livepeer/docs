# Concern: Copy

> Pipelines that manage written content users read on pages.
> Status: Reviewing

---

## Pipelines

### 1. Social Feeds

Keeps community pages populated with fresh content from external sources.

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    subgraph Triggers
        CRON["Cron (daily/weekly)"]
        DISPATCH["repo dispatch"]
        MANUAL["manual dispatch"]
    end

    subgraph "Dispatcher (6 workflows, merging to 1)"
        WF["integrator-copy-update-social-feeds.yml"]
    end

    subgraph "Config"
        CFG["product-social-config.json"]
    end

    subgraph "Integrator Scripts (.github/scripts/)"
        S1["fetch-discord-announcements.js"]
        S2["fetch-forum-data.js"]
        S3["fetch-ghost-blog-data.js"]
        S4["fetch-github-discussions.js"]
        S5["fetch-github-releases.js"]
        S6["fetch-rss-blog-data.js"]
        S7["fetch-youtube-data.js"]
    end

    subgraph "Shared Utils"
        SANITISE["mdx-sanitise.js (escapeForJSX)"]
    end

    subgraph "Data Files"
        D1["discordData.jsx (per product)"]
        D2["forumData.jsx"]
        D3["ghostBlogData.jsx"]
        D4["githubDiscussionsData.jsx"]
        D5["githubReleasesData.jsx"]
        D6["blogData.jsx (per product)"]
        D7["youtubeData.jsx (per product)"]
    end

    subgraph "Consumer Pages"
        P1["4 solution community pages"]
        P2["trending-topics, latest-topics"]
        P3["trending-topics"]
        P6["1 solution community page"]
        P7["7 pages (most-consumed feed)"]
    end

    subgraph "ZERO CONSUMERS"
        DEAD4["githubDiscussionsData"]
        DEAD5["githubReleasesData"]
    end

    CRON --> WF
    DISPATCH --> WF
    MANUAL --> WF
    CFG --> S1 & S2 & S3 & S4 & S5 & S6 & S7
    WF --> S1 & S2 & S3 & S4 & S5 & S6 & S7
    S1 & S2 & S3 & S4 & S5 & S6 & S7 --> SANITISE
    S1 --> D1 --> P1
    S2 --> D2 --> P2
    S3 --> D3 --> P3
    S4 --> D4 --> DEAD4
    S5 --> D5 --> DEAD5
    S6 --> D6 --> P6
    S7 --> D7 --> P7

    style DEAD4 fill:#d32f2f,color:#fff
    style DEAD5 fill:#d32f2f,color:#fff
    style D1 fill:#1565c0,color:#fff
    style D2 fill:#1565c0,color:#fff
    style D3 fill:#1565c0,color:#fff
    style D6 fill:#1565c0,color:#fff
    style D7 fill:#1565c0,color:#fff
```

**Scripts involved:**

| Script | Location | Type | Governed? | Issues |
|---|---|---|---|---|
| fetch-discord-announcements.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/ |
| fetch-forum-data.js | .github/scripts/ | integrator | No (@type missing) | Not governed, not in operations/scripts/ |
| fetch-ghost-blog-data.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/ |
| fetch-github-discussions.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/. Output has ZERO consumers |
| fetch-github-releases.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/. Output has ZERO consumers |
| fetch-rss-blog-data.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/ |
| fetch-youtube-data.js | .github/scripts/ | integrator | No (@type missing) | Not governed, not in operations/scripts/ |
| mdx-sanitise.js | operations/scripts/config/ | utility | Yes | Shared lib, correct location |

**Audit findings:**

| # | Finding | Severity | Type |
|---|---|---|---|
| 1 | 3 workflows missing `permissions: contents: write` (forum, ghost, youtube) | P0 | Bug |
| 2 | All 7 scripts duplicate HTTP client, JSX writer, config loader | P1 | Shared code |
| 3 | githubDiscussionsData + githubReleasesData have ZERO page consumers | P1 | Dead data |
| 4 | 2 scripts missing @type tag (fetch-forum-data, fetch-youtube-data) | P2 | Governance |
| 5 | All 7 scripts in .github/scripts/ not operations/scripts/ | P2 | Placement |
| 6 | No error handling on any workflow | P2 | Gap |
| 7 | No concurrency control | P2 | Gap |
| 8 | youtube workflow has wrong bot identity + inconsistent commit message | P2 | Inconsistency |
| 9 | No verify pair (freshness-monitor is partial) | P2 | Gap |

**Decision:**

---

### 2. Changelogs

Keeps solution changelog pages populated with latest release data.

```mermaid
graph LR
    subgraph Triggers
        CRON["Cron (weekly Monday)"]
        DISPATCH["repo dispatch (solution-release)"]
        MANUAL["manual dispatch"]
    end

    WF["integrator-copy-update-changelogs.yml"]
    CFG["product-social-config.json (changelogs section)"]
    SCRIPT["generate-changelog.js"]

    subgraph "Output (20 pages)"
        OUT["v2/resources/changelog/*.mdx"]
    end

    CRON --> WF
    DISPATCH --> WF
    MANUAL --> WF
    WF --> SCRIPT
    CFG --> SCRIPT
    SCRIPT --> OUT

    style OUT fill:#1565c0,color:#fff
```

**Scripts involved:**

| Script | Location | Type | Governed? | Issues |
|---|---|---|---|---|
| generate-changelog.js | .github/scripts/ | integrator | Yes (JSDoc) | Not in operations/scripts/ |

**Audit findings:**

| # | Finding | Severity |
|---|---|---|
| 1 | No concurrency control | P2 |
| 2 | Script in .github/scripts/ not operations/scripts/ | P2 |
| 3 | No verify pair | P2 |

**Decision:**

---

### 3. Showcase

Keeps showcase page populated with community project submissions.

```mermaid
graph LR
    CRON["Cron (every 15min)"] --> WF["integrator-copy-update-showcase-submissions.yml"]
    DISPATCH["repo dispatch"] --> WF
    WF --> SCRIPT["project-showcase-sync.js"]
    SCRIPT --> OUT["showcaseData.jsx"]
    OUT --> PAGE["v2/home/solutions/showcase.mdx"]

    style WF fill:#d32f2f,color:#fff
```

**Scripts involved:**

| Script | Location | Type | Governed? | Issues |
|---|---|---|---|---|
| project-showcase-sync.js | .github/scripts/ | integrator | No (@type missing) | Not governed, not in operations/scripts/, NOT WORKING |

**Audit findings:**

| # | Finding | Severity |
|---|---|---|
| 1 | Pipeline is NOT WORKING | P0 |
| 2 | 15min cron is excessive | P1 |
| 3 | Script not governed | P2 |

**Decision:** Disable. Flag for follow-up.

---

### 4. Translation

Translates pages into other languages via LLM.

```mermaid
graph LR
    MANUAL["Manual dispatch"] --> WF["integrator-copy-update-translations.yml"]

    subgraph "Script chain"
        S1["translate-docs.js"]
        S2["generate-localized-docs-json.js"]
        S3["generate-docs-index.js"]
        S4["validate-generated.js"]
        S5["docs-navigation.test.js"]
    end

    subgraph "Library modules (12)"
        LIB["common, config, docs-json-localizer, docs-routes, frontmatter, mdx-parser, mdx-translate, path-utils, provenance, provider-mock, provider-openrouter, providers"]
    end

    WF --> S1 --> S2 --> S3 --> S4 --> S5
    LIB --> S1

    S5 --> PR["Creates PR with translations"]

    style PR fill:#7b1fa2,color:#fff
```

**Scripts involved:**

| Script | Location | Type | Governed? | Issues |
|---|---|---|---|---|
| translate-docs.js | operations/scripts/ | automation | Yes | Well-governed, 12 lib modules |
| generate-localized-docs-json.js | operations/scripts/ | automation | Yes | |
| generate-docs-index.js | operations/scripts/ | generator | Yes | Shared with maintenance pipeline |
| validate-generated.js | operations/scripts/ | automation | Yes | |
| 12 lib modules | operations/scripts/.../lib/ | library | N/A | Not standalone scripts |

**Audit findings:**

| # | Finding | Severity |
|---|---|---|
| 1 | PR add-paths hardcodes v2/es,fr,cn but input defaults es,fr,de | P0 |
| 2 | Scripts tagged @type automation, should be @type integrator (D-ACT-07) | P2 |

**Decision:**

---

### 5. Copy Quality Suite (PR gate)

Hard gate that blocks PRs with copy/component issues.

```mermaid
graph LR
    PR["Pull request"] --> WF["validator-copy-check-content-quality-suite.yml (P2)"]

    subgraph "Validator scripts"
        V1["check-naming-conventions.js"]
        V2["check-mdx-component-scope.js"]
        V3["check-component-css.js"]
        V4["check-component-docs.js"]
        V5["check-component-immutability.js"]
    end

    subgraph "Support"
        GEN["generate-component-registry.js"]
        FETCH["fetch-external-docs.sh"]
    end

    WF --> FETCH --> V1 & V2 & V3 & V4 & V5
    WF --> GEN
    V1 & V2 & V3 & V4 & V5 --> RESULT{"Pass/Fail"}
    RESULT -- "Fail" --> BLOCK["Block merge"]
    RESULT -- "Pass" --> ALLOW["Allow merge"]

    style BLOCK fill:#d32f2f,color:#fff
    style ALLOW fill:#1b5e20,color:#fff
```

**Scripts involved:**

| Script | Location | Type | Governed? | Issues |
|---|---|---|---|---|
| check-naming-conventions.js | operations/scripts/validators/ | validator | Yes | |
| check-mdx-component-scope.js | operations/scripts/validators/ | validator | Yes | |
| check-component-css.js | operations/scripts/validators/ | validator | Yes | |
| check-component-docs.js | operations/scripts/validators/ | validator | Yes | |
| check-component-immutability.js | operations/scripts/validators/ | validator | Yes | |
| generate-component-registry.js | operations/scripts/generators/ | generator | Yes | Shared with maintenance pipeline |
| fetch-external-docs.sh | operations/scripts/integrators/ | utility | Yes | Shared with health pipelines |

**Audit findings:** None. This is a well-structured pipeline.

**Decision:**

---

### 6. Copy Linting (DISCONNECTED)

Scripts exist for linting and fixing copy patterns, but no PR workflow dispatches them.

```mermaid
graph LR
    subgraph "Lint scripts (NO WORKFLOW)"
        L1["lint-copy.js"]
        L2["lint-patterns.js"]
        L3["check-grammar-en-gb.js"]
        L4["check-proper-nouns.js"]
        L5["audit-copy-patterns.js"]
    end

    subgraph "Fix scripts (NO WORKFLOW except manual)"
        F1["style-and-language-homogenizer-en-gb.js"]
        F2["repair-spelling.js"]
        F3["repair-ownerless-language.js"]
    end

    MANUAL["style-homogenise.yml (manual)"] --> F1

    L1 & L2 & L3 & L4 & L5 -. "should feed" .-> REPORT["Report"]
    REPORT -. "should trigger" .-> F1 & F2 & F3

    style L1 fill:#f57f17,color:#000
    style L2 fill:#f57f17,color:#000
    style L3 fill:#f57f17,color:#000
    style L4 fill:#f57f17,color:#000
    style L5 fill:#f57f17,color:#000
    style F1 fill:#f57f17,color:#000
    style F2 fill:#f57f17,color:#000
    style F3 fill:#f57f17,color:#000
```

**Scripts involved:**

| Script | Location | Type | Governed? | Has workflow? |
|---|---|---|---|---|
| lint-copy.js | operations/scripts/validators/content/copy/ | validator | Yes | NO |
| lint-patterns.js | operations/scripts/validators/content/copy/ | validator | Yes | NO |
| check-grammar-en-gb.js | operations/scripts/validators/content/grammar/ | validator | Yes | NO |
| check-proper-nouns.js | operations/scripts/validators/content/grammar/ | validator | Yes | NO |
| audit-copy-patterns.js | operations/scripts/audits/content/quality/ | audit | Yes | NO |
| style-and-language-homogenizer-en-gb.js | operations/scripts/audits/content/style/ (WRONG) | remediator (tagged audit) | Partial | YES (manual only) |
| repair-spelling.js | operations/scripts/remediators/content/repair/ | remediator | Yes | NO |
| repair-ownerless-language.js | operations/scripts/remediators/content/style/ | remediator | Yes | NO |

**Audit findings:**

| # | Finding | Severity |
|---|---|---|
| 1 | 5 lint scripts have no PR workflow. Completely disconnected from CI | P1 |
| 2 | 2 fix scripts (repair-spelling, repair-ownerless-language) have no workflow | P1 |
| 3 | style-and-language-homogenizer is in audits/ but is a remediator (@mode edit) | P2 |
| 4 | No scan-then-fix chain: lint scripts don't feed into fix scripts | P2 |

**This is a candidate for a new pipeline:** `validator-copy-check-copy-standards.yml` (PR, P3) that runs the lint scripts, and `remediator-brand-repair-en-gb-style.yml` (manual) for fixes. Or a combined scan-then-fix pipeline.

**Decision:**

---

## Summary: Copy Concern

| Pipeline | Actions needed | Scripts | Workflows |
|---|---|---|---|
| Social feeds | Merge 6 workflows to 1 matrix. Fix 3 permission bugs. Extract shared modules. Wire error handling | 7 integrator scripts + 1 shared util | 6 to 1 |
| Changelogs | Add concurrency, migrate script | 1 | 1 |
| Showcase | Disable | 1 | 1 (disabled) |
| Translation | Fix path bug, retag scripts | 5 + 12 lib modules | 1 |
| Quality suite | No changes needed | 5 validators + 2 support | 1 |
| Copy linting | NEW: wire lint scripts to PR workflow. Wire fix scripts to manual/scheduled workflow | 5 validators + 3 remediators | 0 to 1-2 |

**Total copy workflows: currently 10, target 5-6** (social feeds merge, showcase disabled, copy linting adds 1-2 new)
