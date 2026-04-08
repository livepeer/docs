# Section Summary: v2/gateways/resources/

**Audit date:** 2026-04-08
**Total files on disk:** 56 MDX files
**In docs.json nav:** 38 | **Orphans:** 18
**Review files written:** 27 (including 2 batch reviews and 2 orphan batch reviews)

---

## Overview

The resources section contains reference material, API documentation, glossary, deployment terms, compendium pages, and knowledge hub pages. It has the largest page count of any gateways section due to the API endpoint pages (13 AI-API + 12 CLI-HTTP). The section splits into 7 subsections: top-level pages, reference/technical, reference/go-livepeer, API reference (AI-API, CLI-HTTP, AI-Worker), compendium, and knowledge hub.

---

## Per-Page Verdicts

### Top-Level Pages

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| glossary.mdx | Yes | CONDITIONAL PASS | `status: draft`, banned domain terms ("cryptocurrency"), missing day in lastVerified |
| deployment-terms.mdx | Yes | PASS | Minor: `PageType` casing |
| reference/faq.mdx | Yes | PASS | Minor: `PageType` casing |

### Reference / Technical

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| reference/technical/technical-architecture.mdx | Yes | PASS | Strong page |
| reference/technical/configuration-flags.mdx | Yes | PASS | Minor: `PageType` casing |
| reference/technical/contract-addresses.mdx | Yes | PASS | Data-driven |
| reference/technical/cli-commands.mdx | Yes | PASS | Minor: `PageType` casing |
| reference/technical/orchestrator-offerings.mdx | Yes | PASS | Data-driven |

### Reference / go-livepeer

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| reference/go-livepeer/bandwidth-requirements.mdx | Yes | PASS | |
| reference/go-livepeer/hardware-requirements.mdx | Yes | NEEDS WORK | Contains TBD sections (RAM, Disk). `<Danger> From v1` flag. Uses "video miners" (banned term) |
| reference/go-livepeer/gpu-support.mdx | Yes | NEEDS WORK | `<Danger> From v1` flag. Uses "mining" and "cryptocurrencies" (banned terms). Stale GPU model data |
| reference/go-livepeer/cli-reference.mdx | Yes | NEEDS WORK | `<Danger> From v1` flag. Large page of CLI flags from v1 era. Uses "Broadcaster" (deprecated term) |
| reference/go-livepeer/prometheus-metrics.mdx | Yes | PASS | Comprehensive metrics tables |

### API Reference / AI-API (13 endpoint pages)

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| AI-API/ai.mdx | Yes | PASS | Clean API portal page |
| AI-API/text-to-image.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/image-to-image.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/image-to-video.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/upscale.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/audio-to-text.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/segment-anything-2.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/llm.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/image-to-text.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/live-video-to-video.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/text-to-speech.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/health.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/hardware-info.mdx | Yes | PASS | OpenAPI wrapper |
| AI-API/hardware-stats.mdx | Yes | PASS | OpenAPI wrapper (batch reviewed) |

### API Reference / CLI-HTTP (12 endpoint pages)

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| CLI-HTTP/cli-http-api.mdx | Yes | PASS | Portal page |
| CLI-HTTP/unbond.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/rebond.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/activateorchestrator.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/setbroadcastconfig.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/setmaxpriceforcapability.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/reward.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/transfertokens.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/signmessage.mdx | Yes | PASS | OpenAPI wrapper |
| CLI-HTTP/bond.mdx | **No** | FAIL | Orphan. Missing `lastVerified` |
| CLI-HTTP/protocolparameters.mdx | **No** | FAIL | Orphan |
| CLI-HTTP/registeredorchestrators.mdx | **No** | FAIL | Orphan |
| CLI-HTTP/status.mdx | **No** | FAIL | Orphan. Missing `lastVerified` |

### API Reference / AI-Worker

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| AI-Worker/ai-worker-api.mdx | No (orphan) | FAIL | Not in nav. Duplicate of AI-API portal |

### Compendium

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| compendium/livepeer-exchanges.mdx | Yes | PASS | Data-driven |
| compendium/arbitrum-exchanges.mdx | Yes | PASS | Data-driven |
| compendium/arbitrum-rpc.mdx | Yes | PASS | Data-driven |

### Knowledge Hub

| Page | In Nav | Verdict | Notes |
|---|---|---|---|
| knowledge-hub/guides.mdx | Yes | PASS | |
| knowledge-hub/resources.mdx | Yes | PASS | |
| knowledge-hub/help.mdx | Yes | PASS | |

### Orphan / Duplicate Files (reviewed in batch)

| Page | Verdict | Notes |
|---|---|---|
| api-reference/_delete-all-api.mdx | FAIL | Deletion candidate. Broken anchor links. Conflicting openapi/CardGroup strategies |
| api-reference/ai-worker-api.mdx | FAIL | Duplicate of AI-Worker/ai-worker-api.mdx |
| api-reference/hardware-info.mdx | FAIL | Duplicate of AI-API/hardware-info.mdx |
| api-reference/hardware-stats.mdx | FAIL | Duplicate of AI-API/hardware-stats.mdx |
| api-reference/health.mdx | FAIL | Duplicate of AI-API/health.mdx |
| technical/go-livepeer/cli-reference.mdx | FAIL | Duplicate of reference/go-livepeer/cli-reference.mdx |
| technical/go-livepeer/gpu-support.mdx | FAIL | Duplicate of reference/go-livepeer/gpu-support.mdx |
| technical/go-livepeer/hardware-requirements.mdx | FAIL | Duplicate of reference/go-livepeer/hardware-requirements.mdx |
| technical/go-livepeer/prometheus-metrics.mdx | FAIL | Duplicate of reference/go-livepeer/prometheus-metrics.mdx |

