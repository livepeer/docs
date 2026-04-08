# Governance Architecture: Visual Maps

> Generated 2026-04-08 after full consolidation.
> 48 workflows renamed, 11 scripts migrated, all standards fixed.

---

## System Overview

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph TB
    subgraph "Triggers"
        PR["Pull Request"]
        PUSH["Push to docs-v2"]
        CRON["Cron Schedule"]
        EVENT["External Events"]
        MANUAL["Manual Dispatch"]
    end

    subgraph "Layer 3: PR Validators"
        direction LR
        V_P2["P2 Hard Gates\ncodex-compliance\ncontent-quality-suite"]
        V_P3["P3 Advisory\ncopy-standards\npage-structure\nbroken-links\npage-rendering\ncompanions\nai-sitemap\nllms-files\ncatalogs\ndocs-index\nopenapi-reference"]
    end

    subgraph "Layer 4: Post-Merge"
        direction LR
        GEN["Generators\ncompanions\nai-sitemap\nllms-files\ncomponent-registry\ncatalogs\ndocs-index"]
        SYNC["Dispatchers\ngovernance-sync\ncatalog-check"]
    end

    subgraph "Layer 5: Scheduled"
        direction LR
        SCAN["Scanners\ncontent-quality\ndata-freshness\nexternal-links\npage-integrity\nopenapi-reference\nworkspace-retention"]
        INT["Integrators\nsocial-feeds (7)\nchangelogs\ncontract-addresses\nrelease-version\nlarge-assets\nsk-clients"]
    end

    subgraph "Layer 6: Self-Heal"
        REPAIR["repair-pipelines\nWeekly audit + fix + PR"]
    end

    subgraph "Layer 7: Events"
        direction LR
        LIFE["Interfaces\nassign-reviewers\nclose-linked-issues\nindex-issues\nintake-discord\nlabel-issues"]
    end

    subgraph "Responses"
        BLOCK["Block merge"]
        WARN["Advisory warning"]
        COMMIT["Auto-commit"]
        ISSUE["Rolling issue"]
        AUTOPR["Auto-fix PR"]
    end

    PR --> V_P2 & V_P3
    PUSH --> GEN & SYNC
    CRON --> SCAN & INT & REPAIR
    EVENT --> LIFE & INT
    MANUAL --> V_P3 & SCAN & INT

    V_P2 --> BLOCK
    V_P3 --> WARN
    GEN --> COMMIT
    SCAN --> ISSUE
    INT --> COMMIT
    REPAIR --> AUTOPR
    LIFE --> ISSUE

    style V_P2 fill:#d32f2f,color:#fff
    style BLOCK fill:#d32f2f,color:#fff
    style GEN fill:#1b5e20,color:#fff
    style COMMIT fill:#1b5e20,color:#fff
    style SCAN fill:#1565c0,color:#fff
    style ISSUE fill:#f57f17,color:#000
    style REPAIR fill:#7b1fa2,color:#fff
    style AUTOPR fill:#7b1fa2,color:#fff
```

---

## Workflows by Type

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph LR
    subgraph "Validators (13)"
        V1["copy-check-content-quality-suite P2"]
        V2["governance-check-codex-compliance P2"]
        V3["brand-check-copy-standards P3"]
        V4["health-check-page-structure P3"]
        V5["health-check-broken-links P3"]
        V6["health-check-page-rendering P3"]
        V7["health-check-openapi-reference P3"]
        V8["discoverability-check-companions P3"]
        V9["discoverability-check-ai-sitemap P3"]
        V10["discoverability-check-llms-files P3"]
        V11["maintenance-check-catalogs P3"]
        V12["maintenance-check-docs-index P3"]
        V13["governance-check-governance-map P3"]
    end

    subgraph "Generators (7)"
        G1["discoverability-generate-companions P4"]
        G2["discoverability-generate-ai-sitemap P4"]
        G3["discoverability-generate-llms-files P4"]
        G4["maintenance-generate-component-registry P4"]
        G5["maintenance-generate-catalogs P4"]
        G6["maintenance-generate-docs-index P4"]
        G7["maintenance-generate-sdk-clients P5a"]
    end

    subgraph "Integrators (12)"
        I1["copy-update-discord-data"]
        I2["copy-update-forum-data"]
        I3["copy-update-ghost-blog-data"]
        I4["copy-update-github-data"]
        I5["copy-update-rss-blog-data"]
        I6["copy-update-youtube-data"]
        I7["copy-update-changelogs"]
        I8["copy-update-translations"]
        I9["maintenance-update-contract-addresses"]
        I10["maintenance-update-release-version"]
        I11["maintenance-update-large-assets"]
        I12["maintenance-update-contract-addresses-shadow"]
    end

    subgraph "Auditors (5)"
        A1["health-scan-content-quality"]
        A2["health-scan-data-freshness"]
        A3["health-scan-external-links"]
        A4["health-scan-page-integrity"]
        A5["governance-scan-workspace-retention"]
    end

    subgraph "Interfaces (5)"
        IF1["governance-assign-reviewers"]
        IF2["governance-close-linked-issues"]
        IF3["governance-index-issues"]
        IF4["governance-intake-discord-issues"]
        IF5["governance-label-issues"]
    end

    subgraph "Remediators (3)"
        R1["brand-repair-en-gb-style"]
        R2["discoverability-repair-seo-metadata"]
        R3["governance-repair-pipelines"]
    end

    subgraph "Dispatchers (3)"
        D1["copy-update-social-feeds reusable"]
        D2["governance-post-merge-sync"]
        D3["maintenance-check-catalogs reusable"]
    end

    style V1 fill:#d32f2f,color:#fff
    style V2 fill:#d32f2f,color:#fff
    style R3 fill:#7b1fa2,color:#fff
```

