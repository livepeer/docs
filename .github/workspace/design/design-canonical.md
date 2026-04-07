# Pipeline Design: Canonical Overview

> Root document. Links to each concern's design-overview.md.
> This is the full picture when done.

**Related:**
- [Actions + Pipeline Framework](.github/workspace/framework-canonical.md)
- [Product Capabilities + Aims](.github/workspace/phase2/locked-pipelines.md)
- [Pipeline Review Process](.github/workspace/phase2/pipeline-review-process.md)

---

## How Concerns and Governance Relate

Each concern defines what "correct" means for its domain. Governance is the enforcement infrastructure that makes those rules stick.

- **Health** says "links must resolve" -> governance runs the link checker
- **Brand** says "UK English" -> governance runs the style linter
- **Maintenance** says "indexes must be current" -> governance runs the generator/verify pairs
- **Copy** says "content must be fresh" -> governance runs the data feed pipelines
- **Discoverability** says "AI surfaces must regenerate" -> governance runs the generators

**Governance doesn't own any content rules. It owns the pipeline infrastructure that enforces everyone else's rules.**

---

## Concerns

Each concern defines the rules for its domain. Governance enforces them.

| Concern | Design doc | Definition | Status |
|---|---|---|---|
| [Governance](governance/design-overview.md) | Enforcement infrastructure: the layers, patterns, and standards that make all other concerns' rules stick | In progress |
| [Health](health/design-overview.md) | Links, rendering, structure, freshness, integrity | Pending |
| [Copy](copy/design-overview.md) | Written content, data feeds, changelogs, translations | Pending |
| [Brand](brand/design-overview.md) | Voice, style, grammar, spelling, terminology, visual identity | Pending |
| [Discoverability](discoverability/design-overview.md) | SEO, AEO, AI indexing, sitemaps, llms.txt, companions, OG images | Pending |
| [Maintenance](maintenance/design-overview.md) | Indexes, catalogs, registries, reference data, scaffolding | Pending |
| [Data Importers](data-importers/design-overview.md) | External data feeds, API integrations | Pending |

---

## Priority Order

1. **Governance** - the enforcement layer everything else depends on
2. **Health** - can the site function?
3. **Maintenance** - are indexes and registries current?
4. **Copy** - is content correct and current?
5. **Brand** - is content consistent?
6. **Discoverability** - can AI/search find things?
7. **Data importers** - is external data fresh?

---

## 6 Critical Gaps (from locked-pipelines.md)

1. No closed-loop monitoring (scanners report into the void)
2. No copy/brand enforcement in CI (8 scripts, no workflow)
3. No working SEO pipeline (P0 bug + missing workflows)
4. Fragile data pipelines (3 missing permissions, no error handling)
5. 1,224 lines of inline JS in governance (can't test, can't govern)
6. No single entry point (201 scripts, 45+ workflows)

---

## Cross-Concern Design Decisions

| Decision | Status | Affects |
|---|---|---|
| Governance is enforcement infrastructure, not content rules | Confirmed this session | All concerns |
| Align script framework concerns (4 to 7) | Config updated, docs pending | All concerns |
| Lift `@owner -> @domain` migration guards | Pending | Governance |
| Matrix dispatchers vs individual workflows | Partially decided (D-ACT-03) | Maintenance, discoverability, copy |
| Inline script extraction priority | Pending | Governance |