---

## Score Distribution

| Verdict | Count | % |
|---------|-------|---|
| PASS | 34 | 60.7% |
| CONDITIONAL PASS | 1 | 1.8% |
| NEEDS WORK | 3 | 5.4% |
| FAIL (orphan/duplicate) | 18 | 32.1% |
| **Total** | **56** | **100%** |

---

## Category Failure Heatmap (nav-registered pages only, excluding OpenAPI wrappers)

| Category | glossary | deploy-terms | faq | tech-arch | config-flags | contract-addr | cli-cmds | orch-offer | bw-req | hw-req | gpu | cli-ref | prom | ai-portal | cli-http-portal | exchanges(3) | knowledge(3) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1. FM | WARN | WARN | WARN | PASS | WARN | PASS | WARN | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 2. VOICE | WARN | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | FAIL | FAIL | FAIL | PASS | PASS | PASS | PASS | PASS |
| 3. HEADINGS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 4. STRUCTURE | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | FAIL | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 5. LAYOUT | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 6. VERACITY | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | WARN | WARN | PASS | PASS | PASS | PASS | PASS | PASS |
| 7. NAV | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 8. LINKS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 9. PROCESS | WARN | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | FAIL | FAIL | FAIL | PASS | PASS | PASS | PASS | PASS |
| 10. COMPLETE | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | FAIL | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

---

## Key Findings

### 1. Orphan / Duplicate Page Problem (18 files)
18 of 56 files are not in docs.json navigation. This includes:
- 9 duplicate files at wrong paths (reference/technical/go-livepeer/ duplicating reference/go-livepeer/, and root-level API files duplicating AI-API/ files)
- 4 CLI-HTTP endpoint pages (bond, protocolparameters, registeredorchestrators, status) that exist but were excluded from nav
- 1 deletion candidate (`_delete-all-api.mdx`)
- 1 AI-Worker portal page that duplicates the AI-API portal
- 3 root-level API system endpoint duplicates

### 2. v1 Legacy Content (3 pages)
Three go-livepeer reference pages carry `<Danger> From v1</Danger>` banners and contain banned terms: "video miners", "mining cryptocurrencies", "Broadcaster". These pages (hardware-requirements, gpu-support, cli-reference) need a v2 content pass to update terminology and remove stale content.

### 3. OpenAPI Wrapper Consistency
The 25 OpenAPI wrapper pages (13 AI-API + 12 CLI-HTTP) follow a consistent pattern but have two systematic issues:
- `PageType` vs `pageType` casing inconsistency across pages
- Many descriptions are minimal placeholders ("Bond for Livepeer gateways." pattern)

### 4. TBD Sections (hardware-requirements.mdx)
The hardware requirements page has two "TBD" sections for RAM and Disk. This is visible to readers and undermines credibility.

### 5. CLI-HTTP Nav Gap
4 useful CLI-HTTP endpoints (bond, protocolparameters, registeredorchestrators, status) exist on disk but are excluded from docs.json navigation. These should either be registered in nav or archived.

### 6. Glossary Draft Status
The glossary page (`status: draft`) may be blocking production gates. Content is comprehensive and production-ready.

---

## Systematic Issues (cross-cutting)

| Issue | Affected Pages | Priority |
|---|---|---|
| `PageType` vs `pageType` casing | ~15 pages | P2 |
| Missing `complexity` / `lifecycleStage` | All pages | P3 |
| Missing `lastVerified` | bond.mdx, status.mdx, _delete-all-api.mdx | P2 |
| Placeholder descriptions | ~12 OpenAPI wrappers | P3 |
| Banned domain terms | gpu-support, hardware-requirements, cli-reference, glossary | P1 |
| `<Danger> From v1` flags | 3 go-livepeer pages | P1 |

---

## Recommendations

### P0 -- Immediate
1. Archive or delete the 9 duplicate files (5 loose API files + 4 technical/go-livepeer duplicates)
2. Archive or delete `_delete-all-api.mdx` -- confirmed deletion candidate

### P1 -- Short Term
3. Register the 4 missing CLI-HTTP endpoints in docs.json nav, or archive them
4. Remove `<Danger> From v1` banners and update v1-era terminology in 3 go-livepeer pages
5. Fill TBD sections in hardware-requirements.mdx
6. Fix banned domain terms in glossary.mdx (cryptocurrency, crypto-wallet)
7. Promote glossary.mdx from `status: draft` to `status: current`

### P2 -- Medium Term
8. Normalise `PageType` to `pageType` across all affected pages
9. Improve placeholder descriptions on OpenAPI wrapper pages
10. Add `lastVerified` to pages missing it

### P3 -- Low Priority
11. Add `complexity` and `lifecycleStage` to all frontmatter
12. Add Related Pages / CTA sections to reference pages that lack them

---

## Overall Section Grade: GOOD

The resources section is the most complete section in the gateways tab. The API reference subsection is well-organised with consistent patterns. The top-level reference pages (technical architecture, configuration flags, contract addresses, CLI commands, Prometheus metrics) are production-quality. The main weaknesses are orphan/duplicate files (a cleanup task, not a content quality issue) and 3 v1-era go-livepeer pages that need terminology updates. The compendium and knowledge hub subsections are clean.
