# Pipeline Discovery: Index

> Phase 1.2: Scripts + Actions Governance
> Updated: 2026-04-02
> One file per concern. Each contains: pipelines needed, Mermaid diagrams, scripts involved, audit findings.

## Concerns

| Concern | File | Pipelines | Status |
|---|---|---|---|
| copy | [copy.md](copy.md) | Social feeds, changelogs, showcase, translation, quality suite, copy linting | Reviewing |
| discoverability | [discoverability.md](discoverability.md) | AI discovery (gen+verify), SEO metadata | Pending |
| health | [health.md](health.md) | Link checks, rendering, external links, content quality, freshness, OpenAPI, page structure, page repair | Pending |
| maintenance | [maintenance.md](maintenance.md) | Index generation, reference data, governance catalogs | Pending |
| governance | [governance.md](governance.md) | Codex compliance, post-merge sync, self-heal, issue/PR lifecycle, hooks | Pending |
| brand | [brand.md](brand.md) | EN-GB style normalisation | Pending |
| integrations | [integrations.md](integrations.md) | External doc fetch, OpenAPI specs, exchange data | Pending |

## Pipeline Health Dashboard

| Pipeline | Concern | Status |
|---|---|---|
| Social feeds | copy | Functional, fragile (3 permission bugs, no error handling) |
| Changelogs | copy | Good |
| Showcase | copy | BROKEN (disabled) |
| Translation | copy | Good (path mismatch bug) |
| Copy quality (PR) | copy | Good (P2 hard gate) |
| Copy linting | copy | DISCONNECTED (scripts exist, no PR workflow) |
| AI discovery (gen+verify) | discoverability | Good (no error handling) |
| SEO metadata | discoverability | BROKEN (P0: no commit step) |
| Link check (PR) | health | Good |
| Page rendering (PR) | health | Good |
| External link scan | health | Headless (no follow-up) |
| Content quality scan | health | BROKEN (continue-on-error masks all) |
| Freshness monitor | health | Headless (no re-dispatch) |
| OpenAPI validation | health | GOLD STANDARD |
| Page structure (PR) | health | DISCONNECTED (9 scripts, most no workflow) |
| Page repair | health | DISCONNECTED (full chain as scripts, no workflow) |
| Index generation (gen+verify) | maintenance | Good (missing component registry verify pair) |
| Reference data | maintenance | Mixed (contracts deferred, release has bug) |
| Governance catalogs | maintenance | DISCONNECTED (5 generators, most no workflow) |
| Codex compliance (PR) | governance | Good (stale path bug) |
| Post-merge sync | governance | Good |
| Self-heal | governance | Good |
| Issue/PR lifecycle | governance | Good (1,224 lines inline, needs extraction) |
| Hook enforcement | governance | Good (local only) |