---

## Generate/Verify Pairs

```mermaid
graph LR
    subgraph "Post-Merge Generators (P4)"
        G1["generate-companions"]
        G2["generate-ai-sitemap"]
        G3["generate-llms-files"]
        G4["generate-component-registry"]
        G5["generate-catalogs"]
        G6["generate-docs-index"]
    end

    subgraph "PR Verifiers (P3)"
        V1["check-companions"]
        V2["check-ai-sitemap"]
        V3["check-llms-files"]
        V4["check-catalogs"]
        V5["check-docs-index"]
    end

    G1 -.->|verify pair| V1
    G2 -.->|verify pair| V2
    G3 -.->|verify pair| V3
    G5 -.->|verify pair| V4
    G6 -.->|verify pair| V5
    G4 -.->|"verify (indirect via catalogs)"| V4

    style G1 fill:#1b5e20,color:#fff
    style G2 fill:#1b5e20,color:#fff
    style G3 fill:#1b5e20,color:#fff
    style G4 fill:#1b5e20,color:#fff
    style G5 fill:#1b5e20,color:#fff
    style G6 fill:#1b5e20,color:#fff
```

---

## Scan-to-Act Routing

```mermaid
graph LR
    subgraph "Scanners"
        S1["content-quality\nWeekly Mon 06:00"]
        S2["data-freshness\nDaily 08:00"]
        S3["external-links\nDaily 04:00"]
        S4["page-integrity\nDaily 04:30"]
        S5["openapi-reference\nDaily 04:35"]
    end

    subgraph "Responses"
        FIX["Auto-repair\n+ commit"]
        ISSUE["Create/update\nrolling issue"]
        CLOSE["Auto-close\nwhen resolved"]
        PR["Create\nauto-fix PR"]
    end

    S1 -->|"component metadata"| FIX
    S1 -->|"quality/layout"| ISSUE
    S2 -->|"stale feeds"| ISSUE
    S2 -->|"all fresh"| CLOSE
    S3 -->|"broken links"| ISSUE
    S3 -->|"all clean"| CLOSE
    S4 -->|"link/import issues"| FIX
    S4 -->|"unresolved"| ISSUE
    S4 -->|"all clean"| CLOSE
    S5 -->|"spec drift"| PR
    S5 -->|"spec matches"| CLOSE

    style FIX fill:#1b5e20,color:#fff
    style ISSUE fill:#f57f17,color:#000
    style CLOSE fill:#00695c,color:#fff
    style PR fill:#7b1fa2,color:#fff
```

---

## Scripts by Type and Concern

```mermaid
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
graph TB
    subgraph "operations/scripts/"
        subgraph "automations/ (45 scripts)"
            AC["content/ (37)"]
            AAI["ai/ (6)"]
            AG["governance/ (2)"]
        end

        subgraph "integrators/ (11 scripts)"
            IC["copy/ (9)\nsocial-feeds, changelogs, showcase"]
            IM["maintenance/ (2)\ncontracts, release"]
        end

        subgraph "generators/ (22 scripts)"
            GC["content/ (7)"]
            GG["governance/ (14)"]
            GCO["components/ (4)"]
            GAI["ai/ (1)"]
            GM["media/ (2)"]
        end

        subgraph "validators/ (33 scripts)"
            VC["content/ (19)"]
            VG["governance/ (17)"]
            VCO["components/ (6)"]
            VAI["ai/ (2)"]
        end

        subgraph "auditors/ (17 scripts)"
            AUC["content/ (13)"]
            AUG["governance/ (4)"]
            AUCO["components/ (2)"]
        end

        subgraph "dispatch/ (25 scripts)"
            DG["governance/ (25)\nhooks, pipelines, orchestrators"]
            DC["content/ (6)"]
            DAI["ai/ (4)"]
        end

        subgraph "remediators/ (17 scripts)"
            RC["content/ (15)"]
            RG["governance/ (5)"]
            RCO["components/ (1)"]
        end

        subgraph "interfaces/ (0 - pending extraction)"
            INT["governance/ (planned: 5 scripts)"]
        end

        subgraph "config/ (3)"
            CFG["mdx-sanitise, docs-path-sync, og-image-policy"]
        end
    end
```

---

## Workflow Count Summary

| Type | Count | Concerns covered |
|---|---|---|
| Validators | 13 | copy, brand, health, discoverability, maintenance, governance |
| Integrators | 12 | copy (8), maintenance (4) |
| Generators | 7 | discoverability (3), maintenance (4) |
| Auditors | 5 | health (4), governance (1) |
| Interfaces | 5 | governance (5) |
| Dispatchers | 3 | copy (1), governance (1), maintenance (1) |
| Remediators | 3 | brand (1), discoverability (1), governance (1) |
| Disabled | 1 | project-showcase-sync |
| **Total** | **49** | |

## Script Count Summary

| Type | Count | Top concerns |
|---|---|---|
| automations | 45 | content (37), ai (6), governance (2) |
| validators | 33 | content (19), governance (17), components (6) |
| dispatch | 25 | governance (25), content (6), ai (4) |
| generators | 22 | governance (14), content (7), components (4) |
| auditors | 17 | content (13), governance (4), components (2) |
| remediators | 17 | content (15), governance (5), components (1) |
| integrators | 11 | copy (9), maintenance (2) |
| interfaces | 0 | planned: governance (5) |
| config | 3 | shared utilities |
| **Total** | **~205** | |
